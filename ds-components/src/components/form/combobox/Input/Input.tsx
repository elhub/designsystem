import cl from 'clsx'
import React, { type ChangeEvent, forwardRef, type InputHTMLAttributes, useCallback, useRef } from 'react'
import { omit, useClientLayoutEffect } from '../../../../util'
import filteredOptionsUtil from '../FilteredOptions/filtered-options-util'
import { useFilteredOptionsContext } from '../FilteredOptions/filteredOptionsContext'
import { useSelectedOptionsContext } from '../SelectedOptions/SelectedOptionsContext'
import { useInputContext } from './inputContext'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  ref: React.Ref<HTMLInputElement>
  inputClassName?: string
  value?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputClassName, disabled, placeholder, ...rest }, ref) => {
    const {
      clearInput,
      inputProps,
      onChange,
      size,
      value,
      externalValue,
      defaultValue,
      resetVersion,
      setValue,
      searchTerm,
      setSearchTerm,
      lastTypedValue
    } = useInputContext()
    const { selectedOptions, removeSelectedOption, toggleOption, isMultiSelect } = useSelectedOptionsContext()
    const {
      activeDecendantId,
      allowNewValues,
      currentOption,
      filteredOptions,
      isValueNew,
      toggleIsListOpen,
      isListOpen,
      ariaDescribedBy,
      setIsMouseLastUsedInputDevice,
      shouldAutocomplete,
      virtualFocus
    } = useFilteredOptionsContext()

    const onEnter = useCallback(
      (event: React.KeyboardEvent<HTMLElement> | React.PointerEvent<HTMLElement>) => {
        const isTextInSelectedOptions = (text: string) =>
          selectedOptions.some((option) => option.label.toLocaleLowerCase() === text.toLocaleLowerCase())

        if (currentOption) {
          event.preventDefault()
          // Selecting a value from the dropdown / FilteredOptions
          toggleOption(currentOption, event)
          if (!isMultiSelect && !isTextInSelectedOptions(currentOption.label)) {
            toggleIsListOpen(false)
          }
        } else if (shouldAutocomplete && isTextInSelectedOptions(value)) {
          event.preventDefault()
          if (isMultiSelect) {
            clearInput(event)
          } else {
            setSearchTerm('')
            toggleIsListOpen(false)
          }
        } else if ((allowNewValues || shouldAutocomplete) && value !== '') {
          event.preventDefault()
          // Autocompleting or adding a new value
          const exactMatch = filteredOptions.find(
            (option) => option.label.toLocaleLowerCase() === value.toLocaleLowerCase()
          )
          const autocompleteCandidate =
            shouldAutocomplete && filteredOptionsUtil.normalizeText(searchTerm) !== ''
              ? filteredOptions[0]
              : undefined
          const newSelectedValue =
            allowNewValues && isValueNew ? { label: value, value } : (exactMatch ?? autocompleteCandidate)
          if (!newSelectedValue) return
          toggleOption(newSelectedValue, event)
          if (!isMultiSelect && !isTextInSelectedOptions(newSelectedValue.label)) {
            toggleIsListOpen(false)
          }
        }
      },
      [
        allowNewValues,
        clearInput,
        currentOption,
        filteredOptions,
        isMultiSelect,
        isValueNew,
        searchTerm,
        selectedOptions,
        setSearchTerm,
        shouldAutocomplete,
        toggleIsListOpen,
        toggleOption,
        value
      ]
    )

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      switch (e.key) {
        case 'Escape':
          clearInput(e)
          toggleIsListOpen(false)
          break
        case 'Enter':
        case 'Accept':
          onEnter(e)
          break
        case 'Home':
          toggleIsListOpen(false)
          virtualFocus.moveFocusToTop()
          break
        case 'End':
          toggleIsListOpen(true)
          virtualFocus.moveFocusToBottom()
          break
        default:
          break
      }
    }

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        setIsMouseLastUsedInputDevice(false)
        if (e.key === 'Backspace') {
          if (value === '') {
            const lastSelectedOption = selectedOptions[selectedOptions.length - 1]
            if (lastSelectedOption) {
              removeSelectedOption(lastSelectedOption)
            }
          }
        } else if (e.key === 'ArrowDown') {
          // Check that cursor position is at the end of the input field,
          // so we don't interfere with text editing
          if ('selectionStart' in e.target && e.target.selectionStart === value?.length) {
            e.preventDefault()
            if (!activeDecendantId || !isListOpen) {
              toggleIsListOpen(true)
            }
            virtualFocus.moveFocusDown()
          }
        } else if (e.key === 'ArrowUp') {
          // Check that the FilteredOptions list is open and has virtual focus.
          // Otherwise, ignore keystrokes, so it doesn't interfere with text editing
          if (isListOpen && activeDecendantId) {
            e.preventDefault()
            if (virtualFocus.isFocusOnTheTop()) {
              toggleIsListOpen(false)
            }
            virtualFocus.moveFocusUp()
          }
        }
      },
      [
        value,
        selectedOptions,
        removeSelectedOption,
        isListOpen,
        activeDecendantId,
        setIsMouseLastUsedInputDevice,
        toggleIsListOpen,
        virtualFocus
      ]
    )

    const onChangeHandler = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        if (newValue && newValue !== '') {
          toggleIsListOpen(true)
        } else if (filteredOptions.length === 0) {
          toggleIsListOpen(false)
        }
        virtualFocus.moveFocusToTop()
        onChange(event)
      },
      [filteredOptions.length, virtualFocus, onChange, toggleIsListOpen]
    )

    const selectedSingleInputValue = !isMultiSelect ? selectedOptions[0]?.label : null
    const selectedSingleOptionValue = !isMultiSelect ? selectedOptions[0]?.value : undefined
    const previousSelection = useRef({ value: selectedSingleOptionValue, label: selectedSingleInputValue })

    // Synchronize selection changes without treating selected labels as search queries.
    // Depend on selection values, not array identity, so rerenders preserve typed edits.
    useClientLayoutEffect(() => {
      const previous = previousSelection.current
      const hadSelection = previous.value !== undefined
      const selectionChanged =
        previous.value !== selectedSingleOptionValue || previous.label !== selectedSingleInputValue
      previousSelection.current = { value: selectedSingleOptionValue, label: selectedSingleInputValue }
      const isTypingEcho = externalValue !== undefined && externalValue === lastTypedValue.current
      lastTypedValue.current = undefined

      // A controlled value is search text unless it represents the single selection.
      if (externalValue !== undefined) {
        if (selectionChanged || !isTypingEcho) {
          setSearchTerm(externalValue === selectedSingleInputValue ? '' : externalValue)
        }
      } else if (!isMultiSelect && (selectedSingleOptionValue !== undefined || hadSelection)) {
        setValue(selectedSingleInputValue ?? '')
        setSearchTerm('')
      }
    }, [
      externalValue,
      isMultiSelect,
      selectedSingleInputValue,
      selectedSingleOptionValue,
      lastTypedValue,
      setSearchTerm,
      setValue
    ])

    const previousResetVersion = useRef(resetVersion)
    useClientLayoutEffect(() => {
      if (previousResetVersion.current === resetVersion) return
      previousResetVersion.current = resetVersion
      lastTypedValue.current = undefined
      setValue(selectedSingleInputValue ?? defaultValue)
      setSearchTerm('')
      toggleIsListOpen(false)
    }, [
      resetVersion,
      selectedSingleInputValue,
      defaultValue,
      lastTypedValue,
      setValue,
      setSearchTerm,
      toggleIsListOpen
    ])

    return (
      <input
        {...rest}
        {...omit(inputProps, ['aria-invalid'])}
        required={isMultiSelect ? false : inputProps.required}
        placeholder={!!selectedOptions.length || selectedSingleInputValue ? undefined : placeholder}
        ref={ref}
        disabled={disabled}
        value={value}
        onChange={onChangeHandler}
        type='text'
        role='combobox'
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        aria-controls={filteredOptionsUtil.getFilteredOptionsId(inputProps.id ?? '')}
        aria-expanded={isListOpen}
        autoComplete='off'
        aria-autocomplete={shouldAutocomplete ? 'both' : 'list'}
        aria-activedescendant={activeDecendantId}
        aria-describedby={ariaDescribedBy}
        aria-invalid={inputProps['aria-invalid']}
        className={cl(
          inputClassName,
          'eds-combobox__input',
          'eds-body-text',
          size === 'small' ? 'eds-body-text--small' : 'eds-body-text--medium'
        )}
      />
    )
  }
)

Input.displayName = 'Combobox.Input'

export default Input
