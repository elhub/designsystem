import React, { forwardRef, type InputHTMLAttributes, useState } from 'react'
import cl from 'clsx'
import { BodyText } from 'components/typography'
import { omit } from 'util/index'
import { IconViewOff, IconViewOn, type SvgIconProps } from '@elhub/ds-icons'
import { useFormItemContext } from './form-item/useFormItemContext'
import { type FormItemProps } from './form-item'

export interface TextFieldProps extends FormItemProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Controlled value
   */
  value?: string
  /**
   * Defaults input-value without needing controlled-state
   */
  defaultValue?: string
  /**
   * Exposes the HTML size attribute
   */
  htmlSize?: number
  /**
   * Type of form control. Picking the correct type helps user fill in their required information
   * @default "text"
   */
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url'
  /**
   * TextField unit
   * Used for displaying a unit after the input field
   * @default ""
   */
  unit?: React.ReactNode

  /**
   * TextField icon
   * Used for displaying an icon before the input field
   */
  icon?: React.ComponentType<SvgIconProps>
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    id: contextId,
    error: { hasError: formItemError } = {},
    size: formItemSize,
    inputProps
  } = useFormItemContext()

  const { id, disabled, error, className, htmlSize, unit, icon: Icon, size, type = 'text', ...rest } = props

  // State to toggle password visibility
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  // Determine input type based on password visibility state
  const inputType = type === 'password' && isPasswordVisible ? 'text' : type

  const _id = id ?? contextId
  const _disabled = disabled || inputProps.disabled
  const _size = size ?? formItemSize
  const hasError = Boolean(error) || formItemError

  return (
    <div
      className={cl(
        'eds-form-item',
        `eds-form-item--${_size}`,
        {
          'eds-text-field--error': hasError
        },
        className
      )}
    >
      <div className='eds-text-field__input-container'>
        {!!Icon && (
          <div className='eds-text-field__icon'>
            <Icon />
          </div>
        )}
        {!!unit && (
          <BodyText as='span' size='small' className='eds-text-field__unit'>
            {unit}
          </BodyText>
        )}
        {type === 'password' && (
          <button
            type='button'
            onClick={() => {
              setPasswordVisible(!isPasswordVisible)
            }}
            className='eds-text-field__toggle-password'
            aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
          >
            {isPasswordVisible ? <IconViewOff size='xsmall' /> : <IconViewOn size='xsmall' />}
          </button>
        )}
        <input
          {...omit(rest, ['error', 'errorId', 'size'])}
          {...inputProps}
          id={_id}
          disabled={_disabled}
          ref={ref}
          type={inputType}
          className={cl(
            'eds-text-field__input',
            'eds-body-text',
            `eds-body-text--${_size === 'small' ? 'small' : 'medium'}`,
            `eds-text-field__input--${_size}`
          )}
          size={htmlSize}
        />
      </div>
    </div>
  )
})

TextField.displayName = 'TextField'

export default TextField
