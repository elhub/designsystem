import cl from 'clsx'
import React, { forwardRef, useContext } from 'react'
import { NavBarContext } from './NavBar'
import { BodyText } from 'components/typography'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Link content
   */
  children: React.ReactNode | string

  /**
   * Link index within the Nav bar
   */
  unsafeIndex?: number
}

export type LinkType = React.ForwardRefExoticComponent<
  LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
>

const Link: LinkType = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, children, unsafeIndex = 0, ...rest }, ref) => {
    const context = useContext(NavBarContext)
    if (context === null) {
      console.error('<NavBar.Link> has to be used within <NavBar>')
      return null
    }
    const { value, size, onValueChange } = context

    return (
      <a
        {...rest}
        ref={ref}
        className={cl(
          'eds-navbar-link',
          `eds-navbar-link-${size}`,
          {
            'eds-navbar-link--selected': value === unsafeIndex
          },
          className
        )}
        aria-current={value === unsafeIndex}
        onClick={(e) => {
          onValueChange(unsafeIndex)
          rest?.onClick?.(e)
        }}
      >
        <span className='eds-navbar-link__content'>
          <BodyText className='eds-navbar-link__content-text' size={size}>
            {children}
          </BodyText>
        </span>
      </a>
    )
  }
)
Link.displayName = 'NavBar.Link'
export default Link
