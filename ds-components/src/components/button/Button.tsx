import cl, { type ClassValue } from 'clsx'
import { Loader } from 'components/loader'
import { BodyText } from 'components/typography'
import React, { forwardRef, useMemo, useRef } from 'react'
import { mergeRefs, type OverridableComponent } from 'util/index'
import { type SvgIconProps } from '@elhub/ds-icons'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'caution' | 'invisible'

export type ButtonSize = 'large' | 'medium' | 'small'

export type ButtonIconPosition = 'left' | 'right'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button content
   */
  children?: React.ReactNode

  /**
   * Prevent the user from interacting with the button: it cannot be pressed or focused.
   * @note Avoid using if possible for accessibility purposes
   */
  disabled?: boolean

  /**
   * Button Icon
   */
  icon?: React.ComponentType<SvgIconProps>

  /**
   * Button Icon Props
   */
  iconProps?: SvgIconProps

  /**
   * Icon position in Button
   * @default "left"
   */
  iconPosition?: ButtonIconPosition

  /**
   * Replaces button content with a Loader component, keeps width
   * @default false
   */
  loading?: boolean

  /**
   * Changes padding, height and font-size
   * @default medium
   */
  size?: ButtonSize

  /**
   * Changes design and interaction-visuals
   * @default "primary"
   */
  variant?: ButtonVariant
}

const Button: OverridableComponent<ButtonProps> = forwardRef(
  (
    {
      as: Component = 'button',
      className,
      children,
      disabled,
      icon: Icon,
      iconProps,
      iconPosition = 'left',
      loading = false,
      size = 'medium',
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    const mergedRef = useMemo(() => mergeRefs([buttonRef, ref]), [ref])

    const { className: iconClassName, ...iconPropsRest } = iconProps || {}

    return (
      <Component
        {...rest}
        ref={mergedRef}
        className={cl(
          'eds-button',
          `eds-button--${variant}`,
          `eds-button--${size}`,
          {
            'eds-button--disabled': disabled || loading,
            'eds-button--loading': loading,
            'eds-button--icon-only': !!Icon && !children
          },
          className as ClassValue
        )}
        disabled={disabled || loading}
      >
        {loading && (
          <Loader
            size='small'
            variant={variant === 'primary' || variant === 'caution' ? 'secondary' : 'primary'}
          />
        )}
        <>
          {Icon && iconPosition === 'left' && (
            <Icon
              {...iconPropsRest}
              size={size === 'small' ? 'xsmall' : 'small'}
              className={cl('eds-button__icon', iconClassName as ClassValue)}
            />
          )}
          {children && (
            <BodyText
              className='eds-button__label'
              as='span'
              weight='bold'
              size={size === 'small' ? 'small' : 'medium'}
              aria-live='polite'
            >
              {children}
            </BodyText>
          )}
          {Icon && iconPosition === 'right' && (
            <Icon
              {...iconPropsRest}
              size={size === 'small' ? 'xsmall' : 'small'}
              className={cl('eds-button__icon', iconClassName as ClassValue)}
            />
          )}
        </>
      </Component>
    )
  }
)

Button.displayName = 'Button'
export default Button
