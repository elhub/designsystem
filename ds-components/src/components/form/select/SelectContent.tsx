import React, { type ForwardedRef } from 'react'
import cl from 'clsx'
import {
  Content as SelectContentPrimitive,
  Viewport as SelectViewPortPrimitive
} from '@radix-ui/react-select'
import type { OverridableComponent } from '../../../util'

export const SelectContent: OverridableComponent<
  React.ComponentPropsWithoutRef<typeof SelectContentPrimitive>
> = React.forwardRef(
  (
    { as: Component = 'div', className, children, position = 'popper', ...props },
    ref: ForwardedRef<HTMLDivElement>
  ) => (
    <SelectContentPrimitive
      ref={ref}
      position={position}
      className={cl('eds-select__content', className)}
      {...props}
    >
      <SelectViewPortPrimitive className='eds-select__content-inner'>
        <Component>{children}</Component>
      </SelectViewPortPrimitive>
    </SelectContentPrimitive>
  )
)

SelectContent.displayName = SelectContentPrimitive.displayName
