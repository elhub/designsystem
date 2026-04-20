import React, { HTMLElementType } from 'react'

export type OverridableComponent<ComponentProps> = React.FC<
  ComponentProps & {
    as?: React.ElementType | HTMLElementType
  } & Omit<React.ComponentPropsWithRef<React.ElementType | HTMLElementType>, keyof ComponentProps>
>
