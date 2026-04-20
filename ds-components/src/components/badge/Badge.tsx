import cl, { type ClassValue } from 'clsx'
import React, { forwardRef } from 'react'
import type { OverridableComponent } from 'util/index'
import { BodyText } from '../typography'
import type { SvgIconProps } from '@elhub/ds-icons'

type StatusProp =
  | 'ongoing'
  | 'failed'
  | 'approved-with-warning'
  | 'approved'
  | 'stopped'
  | 'temporarily-stopped'
type VariantProp = 'default' | 'block' | 'simple-dot'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<SvgIconProps>
  children?: React.ReactNode
  size?: 'medium' | 'small'
  status?: StatusProp
  variant?: VariantProp
}

type BadgeType = OverridableComponent<BadgeProps>

const Badge: BadgeType = forwardRef(
  (
    {
      icon,
      size = 'medium',
      status = 'ongoing',
      variant = 'default',
      children,
      className,
      as: Component = 'div',
      ...rest
    },
    ref
  ) => {
    const Icon = icon

    return (
      <Component
        {...rest}
        ref={ref}
        className={cl(
          'eds-badge',
          `eds-badge--size-${size}`,
          `eds-badge--status-${status}`,
          `eds-badge--variant-${variant}`,
          className as ClassValue
        )}
      >
        <Icon className='eds-badge__icon' />
        {children && (
          <BodyText weight='bold' size={size}>
            {children}
          </BodyText>
        )}
      </Component>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
