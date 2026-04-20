import cl from 'clsx'
import React, { forwardRef, useRef } from 'react'
import { useMergeRefs } from 'util/mergeRefs'
import ComboboxWrapper from './ComboboxWrapper'
import FilteredOptions from './FilteredOptions/FilteredOptions'
import { useFilteredOptionsContext } from './FilteredOptions/filteredOptionsContext'
import Input from './Input/Input'
import { useInputContext } from './Input/inputContext'
import SelectedOptions from './SelectedOptions/SelectedOptions'
import { useSelectedOptionsContext } from './SelectedOptions/SelectedOptionsContext'
import ToggleListButton from './ToggleListButton'
import { type ComboboxProps } from './types'

const Combobox = forwardRef<
  HTMLInputElement,
  Omit<ComboboxProps, 'onChange' | 'options' | 'size' | 'onClear' | 'value'>
>((props, ref) => {
  const {
    className,
    disabled,
    toggleListButton = true,
    toggleListButtonLabel,
    inputClassName,
    shouldShowSelectedOptions = true,
    ...rest
  } = props

  const toggleListButtonRef = useRef<HTMLButtonElement>(null)

  const { activeDecendantId, toggleIsListOpen } = useFilteredOptionsContext()
  const { selectedOptions, isMultiSelect } = useSelectedOptionsContext()

  const { error: { hasError } = {}, focusInput, inputProps, inputRef, size } = useInputContext()

  const _disabled = disabled || inputProps.disabled

  const mergedInputRef = useMergeRefs(inputRef, ref)

  return (
    <ComboboxWrapper
      className={className}
      hasError={!!hasError}
      inputProps={inputProps}
      inputSize={size}
      toggleIsListOpen={toggleIsListOpen}
      toggleListButtonRef={toggleListButtonRef}
    >
      <div className='eds-combobox__wrapper'>
        <div
          className={cl('eds-combobox__wrapper-inner', `eds-combobox__wrapper-inner--${size}`, {
            'eds-combobox__wrapper-inner--virtually-unfocused': activeDecendantId !== undefined,
            'eds-combobox__wrapper-inner--disabled': _disabled,
            'eds-combobox__wrapper-inner--single': !isMultiSelect,
            'eds-combobox__wrapper-inner--multiple': isMultiSelect
          })}
          onClick={() => {
            if (inputProps.disabled) {
              return
            }
            // always open the list when clicking on the wrapper
            toggleIsListOpen(true)
            focusInput()
          }}
        >
          {!shouldShowSelectedOptions ? (
            <Input
              id={inputProps.id}
              ref={mergedInputRef}
              inputClassName={inputClassName}
              disabled={_disabled}
              {...rest}
            />
          ) : (
            <SelectedOptions selectedOptions={selectedOptions} size={size} disabled={_disabled}>
              <Input
                id={inputProps.id}
                ref={mergedInputRef}
                inputClassName={inputClassName}
                disabled={_disabled}
                {...rest}
              />
            </SelectedOptions>
          )}
          <div className='eds-combobox__buttons'>
            {toggleListButton && (
              <ToggleListButton toggleListButtonLabel={toggleListButtonLabel} ref={toggleListButtonRef} />
            )}
          </div>
        </div>
        <FilteredOptions />
      </div>
    </ComboboxWrapper>
  )
})

Combobox.displayName = 'Combobox'

export default Combobox
