import { type FormItemProps } from '../form-item'
import type React from 'react'
import { type ChangeEvent, type InputHTMLAttributes } from 'react'

/**
 * A more complex version of options for the Combobox.
 * Used for separating the label and the value of the option.
 */
export interface ComboboxOption {
  /**
   * The label to display in the dropdown list
   */
  label: string
  /**
   * The programmatic value of the option, for use internally. Will be returned from onToggleSelected.
   */
  value: string

  /**
   * Optional secondary text shown under the option label in the dropdown list.
   */
  description?: string
}

export interface MaxSelected {
  /**
   * The limit for maximum selected options
   */
  limit: number
  /**
   * Override the message to display when the limit for maximum selected options has been reached
   */
  message?: string
}

export interface ComboboxProps
  extends
    FormItemProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value' | 'defaultValue'> {
  /**
   * List of options
   */
  options: string[] | ComboboxOption[]
  /**
   * If enabled, adds an option to add the value of the input as an option whenever there are no options matching the value.
   */
  allowNewValues?: boolean
  /**
   * If `true` adds a button to clear the value in the input field
   */
  clearButton?: boolean
  /**
   * Custom name for the clear button. Requires `clearButton` to be `true`.
   *
   * @default "Tøm"
   */
  clearButtonLabel?: string

  /**
   * Label to display when there are no results from the search.
   */
  noResultsLabel?: string
  /**
   * A list of options to display in the dropdown list.
   * If provided, this overrides the internal search logic in the component.
   * Useful for e.g. searching on a server or when overriding the search algorithm to search for synonyms or similar.
   */
  filteredOptions?: string[] | ComboboxOption[]
  /**
   * Custom class name for the input field.
   *
   * If used for styling, please consider using tokens instead.
   */
  inputClassName?: string | undefined
  /**
   * Controlled open/closed state for the dropdown list
   */
  isListOpen?: boolean
  /**
   * Set to `true` when doing an async search and waiting for new filteredOptions.
   *
   * Will show a spinner in the dropdown and announce to screen readers that it is loading.
   */
  isLoading?: boolean
  /**
   * Set to `true` to allow multiple selections.
   *
   * This will display selected values as a list of Chips in front of the input field, instead of a selection replacing the value of the input.
   *
   */
  isMultiSelect?: boolean
  /**
   * Callback function triggered whenever the value of the input field is triggered.
   *
   * @param event
   */
  onChange?: (event: ChangeEvent<HTMLInputElement> | null, value?: string) => void
  /**
   * Callback function triggered whenever the input field is cleared.
   *
   * @param event
   */
  onClear?: (event: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => void
  /**
   * Callback function triggered whenever an option is selected or de-selected.
   *
   * @param option The option value
   * @param isSelected Whether the option has been selected or unselected
   * @param isCustomOption Whether the option comes from user input, instead of from the list
   */
  onToggleSelected?: (option: ComboboxOption['value'], isSelected: boolean, isCustomOption: boolean) => void
  /**
   * List of selected options.
   *
   * Use this prop when controlling the selected state outside for the component,
   * e.g. for a filter, where options can be toggled elsewhere/programmatically.
   */
  selectedOptions?: string[] | ComboboxOption[]
  /**
   * Options for the maximum number of selected options.
   */
  maxSelected?: MaxSelected

  /**
   * Options for the maximum number of shown options.
   */
  maxShown?: number
  /**
   * Set to `true` to enable inline autocomplete.
   *
   * @default false
   */
  shouldAutocomplete?: boolean
  /**
   * When set to `true` displays selected options as Chips before the input field
   *
   * @default true
   */
  shouldShowSelectedOptions?: boolean
  /**
   * When set to `true` displays the toggle button for opening/closing the dropdown list
   *
   * @default true
   */
  toggleListButton?: boolean
  /**
   * Custom name for the toggle list-button. Requires "toggleListButton" to be `true`.
   *
   * @default "Alternativer"
   */
  toggleListButtonLabel?: string
  /**
   * Set this to override the value of the input field.
   *
   * This converts the input to a controlled input, so you have to use onChange to update the value.
   */
  value?: string
  /**
   * Set this to set the default value of the input field.
   */
  defaultValue?: string
}
