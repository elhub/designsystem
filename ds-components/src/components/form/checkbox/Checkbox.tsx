import cl from 'clsx'
import React, { forwardRef, useId, type InputHTMLAttributes } from 'react'
import { omit } from 'util/index'
import useCheckbox from './useCheckbox'
import { FormItemLabel, type FormItemProps } from '../form-item'
import { type AllowedCheckboxValue } from './CheckboxGroup'

export type CheckboxProps = FormItemProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue'> & {
    /**
     * Checkbox label
     */
    children?: React.ReactNode

    /**
     * Specify whether the Checkbox is in an indeterminate state
     * @default false
     */
    indeterminate?: boolean

    /**
     * Value of the checkbox
     */
    value?: AllowedCheckboxValue

    /**
     * Default value of the checkbox
     */
    defaultValue?: AllowedCheckboxValue
  }

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { inputProps, error, hideLabel, size } = useCheckbox(props)

  const _id = props.id ?? useId()
  const _disabled = props.disabled || inputProps.disabled
  const _error = props.error || !!error?.hasError
  const _hideLabel = props.hideLabel ?? hideLabel

  return (
    <div
      className={cl(props.className, 'eds-checkbox', `eds-checkbox--${size}`, {
        'eds-checkbox--error': _error,
        'eds-checkbox--disabled': _disabled
      })}
      style={props.style ?? {}}
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
        ref={(el) => {
          if (el) {
            el.indeterminate = props.indeterminate ?? false
          }
          if (typeof ref === 'function') {
            ref(el)
          } else if (ref != null) {
            ref.current = el
          }
        }}
        type='checkbox'
        className='eds-checkbox__input'
        aria-checked={props.indeterminate ? 'mixed' : inputProps.checked}
      />
      <FormItemLabel htmlFor={_id} size={size} weight='regular' className='eds-checkbox__label'>
        <div className={cl('eds-checkbox__content', { 'eds-sr-only': _hideLabel })}>{props.children}</div>
      </FormItemLabel>
    </div>
  )
})

Checkbox.displayName = 'Checkbox'
export default Checkbox
