import * as RadixToggleGroup from '@radix-ui/react-toggle-group'
import cl from 'clsx'
import { type FormItemSize } from 'components/form'
import React, { createContext, forwardRef, type HTMLAttributes, useState } from 'react'
import { useId } from 'util/index'
import ToggleItem, { type ToggleItemType } from './ToggleItem'
import { BodyText } from '../typography'

export interface ToggleGroupProps<T> extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange' | 'dir' | 'defaultValue' | 'value'
> {
  /**
   * Toggles.Item elements
   */
  children: React.ReactNode
  /**
   * Changes padding and font-size
   * @default "medium"
   */
  size?: 'large' | 'medium' | 'small'

  /**
   * Label describing ToggleGroup
   */
  label?: React.ReactNode

  /**
   * Controlled selected value
   */
  value: T
  /**
   * If not controlled, a default-value needs to be set
   */
  defaultValue: T
  /**
   * Callback for selected toggle
   */
  onChange: (value?: T) => void
}

interface ToggleGroupSingleProps extends ToggleGroupProps<string> {
  type: 'single'
}

interface ToggleGroupMultipleProps extends ToggleGroupProps<string[]> {
  type: 'multiple'
}

interface ToggleGroupComponent extends React.ForwardRefExoticComponent<
  (ToggleGroupSingleProps | ToggleGroupMultipleProps) & React.RefAttributes<HTMLDivElement>
> {
  Item: ToggleItemType
}

interface ToggleContextProps {
  size: FormItemSize
  labelSize: FormItemSize
}

export const ToggleGroupContext = createContext<ToggleContextProps | null>(null)

const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupSingleProps | ToggleGroupMultipleProps>(
  (
    {
      className,
      children,
      onChange,
      type,
      size = 'medium',
      label,
      value,
      defaultValue,
      'aria-describedby': desc,
      ...rest
    },
    ref
  ) => {
    const [groupValue, setGroupValue] = useState(defaultValue)
    const labelId = `toggle-group-label-${useId()}`

    const handleValueChange = (
      v: ToggleGroupSingleProps['value'] | ToggleGroupMultipleProps['value']
    ): void => {
      if (type === 'single' && typeof v === 'string') {
        setGroupValue(v)
        onChange?.(v)
      } else if (type === 'multiple' && Array.isArray(v)) {
        setGroupValue(v)
        onChange?.(v)
      }
    }

    const describeBy = cl({
      [desc ?? '']: !!desc,
      [labelId]: !!label
    })

    if (!value && !defaultValue) {
      console.error('ToggleGroup needs either a value or defaultValue')
    }

    const labelSize = size === 'large' ? 'medium' : size
    return (
      <ToggleGroupContext.Provider
        value={{
          size,
          labelSize
        }}
      >
        <div className='eds-form-field'>
          {label && (
            <BodyText size={size} as='label' className='eds-toggle-group__label' id={labelId}>
              {label}
            </BodyText>
          )}
          {type === 'multiple' ? (
            <RadixToggleGroup.Root
              {...rest}
              ref={ref}
              className={cl('eds-toggle-group', `eds-toggle-group--${size}`, className)}
              onValueChange={handleValueChange}
              value={value ?? groupValue}
              defaultValue={defaultValue}
              {...(describeBy && { 'aria-describedby': describeBy })}
              role='radiogroup'
              type='multiple'
            >
              {children}
            </RadixToggleGroup.Root>
          ) : (
            <RadixToggleGroup.Root
              {...rest}
              ref={ref}
              className={cl('eds-toggle-group', `eds-toggle-group--${size}`, className)}
              onValueChange={handleValueChange}
              value={value ?? groupValue}
              defaultValue={defaultValue}
              {...(describeBy && { 'aria-describedby': describeBy })}
              role='radiogroup'
              type='single'
            >
              {children}
            </RadixToggleGroup.Root>
          )}
        </div>
      </ToggleGroupContext.Provider>
    )
  }
) as ToggleGroupComponent

ToggleGroup.Item = ToggleItem
ToggleGroup.displayName = 'ToggleGroup'
export default ToggleGroup
