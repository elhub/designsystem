import cl, { type ClassValue } from 'clsx'
import React, { forwardRef } from 'react'
import { IconNewtab } from '@elhub/ds-icons'
import { type OverridableComponent } from 'util/index'

type LinkVariant = 'default' | 'alternative'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Link variant
   * @default "default"
   */
  variant?: LinkVariant

  /**
   * Link content
   */
  children: React.ReactNode

  /**
   * Prevents the user from interacting with the link: It cannot be pressed or focused.
   * @note Avoid using if possible for accessibility purposes
   */
  disabled?: boolean

  /**
   * Is the link external
   */
  external?: boolean
}

const Link: OverridableComponent<LinkProps> = forwardRef(
  (
    { as: Component = 'a', variant = 'default', external = false, children, disabled, className, ...rest },
    ref
  ) => (
    <Component
      {...rest}
      href={disabled ? undefined : rest.href}
      role='link'
      aria-disabled={disabled}
      ref={ref}
      className={cl(
        'eds-link',
        {
          'eds-link--disabled': disabled,
          'eds-link--alternative': variant === 'alternative'
        },
        className as ClassValue
      )}
      target={external ? '_blank' : '_self'}
    >
      {children}
      {external && <IconNewtab size='xsmall' aria-hidden />}
    </Component>
  )
)

Link.displayName = 'Link'
export default Link
