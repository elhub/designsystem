import cl from 'clsx'
import React, { createContext, forwardRef, useId, useState } from 'react'
import { useFormItemContext } from '../form-item/useFormItemContext'

export type AllowedCheckboxValue = string | number | boolean | undefined

interface CheckboxGroupState {
  readonly defaultValue?: readonly AllowedCheckboxValue[]
  readonly value?: readonly AllowedCheckboxValue[]
  toggleValue: (value: AllowedCheckboxValue) => void
}

export const CheckboxGroupContext = createContext<CheckboxGroupState | null>(null)

export interface CheckboxGroupProps {
  /**
   * Collection of <Checkbox/>
   */
  children: React.ReactNode

  /**
   * Default checked checkboxes on render
   */
  defaultValue?: AllowedCheckboxValue[]

  /**
   * Returns current checked checkboxes in group
   */
  onChange?: (value: AllowedCheckboxValue[]) => void

  /**
   * Controlled state for checkboxes
   */
  value?: AllowedCheckboxValue[]

  /**
   * Additional classes
   */
  className?: string
}

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ value, defaultValue, onChange = () => {}, children, className }, ref) => {
    const formItemContext = useFormItemContext()
    const id = formItemContext?.id ?? useId()

    const [state, setState] = useState<AllowedCheckboxValue[]>(defaultValue ?? [])

    const toggleValue = (v: AllowedCheckboxValue): void => {
      const newValue = value ?? state
      const newState = newValue.includes(v) ? newValue.filter((x) => x !== v) : [...newValue, v]

      if (value === undefined) {
        setState(newState)
      }
      onChange(newState)
    }

    return (
      <CheckboxGroupContext.Provider
        value={{
          value,
          defaultValue,
          toggleValue
        }}
      >
        <div
          id={id}
          role='group'
          ref={ref}
          aria-labelledby={formItemContext?.id}
          className={cl(
            'eds-checkbox-group',
            `eds-checkbox-group--${formItemContext?.size ?? 'medium'}`,
            className
          )}
        >
          {children}
        </div>
      </CheckboxGroupContext.Provider>
    )
  }
)

CheckboxGroup.displayName = 'CheckboxGroup'
export default CheckboxGroup
