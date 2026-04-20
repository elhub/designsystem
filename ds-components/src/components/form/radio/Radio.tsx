import cl from 'clsx'
import React, { forwardRef, type InputHTMLAttributes, useId } from 'react'
import { omit } from 'util/index'
import { useRadio } from './useRadio'
import { FormItemLabel, type FormItemProps } from '../form-item'
import { type AllowedRadioValue } from './RadioGroup'

export type RadioProps = FormItemProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue' | 'error'> & {
    /**
     * Radio label
     */
    children: React.ReactNode

    /**
     * Value of the radio
     */
    value?: AllowedRadioValue

    /**
     * Default value of the radio
     */
    defaultValue?: AllowedRadioValue

    error?: string
  }

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { inputProps, size, error, hideLabel } = useRadio(props)

  const _id = props.id ?? useId()
  const _disabled = props.disabled || inputProps.disabled
  const _error = props.error || !!error?.hasError
  const _hideLabel = props.hideLabel ?? hideLabel

  return (
    <div
      className={cl(
        'eds-radio',
        `eds-radio--${size}`,
        {
          'eds-radio--error': _error,
          'eds-radio--disabled': _disabled
        },
        props.className
      )}
    >
      <input
        {...omit(props, [
          'children',
          'size',
          'error',
          'warning',
          'description',
          'hideLabel',
          'indeterminate',
          'errorId'
        ])}
        {...inputProps}
        id={_id}
        ref={ref}
        className='eds-radio__input'
      />
      <FormItemLabel htmlFor={_id} size={size} weight='regular' className='eds-radio__label'>
        <div className={cl('eds-radio__content', { 'eds-sr-only': _hideLabel })}>{props.children}</div>
      </FormItemLabel>
    </div>
  )
})

Radio.displayName = 'Radio'
export default Radio
