import cl from 'clsx'
import React from 'react'
import { IconValidationCheck } from '@elhub/ds-icons'
import { Loader } from '../../../loader'
import { BodyText } from '../../../typography'
import { useInputContext } from '../Input/inputContext'
import { useSelectedOptionsContext } from '../SelectedOptions/SelectedOptionsContext'
import { isInList } from '../combobox-utils'
import { type ComboboxOption } from '../types'
import filteredOptionsUtil from './filtered-options-util'
import { useFilteredOptionsContext } from './filteredOptionsContext'

const FilteredOptions: React.FC = () => {
  const { id, size } = useInputContext()
  const {
    allowNewValues,
    isLoading,
    isListOpen,
    filteredOptions,
    setFilteredOptionsRef,
    noResultsLabel,
    isMouseLastUsedInputDevice,
    setIsMouseLastUsedInputDevice,
    isValueNew,
    toggleIsListOpen,
    activeDecendantId,
    virtualFocus
  } = useFilteredOptionsContext()
  const { isMultiSelect, selectedOptions, toggleOption, maxSelected } = useSelectedOptionsContext()

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
      id={filteredOptionsUtil.getFilteredOptionsId(id)}
      tabIndex={-1}
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
        <ul ref={setFilteredOptionsRef} role='listbox' className='eds-combobox__list-options'>
          {filteredOptions.map((option, index) => (
            <li
              className={cl('eds-combobox__list-item', {
                'eds-combobox__list-item--focus':
                  activeDecendantId === filteredOptionsUtil.getOptionId(id, option.label),
                'eds-combobox__list-item--selected': isInList(option.value, selectedOptions)
              })}
              data-no-focus={isDisabled(option) || undefined}
              id={filteredOptionsUtil.getOptionId(id, option.label)}
              key={`${option.label}-${index}`}
              tabIndex={-1}
              onMouseMove={() => {
                if (activeDecendantId !== filteredOptionsUtil.getOptionId(id, option.label)) {
                  virtualFocus.moveFocusToElement(filteredOptionsUtil.getOptionId(id, option.label))
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
            >
              <>
                <BodyText size={size}>{option.label}</BodyText>
                {isInList(option.value, selectedOptions) && (
                  <IconValidationCheck size='small' color='var(--eds-semantic-text-inverted)' />
                )}
              </>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FilteredOptions
