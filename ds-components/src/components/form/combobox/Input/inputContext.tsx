import React, {
  type ChangeEvent,
  type ChangeEventHandler,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  useId
} from 'react'
import { useClientLayoutEffect } from '../../../../util'
import { type FormItemProps, type FormItemContextType, FormItemSize } from '../../form-item/FormItem'
import { useFormItemContext } from 'components/form/form-item/useFormItemContext'
import { type ComboboxProps } from '../types'

interface InputContextType extends FormItemContextType {
  clearInput: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void
  focusInput: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
  value: string
  externalValue?: string
  defaultValue: string
  resetVersion: number
  setValue: (text: string) => void
  onChange: ChangeEventHandler<HTMLElement>
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  shouldAutocomplete?: boolean
  lastTypedValue: React.RefObject<string | undefined>
}

const InputContext = createContext<InputContextType | null>(null)

interface InputContextProviderProps {
  children: ReactNode
  value: {
    value?: string
    defaultValue?: string
    onChange?: ComboboxProps['onChange']
    onClear?: ComboboxProps['onClear']
    shouldAutocomplete?: boolean
    size?: FormItemSize
  } & FormItemProps
}

export const InputContextProvider = ({ children, value: props }: InputContextProviderProps) => {
  const {
    defaultValue = '',
    inputProps: { disabled } = {},
    id: externalId,
    value: externalValue,
    onChange: externalOnChange,
    onClear,
    size,
    shouldAutocomplete
  } = props

  const { id, inputProps, ...rest } = useFormItemContext()
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [internalValue, setInternalValue] = useState(defaultValue)
  const lastTypedValue = useRef<string | undefined>(undefined)
  const [resetVersion, setResetVersion] = useState(0)

  useEffect(() => {
    const form = inputRef.current?.form
    const onReset = (event: Event) => {
      // Wait for cancellation and the consumer's selection reset before resetting the input.
      queueMicrotask(() => {
        if (!event.defaultPrevented) setResetVersion((version) => version + 1)
      })
    }
    form?.addEventListener('reset', onReset)
    return () => form?.removeEventListener('reset', onReset)
  }, [])

  const value = useMemo(() => String(externalValue ?? internalValue), [externalValue, internalValue])

  const _disabled = disabled || inputProps.disabled
  const _size = size ?? rest.size
  const _id = externalId || id || useId()

  const [searchTerm, setSearchTerm] = useState(value)

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value
      if (externalValue === undefined) {
        setInternalValue(newValue)
      }
      lastTypedValue.current = newValue
      externalOnChange?.(event, newValue)
      setSearchTerm(newValue)
    },
    [externalOnChange, externalValue]
  )

  const setValue = useCallback(
    (text: string) => {
      setInternalValue(text)
    },
    [setInternalValue]
  )

  const clearInput = useCallback(
    (event: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => {
      onClear?.(event)
      externalOnChange?.(null, '')
      setInternalValue('')
      setSearchTerm('')
      lastTypedValue.current = undefined
    },
    [externalOnChange, onClear]
  )

  const focusInput = useCallback(() => {
    inputRef.current?.focus?.()
  }, [])

  useClientLayoutEffect(() => {
    if (shouldAutocomplete && inputRef && value !== searchTerm) {
      inputRef.current?.setSelectionRange?.(searchTerm.length, value.length)
    }
  }, [value, searchTerm, shouldAutocomplete])

  return (
    <InputContext.Provider
      value={{
        ...rest,
        id: _id,
        inputProps: {
          ...inputProps,
          disabled: _disabled
        },
        size: _size,
        clearInput,
        focusInput,
        inputRef,
        value,
        externalValue,
        defaultValue,
        resetVersion,
        setValue,
        onChange,
        searchTerm,
        setSearchTerm,
        shouldAutocomplete,
        lastTypedValue
      }}
    >
      {children}
    </InputContext.Provider>
  )
}

export const useInputContext = () => {
  const context = useContext(InputContext)
  if (!context) {
    throw new Error('useInputContext must be used within an InputContextProvider')
  }
  return context
}
