import cl from 'clsx'
import React, { forwardRef } from 'react'
import { useId } from 'util/index'
import { useFormItemContext } from '../form-item/useFormItemContext'

export type AllowedRadioValue = string | number | boolean | undefined

interface RadioGroupContextProps {
  name: string
  defaultValue?: AllowedRadioValue
  value?: AllowedRadioValue
  onChange: (value: AllowedRadioValue) => void
  required?: boolean
}

export const RadioGroupContext = React.createContext<RadioGroupContextProps | null>(null)

export interface RadioGroupProps {
  /**
   * Collection of <Radio />-elements
   */
  children: React.ReactNode

  /**
   * Default checked Radio
   */
  defaultValue?: AllowedRadioValue

  /**
   * Override internal name
   */
  name?: string

  /**
   * Returns current checked Radio in group
   */
  onChange?: (value: AllowedRadioValue) => void

  /**
   * Tells if group is required
   */
  required?: boolean

  /**
   * Controlled state for Radio
   */
  value?: AllowedRadioValue

  /**
   * Additional classes
   */
  className?: string
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ children, className, name, defaultValue, value, onChange = () => {}, required }, ref) => {
    const formItemContext = useFormItemContext()
    const id = formItemContext?.id ?? useId() // Use FormItemContext id or generate a unique id
    const nameId = useId() // Fallback for name if none provided

    return (
      <RadioGroupContext.Provider
        value={{
          name: name ?? `radioGroupName-${nameId}`,
          defaultValue,
          value,
          onChange,
          required
        }}
      >
        <div
          id={id}
          role='radiogroup'
          ref={ref}
          aria-labelledby={id}
          className={cl(
            'eds-radio-group',
            `eds-radio-group--${formItemContext?.size ?? 'medium'}`,
            className
          )}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
export default RadioGroup
