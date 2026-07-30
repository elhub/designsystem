import cl from 'clsx'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IconValidationCheck } from '@elhub/ds-icons'
import { Loader } from '../../../loader'
import { BodyText } from '../../../typography'
import { useInputContext } from '../Input/inputContext'
import { useSelectedOptionsContext } from '../SelectedOptions/SelectedOptionsContext'
import { isInList } from '../combobox-utils'
import { type ComboboxOption } from '../types'
import filteredOptionsUtil from './filtered-options-util'
import { useFilteredOptionsContext } from './filteredOptionsContext'

const LIST_HEIGHT = 290
const OVERSCAN = 3

const FilteredOptions: React.FC = () => {
  const { id, size } = useInputContext()
  const {
    allowNewValues,
    isLoading,
    isListOpen,
    filteredOptions,
    noResultsLabel,
    isMouseLastUsedInputDevice,
    setIsMouseLastUsedInputDevice,
    isValueNew,
    toggleIsListOpen,
    activeDecendantId,
    virtualFocus
  } = useFilteredOptionsContext()
  const { isMultiSelect, selectedOptions, toggleOption, maxSelected } = useSelectedOptionsContext()
  const listRef = useRef<HTMLDivElement>(null)
  const optionsRef = useRef<HTMLUListElement>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [optionsOffset, setOptionsOffset] = useState(0)
  const optionHeight = size === 'small' ? 32 : 44
  const activeIndex = activeDecendantId
    ? filteredOptions.findIndex(
        (_, index) => filteredOptionsUtil.getOptionId(id, index) === activeDecendantId
      )
    : -1
  const optionsScrollTop = Math.max(0, scrollTop - optionsOffset)
  const startIndex = Math.max(0, Math.floor(optionsScrollTop / optionHeight) - OVERSCAN)
  const endIndex = Math.min(
    filteredOptions.length,
    Math.ceil((optionsScrollTop + LIST_HEIGHT) / optionHeight) + OVERSCAN
  )
  const visibleOptionEntries = useMemo(() => {
    const indices = Array.from({ length: endIndex - startIndex }, (_, index) => startIndex + index)
    if (activeIndex >= 0 && !indices.includes(activeIndex)) {
      indices.push(activeIndex)
    }
    return indices
      .sort((first, second) => first - second)
      .map((index) => ({
        index,
        option: filteredOptions[index]
      }))
  }, [activeIndex, endIndex, filteredOptions, startIndex])

  useEffect(() => {
    setOptionsOffset(optionsRef.current?.offsetTop ?? 0)
  }, [filteredOptions.length, isLoading, maxSelected?.isLimitReached])

  useEffect(() => {
    const element = listRef.current
    if (!element || activeIndex < 0) {
      return
    }
    const optionTop = (optionsRef.current?.offsetTop ?? 0) + activeIndex * optionHeight
    const optionBottom = optionTop + optionHeight
    const viewportHeight = element.clientHeight || LIST_HEIGHT
    if (optionTop < element.scrollTop) {
      element.scrollTop = optionTop
      setScrollTop(optionTop)
    } else if (optionBottom > element.scrollTop + viewportHeight) {
      const nextScrollTop = optionBottom - viewportHeight
      element.scrollTop = nextScrollTop
      setScrollTop(nextScrollTop)
    }
  }, [activeIndex, optionHeight])

  const isDisabled = (option: ComboboxOption): boolean =>
    !!maxSelected?.isLimitReached && !isInList(option.value, selectedOptions)

  const shouldRenderNonSelectables =
    maxSelected?.isLimitReached || // Render maxSelected message
    isLoading || // Render loading message
    (!isLoading && filteredOptions.length === 0) // Render no hits message

  const shouldRenderFilteredOptionsList =
    (allowNewValues && isValueNew && !maxSelected?.isLimitReached) || // Render add new option
    filteredOptions.length > 0 // Render filtered options

  return (
    <div
      className={cl('eds-combobox__list', {
        'eds-combobox__list--closed': !isListOpen,
        'eds-combobox__list--with-hover': isMouseLastUsedInputDevice
      })}
      ref={listRef}
      id={filteredOptionsUtil.getFilteredOptionsId(id)}
      tabIndex={-1}
      onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
    >
      {shouldRenderNonSelectables && (
        <div className='eds-combobox__list--non-selectables' role='status'>
          {maxSelected?.isLimitReached && (
            <div
              className='eds-combobox__list-item--max-selected'
              id={filteredOptionsUtil.getMaxSelectedOptionsId(id)}
            >
              {maxSelected.message ?? `${selectedOptions.length} av ${maxSelected.limit} er valgt.`}
            </div>
          )}
          {isLoading && (
            <div className='eds-combobox__list-item--loading' id={filteredOptionsUtil.getIsLoadingId(id)}>
              <Loader />
            </div>
          )}
          {!isLoading && filteredOptions.length === 0 && (
            <div className='eds-combobox__list-item--no-options' id={filteredOptionsUtil.getNoHitsId(id)}>
              <BodyText size={size}>{noResultsLabel}</BodyText>
            </div>
          )}
        </div>
      )}

      {shouldRenderFilteredOptionsList && (
        <ul
          ref={optionsRef}
          role='listbox'
          className='eds-combobox__list-options eds-combobox__list-options--virtual'
          style={{ height: filteredOptions.length * optionHeight }}
        >
          {visibleOptionEntries.map(({ index, option }) => {
            const optionId = filteredOptionsUtil.getOptionId(id, index)
            return (
              <li
                className={cl('eds-combobox__list-item', {
                  'eds-combobox__list-item--focus': activeDecendantId === optionId,
                  'eds-combobox__list-item--selected': isInList(option.value, selectedOptions),
                  'eds-combobox__list-item--last': index === filteredOptions.length - 1
                })}
                data-no-focus={isDisabled(option) || undefined}
                id={optionId}
                key={`${option.label}-${index}`}
                style={{ height: optionHeight, transform: `translateY(${index * optionHeight}px)` }}
                tabIndex={-1}
                onMouseMove={() => {
                  if (activeDecendantId !== optionId) {
                    virtualFocus.moveFocusToElement(optionId)
                    setIsMouseLastUsedInputDevice(true)
                  }
                }}
                onPointerUp={(event) => {
                  if (isDisabled(option)) {
                    return
                  }
                  toggleOption(option, event)
                  if (!isMultiSelect && !isInList(option.value, selectedOptions)) {
                    toggleIsListOpen(false)
                  }
                }}
                role='option'
                aria-selected={isInList(option.value, selectedOptions)}
                aria-disabled={isDisabled(option) || undefined}
                aria-posinset={index + 1}
                aria-setsize={filteredOptions.length}
              >
                <>
                  <BodyText size={size}>{option.label}</BodyText>
                  {isInList(option.value, selectedOptions) && (
                    <IconValidationCheck size='small' color='var(--eds-semantic-text-inverted)' />
                  )}
                </>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default FilteredOptions
