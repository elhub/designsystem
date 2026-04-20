import cl from 'clsx'
import { BodyText } from 'components/typography'
import { Loader } from 'components/loader'
import React, { forwardRef, type InputHTMLAttributes } from 'react'
import { omit } from 'util/index'
import { useFormItemContext } from './form-item/useFormItemContext'
import { FormItemLabel, type FormItemProps } from './form-item'

export type SwitchPosition = 'left' | 'right'

export interface SwitchProps extends FormItemProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Toggles loading state with loader-component on switch
   */
  loading?: boolean
  /**
   * Positions switch on left/right side of label
   * @default "left"
   */
  position?: SwitchPosition
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const { id: contextId, size: formItemSize, inputProps, error: { hasError } = {} } = useFormItemContext()

  const {
    id: propId,
    className,
    loading,
    checked: checkedProp,
    defaultChecked,
    children,
    size: propSize,
    position = 'left',
    ...rest
  } = props

  const _disabled = inputProps.disabled || loading
  const _id = propId ?? contextId
  const _size = propSize ?? formItemSize

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div
      className={cl(
        'eds-switch',
        `eds-switch--${_size}`,
        `eds-switch--${position}`,
        {
          'eds-switch--loading': loading,
          'eds-switch--disabled': _disabled,
          'eds-switch--error': hasError
        },
        className
      )}
    >
      <input
        {...omit(rest, ['size'])}
        {...inputProps}
        ref={ref}
        type='checkbox'
        id={_id}
        disabled={_disabled}
        checked={checkedProp}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        className={cl('eds-switch__input')}
      />
      <span className='eds-switch__track'>
        <span className='eds-switch__thumb'>{loading && <Loader size='small' aria-live='polite' />}</span>
      </span>
      <FormItemLabel htmlFor={_id} className='eds-switch__label-wrapper'>
        <div className={cl('eds-switch__content')}>
          <BodyText as='span' size={_size === 'large' ? 'medium' : 'small'} className='eds-switch__label'>
            {children}
          </BodyText>
        </div>
      </FormItemLabel>
    </div>
  )
})

Switch.displayName = 'Switch'
export default Switch
