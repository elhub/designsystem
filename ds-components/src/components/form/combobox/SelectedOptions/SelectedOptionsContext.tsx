import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { usePrevious } from '../../../../util'
import { useInputContext } from '../Input/inputContext'
import { isInList } from '../combobox-utils'
import { useCustomOptionsContext } from '../customOptionsContext'
import { type ComboboxOption, type ComboboxProps, type MaxSelected } from '../types'

interface SelectedOptionsContextType {
  addSelectedOption: (option: ComboboxOption) => void
  isMultiSelect?: boolean
  removeSelectedOption: (option: ComboboxOption) => void
  prevSelectedOptions?: ComboboxOption[]
  selectedOptions: ComboboxOption[]
  maxSelected?: MaxSelected & { isLimitReached: boolean }
  maxShown?: number
  setSelectedOptions: (options: ComboboxOption[]) => void
  toggleOption: (
    option: ComboboxOption,
    event: React.PointerEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => void
}

const SelectedOptionsContext = createContext<SelectedOptionsContextType>({} as SelectedOptionsContextType)

export const SelectedOptionsProvider = ({
  children,
  value
}: {
  children: React.ReactNode
  value: Pick<
    ComboboxProps,
    'allowNewValues' | 'isMultiSelect' | 'onToggleSelected' | 'maxSelected' | 'maxShown'
  > & {
    options: ComboboxOption[]
    selectedOptions?: ComboboxOption[]
  }
}) => {
  const { clearInput, focusInput, setValue } = useInputContext()
  const { customOptions, removeCustomOption, addCustomOption, setCustomOptions } = useCustomOptionsContext()
  const {
    allowNewValues,
    isMultiSelect,
    selectedOptions: externalSelectedOptions,
    onToggleSelected,
    options,
    maxSelected,
    maxShown
  } = value
  const [internalSelectedOptions, setSelectedOptions] = useState<ComboboxOption[]>([])
  const selectedOptions = useMemo(
    () => externalSelectedOptions ?? [...customOptions, ...internalSelectedOptions],
    [customOptions, externalSelectedOptions, internalSelectedOptions]
  )

  const addSelectedOption = useCallback(
    (option: ComboboxOption) => {
      const isCustomOption = !isInList(option, options)
      if (isCustomOption) {
        if (allowNewValues) {
          addCustomOption(option)
        }
        if (!isMultiSelect) {
          setSelectedOptions([])
        }
      } else if (isMultiSelect) {
        setSelectedOptions((oldSelectedOptions) => [...oldSelectedOptions, option])
      } else {
        setSelectedOptions([option])
        setCustomOptions([])
      }
      onToggleSelected?.(option.value, true, isCustomOption)
    },
    [addCustomOption, allowNewValues, isMultiSelect, onToggleSelected, options, setCustomOptions]
  )

  const removeSelectedOption = useCallback(
    (option: ComboboxOption) => {
      const isCustomOption = isInList(option, customOptions)
      if (isCustomOption) {
        removeCustomOption(option)
      } else {
        setSelectedOptions((oldSelectedOptions) =>
          oldSelectedOptions.filter((selectedOption) => selectedOption !== option)
        )
      }
      onToggleSelected?.(option.value, false, isCustomOption)
    },
    [customOptions, onToggleSelected, removeCustomOption]
  )

  const toggleOption = useCallback(
    (option: ComboboxOption, event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
      if (isInList(option.value, selectedOptions)) {
        removeSelectedOption(option)
        console.log('removeSelectedOption')
        clearInput(event)
      } else {
        addSelectedOption(option)
        if (!isMultiSelect) {
          // in single-select we set the value to the selected option
          setValue(option.label)
        }
      }

      if (isMultiSelect) {
        clearInput(event)
      }
      focusInput()
    },
    [addSelectedOption, clearInput, focusInput, removeSelectedOption, selectedOptions]
  )

  const prevSelectedOptions = usePrevious<ComboboxOption[]>(selectedOptions)

  const isLimitReached = !!maxSelected?.limit && selectedOptions.length >= maxSelected.limit

  const selectedOptionsState = {
    addSelectedOption,
    isMultiSelect,
    removeSelectedOption,
    prevSelectedOptions,
    selectedOptions,
    setSelectedOptions,
    toggleOption,
    maxSelected: maxSelected && {
      ...maxSelected,
      isLimitReached
    },
    maxShown
  }

  return (
    <SelectedOptionsContext.Provider value={selectedOptionsState}>{children}</SelectedOptionsContext.Provider>
  )
}

export const useSelectedOptionsContext = () => {
  const context = useContext(SelectedOptionsContext)
  if (!context) {
    throw new Error('useSelectedOptionsContext must be used within a SelectedOptionsProvider')
  }
  return context
}
