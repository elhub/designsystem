import cl from 'clsx'
import React, { forwardRef, type SelectHTMLAttributes } from 'react'
import { Root as SelectRoot, Trigger as SelectTrigger, Value as SelectValue } from '@radix-ui/react-select'
import { IconChevronDown } from '@elhub/ds-icons'

import { SelectContext } from './useSelectContext'
import { useFormItemContext } from '../form-item/useFormItemContext'
import { type FormItemProps } from '../form-item'

export interface SelectProps
  extends Omit<FormItemProps, 'error'>, Omit<SelectHTMLAttributes<HTMLButtonElement>, 'size' | 'error'> {
  children: React.ReactNode
  placeholder: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  value?: string
  error?: boolean
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>((props, _) => {
  const { children, placeholder, onValueChange, className, defaultValue, disabled, value, size, ...rest } =
    props

  const { error: { hasError } = {}, size: formItemSize, inputProps } = useFormItemContext()

  const [isOpen, setIsOpen] = React.useState(false)

  const _size = size ?? formItemSize
  const _disabled = disabled || inputProps.disabled
  const _error = rest.error || hasError

  return (
    <SelectContext.Provider value={{ size: _size }}>
      <SelectRoot
        disabled={_disabled}
        value={value}
        onValueChange={onValueChange}
        onOpenChange={(open) => {
          setIsOpen(open)
        }}
        defaultValue={defaultValue}
      >
        <SelectTrigger
          className={cl(
            'eds-select__trigger',
            'eds-select__trigger',
            `eds-select__trigger--${_size}`,
            _size === 'small' ? 'eds-body-text--small' : `eds-body-text--medium`,
            _error && 'eds-select__trigger--error',
            className
          )}
          {...rest}
        >
          <SelectValue placeholder={placeholder} />
          <IconChevronDown
            size='xsmall'
            className={cl('eds-select__icon', {
              'eds-select__icon--open': isOpen,
              'eds-select__icon--error': _error
            })}
          />
        </SelectTrigger>
        {children}
      </SelectRoot>
    </SelectContext.Provider>
  )
})
Select.displayName = 'Select'
