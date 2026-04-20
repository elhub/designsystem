import React, {
  type ChangeEvent,
  type ChangeEventHandler,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  useId
} from 'react'
import { useClientLayoutEffect } from '../../../../util'
import { type FormItemProps, type FormItemContextType, FormItemSize } from '../../form-item/FormItem'
import { useFormItemContext } from 'components/form/form-item/useFormItemContext'

interface InputContextType extends FormItemContextType {
  clearInput: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void
  focusInput: () => void
  inputRef: React.RefObject<HTMLInputElement | null>
  value: string
  setValue: (text: string) => void
  onChange: ChangeEventHandler<HTMLElement>
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  shouldAutocomplete?: boolean
}

const InputContext = createContext<InputContextType | null>(null)

interface InputContextProviderProps {
  children: ReactNode
  value: {
    value?: string
    defaultValue?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onClear?: (event: React.PointerEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void
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

  const value = useMemo(() => String(externalValue ?? internalValue), [externalValue, internalValue])

  const _disabled = disabled || inputProps.disabled
  const _size = size ?? rest.size
  const _id = externalId || id || useId()

  const [searchTerm, setSearchTerm] = useState(value)

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value
      if (!externalValue) {
        setInternalValue(newValue)
      }
      externalOnChange?.(event)
      setSearchTerm(newValue)
    },
    [externalOnChange]
  )

  const setValue = useCallback(
    (text: string) => {
      setInternalValue(text)
    },
    [setInternalValue]
  )

  const clearInput = useCallback(
    (event: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => {
      // @ts-expect-error - event is not a ChangeEvent
      onClear?.(event)
      // @ts-expect-error - event is not a ChangeEvent
      externalOnChange?.(event)
      setValue('')
      setInternalValue('')
      setSearchTerm('')
    },
    [onClear]
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
        setValue,
        onChange,
        searchTerm,
        setSearchTerm,
        shouldAutocomplete
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
