import cl from 'clsx'
import React, { createContext, type SetStateAction, useCallback, useContext, useMemo, useState } from 'react'
import { useClientLayoutEffect, usePrevious } from '../../../../util'
import { useInputContext } from '../Input/inputContext'
import { useSelectedOptionsContext } from '../SelectedOptions/SelectedOptionsContext'
import { useCustomOptionsContext } from '../customOptionsContext'
import { type ComboboxOption, type ComboboxProps } from '../types'
import filteredOptionsUtils from './filtered-options-util'
import useVirtualFocus, { type VirtualFocusType } from './useVirtualFocus'

interface FilteredOptionsProps {
  children: React.ReactNode
  value: Pick<ComboboxProps, 'allowNewValues' | 'isListOpen' | 'isLoading' | 'noResultsLabel'> & {
    filteredOptions?: ComboboxOption[]
    options: ComboboxOption[]
  }
}

interface FilteredOptionsContextType {
  activeDecendantId?: string
  allowNewValues?: boolean
  ariaDescribedBy?: string
  isListOpen: boolean
  isLoading?: boolean
  filteredOptions: ComboboxOption[]
  noResultsLabel?: string
  isMouseLastUsedInputDevice: boolean
  setIsMouseLastUsedInputDevice: React.Dispatch<SetStateAction<boolean>>
  isValueNew: boolean
  toggleIsListOpen: (newState?: boolean) => void
  currentOption?: ComboboxOption
  shouldAutocomplete?: boolean
  virtualFocus: VirtualFocusType
}

const FilteredOptionsContext = createContext<FilteredOptionsContextType>({} as FilteredOptionsContextType)

export const FilteredOptionsProvider = ({ children, value: props }: FilteredOptionsProps) => {
  const {
    allowNewValues,
    filteredOptions: externalFilteredOptions,
    isListOpen: isExternalListOpen,
    noResultsLabel,
    isLoading,
    options
  } = props
  const {
    inputProps: { 'aria-describedby': partialAriaDescribedBy },
    id,
    value,
    searchTerm,
    setValue,
    setSearchTerm,
    shouldAutocomplete
  } = useInputContext()
  const { maxSelected, selectedOptions } = useSelectedOptionsContext()

  const [isInternalListOpen, setInternalListOpen] = useState(false)
  const { customOptions } = useCustomOptionsContext()

  const filteredOptions = useMemo(() => {
    if (externalFilteredOptions) {
      return externalFilteredOptions
    }
    const opts = [...customOptions, ...options]
    return filteredOptionsUtils.getMatchingValuesFromList(searchTerm, opts)
  }, [customOptions, externalFilteredOptions, options, searchTerm])

  const optionIds = useMemo(
    () => filteredOptions.map((_, index) => filteredOptionsUtils.getOptionId(id, index)),
    [filteredOptions, id]
  )
  const disabledIds = useMemo(
    () =>
      new Set(
        maxSelected?.isLimitReached
          ? filteredOptions.flatMap((option, index) =>
              selectedOptions.some((selectedOption) => selectedOption.value === option.value)
                ? []
                : [filteredOptionsUtils.getOptionId(id, index)]
            )
          : []
      ),
    [filteredOptions, id, maxSelected?.isLimitReached, selectedOptions]
  )
  const virtualFocus = useVirtualFocus(optionIds, disabledIds)

  const previousSearchTerm = usePrevious(searchTerm)

  const [isMouseLastUsedInputDevice, setIsMouseLastUsedInputDevice] = useState(false)

  useClientLayoutEffect(() => {
    if (
      shouldAutocomplete &&
      filteredOptionsUtils.normalizeText(searchTerm) !== '' &&
      (previousSearchTerm?.length || 0) < searchTerm.length &&
      filteredOptions.length > 0
    ) {
      setValue(`${searchTerm}${filteredOptions[0].label.substring(searchTerm.length)}`)
      setSearchTerm(searchTerm)
    }
  }, [filteredOptions, previousSearchTerm, searchTerm, setSearchTerm, setValue, shouldAutocomplete])

  const isListOpen = useMemo(() => {
    return isExternalListOpen ?? isInternalListOpen
  }, [isExternalListOpen, isInternalListOpen])

  const toggleIsListOpen = useCallback(
    (newState?: boolean) => {
      virtualFocus.moveFocusToTop()
      setInternalListOpen((oldState) => newState ?? !oldState)
    },
    [virtualFocus]
  )

  const isValueNew = useMemo(
    () =>
      Boolean(value) &&
      ![...customOptions, ...options].some(
        (option) => option.label.toLocaleLowerCase() === value.toLocaleLowerCase()
      ),
    [customOptions, options, value]
  )

  const ariaDescribedBy = useMemo(() => {
    let activeOption
    if (!isLoading && filteredOptions.length === 0) {
      activeOption = filteredOptionsUtils.getNoHitsId(id)
    } else if ((value && value !== '') || isLoading) {
      if (shouldAutocomplete && filteredOptions[0]) {
        activeOption = filteredOptionsUtils.getOptionId(id, 0)
      } else if (isListOpen && isLoading) {
        activeOption = filteredOptionsUtils.getIsLoadingId(id)
      }
    }
    const maybeMaxSelectedOptionsId =
      maxSelected?.isLimitReached && filteredOptionsUtils.getMaxSelectedOptionsId(id)
    return cl(activeOption, maybeMaxSelectedOptionsId, partialAriaDescribedBy) || undefined
  }, [
    isListOpen,
    isLoading,
    maxSelected?.isLimitReached,
    value,
    partialAriaDescribedBy,
    shouldAutocomplete,
    filteredOptions,
    id
  ])

  const activeDecendantId = virtualFocus.activeId
  const currentOption = activeDecendantId ? filteredOptions[optionIds.indexOf(activeDecendantId)] : undefined

  const filteredOptionsState = {
    activeDecendantId,
    allowNewValues,
    shouldAutocomplete,
    isListOpen,
    isLoading,
    filteredOptions,
    isMouseLastUsedInputDevice,
    setIsMouseLastUsedInputDevice,
    noResultsLabel,
    isValueNew,
    toggleIsListOpen,
    currentOption,
    virtualFocus,
    ariaDescribedBy
  }

  return (
    <FilteredOptionsContext.Provider value={filteredOptionsState}>{children}</FilteredOptionsContext.Provider>
  )
}

export const useFilteredOptionsContext = () => {
  const context = useContext(FilteredOptionsContext)
  if (!context) {
    throw new Error('useFilteredOptionsContext must be used within a FilteredOptionsProvider')
  }
  return context
}
