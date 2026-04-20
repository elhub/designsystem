import React, { forwardRef, HTMLAttributes } from 'react'
import cl from 'clsx'
import { omit } from 'util/index'
import { type FormItemProps } from './form-item'
import { useFormItemContext } from './form-item/useFormItemContext'

export interface TextareaProps extends FormItemProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Allowed character-count for content
   * @note This is just a visual validator, you need to set actual character-limits if needed
   */
  maxLength?: number
  /**
   * Controlled value
   */
  value?: string
  /**
   * Defaults input-value without needing controlled-state
   */
  defaultValue?: string
  /**
   * Maximum number of character rows to display.
   * @bug Internal scrolling with `maxLength` scrolls over maxLength-text
   */
  maxRows?: number
  /**
   * Minimum number of character-rows to display when empty.
   */
  minRows?: number
  /**
   * Enables resizing of field
   */
  resize?: boolean
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { id: contextId, error: { hasError: formItemError } = {}, inputProps } = useFormItemContext()

  const { id, className, resize, error, disabled, ...rest } = props

  const _id = id ?? contextId
  const _disabled = disabled || inputProps.disabled
  const _hasError = Boolean(error) || !!formItemError

  return (
    <div
      className={cl(
        {
          'eds-textarea--error': _hasError,
          'eds-textarea--resize': resize
        },
        className
      )}
    >
      <div className='eds-textarea__wrapper'>
        <textarea
          {...omit(rest, ['error', 'errorId'])}
          {...(inputProps as HTMLAttributes<HTMLTextAreaElement>)}
          {...rest}
          id={_id}
          disabled={_disabled}
          ref={ref}
          className={cl('eds-textarea__input', 'eds-body-short')}
          aria-describedby={inputProps['aria-describedby']}
        />
      </div>
    </div>
  )
})

Textarea.displayName = 'Textarea'
export default Textarea
