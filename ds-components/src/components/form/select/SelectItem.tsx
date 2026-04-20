import React, { type ForwardedRef } from 'react'
import cl from 'clsx'
import { BodyText } from '../../typography'
import {
  Item as SelectItemPrimitive,
  ItemIndicator as ItemIndicatorPrimitive,
  ItemText as SelectItemTextPrimitive
} from '@radix-ui/react-select'
import type { OverridableComponent } from '../../../util'
import { useSelectContext } from './useSelectContext'
import { IconValidationCheck } from '@elhub/ds-icons'

export const SelectItem: OverridableComponent<React.ComponentPropsWithoutRef<typeof SelectItemPrimitive>> =
  React.forwardRef(
    (
      { as: Component = BodyText, className, children, value, ...props },
      ref: ForwardedRef<HTMLDivElement>
    ) => {
      const { size } = useSelectContext()

      return (
        <SelectItemPrimitive
          ref={ref}
          value={value}
          className={cl('eds-select__item', `eds-select__item--${size}`, className)}
          {...props}
        >
          <SelectItemTextPrimitive asChild>
            <Component size={size === 'large' ? 'medium' : size} className={cl('eds-select__item__text')}>
              {children}
            </Component>
          </SelectItemTextPrimitive>
          <span className='eds-select__item-indicator'>
            <ItemIndicatorPrimitive>
              <IconValidationCheck size='small' />
            </ItemIndicatorPrimitive>
          </span>
        </SelectItemPrimitive>
      )
    }
  )

SelectItem.displayName = SelectItemPrimitive.displayName
