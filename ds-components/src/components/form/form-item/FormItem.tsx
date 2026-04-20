import React, { createContext, type ReactNode, useId } from 'react'
import cl from 'clsx'
import { ErrorMessage } from '../../typography'

export type FormItemSize = 'small' | 'medium' | 'large'

interface FormError {
  id: string
  hasError: boolean
  message?: ReactNode
}

export interface FormItemContextType {
  size: FormItemSize
  id: string
  hideLabel: boolean
  error?: FormError
  descriptionId?: string
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
}

export const FormItemContext = createContext<FormItemContextType | null>(null)

export interface FormItemProps {
  /**
   * Override internal id
   */
  id?: string
  /**
   * The size of the FormItem and its corresponding elements
   */
  size?: FormItemSize
  /**
   * Visually hide the label
   */
  hideLabel?: boolean
  /**
   * Error message for element
   */
  error?: React.ReactNode
  /**
   * Override internal errorId
   */
  errorId?: string
  /**
   * Adds a description to extend labling of a field
   */
  description?: React.ReactNode
  /**
   * Input-props to be passed to the input directly
   * pass disabled, required, etc to enforce it for the input element
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  /**
   * Override the styling of the parent element
   */
  className?: string
  children?: ReactNode
}

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  (
    {
      id: customId,
      className,
      error,
      hideLabel = false,
      size = 'medium',
      inputProps,
      children
    }: FormItemProps,
    ref
  ) => {
    const id = customId ?? useId()
    const errorId = `${id}-error`
    const descriptionId = `${id}-description`

    const hasError = Boolean(error)

    return (
      <FormItemContext.Provider
        value={{
          id,
          error: {
            id: errorId,
            hasError,
            message: error
          },
          size,
          hideLabel,
          inputProps: {
            ...inputProps,
            'aria-invalid': hasError || undefined,
            'aria-describedby':
              [descriptionId, hasError ? errorId : null].filter(Boolean).join(' ') || undefined
          },
          descriptionId
        }}
      >
        <div ref={ref} className={cl('eds-form-item', className)}>
          {children}
          {hasError && (
            <div id={errorId} aria-relevant='additions removals' aria-live='polite'>
              <ErrorMessage size='small'>{error}</ErrorMessage>
            </div>
          )}
        </div>
      </FormItemContext.Provider>
    )
  }
)

FormItem.displayName = 'FormItem'

export default FormItem
