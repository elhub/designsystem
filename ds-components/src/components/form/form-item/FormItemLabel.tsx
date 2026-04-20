import React, { forwardRef } from 'react'
import { BodyText, type BodyTextProps } from '../../typography'
import cl from 'clsx'
import { Tooltip } from '../../tooltip'
import { IconInformationCircle } from '@elhub/ds-icons'
import { useFormItemContext } from './useFormItemContext'
import { type FormItemSize } from './FormItem'

export const formItemTextSizeMap: Record<FormItemSize, FormItemSize> = {
  small: 'small',
  medium: 'small',
  large: 'medium'
}

type FormLabelProps = BodyTextProps & {
  htmlFor?: string
  hideLabel?: boolean
  helperText?: string
  weight?: BodyTextProps['weight']
}
const FormItemLabel = forwardRef<HTMLElement, FormLabelProps>(
  ({ className, htmlFor, helperText, hideLabel, children, weight = 'semibold', ...rest }, ref) => {
    const { id, size, inputProps: { required } = {} } = useFormItemContext()

    const resolvedHtmlFor = htmlFor ?? id

    if (!resolvedHtmlFor) {
      console.warn('FormItemLabel requires htmlFor or a parent FormItem with an id.')
    }

    return (
      <BodyText
        ref={ref}
        as='label'
        size={formItemTextSizeMap[size]}
        weight={weight}
        htmlFor={resolvedHtmlFor}
        className={cl('eds-form-label', className, {
          'eds-sr-only': hideLabel
        })}
        {...rest}
      >
        <React.Fragment>
          {children}
          {required && (
            <span aria-hidden='true' className='eds-form-item__label--required'>
              *
            </span>
          )}
        </React.Fragment>
        {helperText && (
          <Tooltip content={helperText}>
            <button type='button' aria-label={helperText} className='eds-form-item__label__helper-icon'>
              <IconInformationCircle size='xsmall' />
            </button>
          </Tooltip>
        )}
      </BodyText>
    )
  }
)

FormItemLabel.displayName = 'FormItemLabel'
export default FormItemLabel
