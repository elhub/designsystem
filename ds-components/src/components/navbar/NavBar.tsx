import cl from 'clsx'
import React, { createContext, forwardRef, HTMLAttributes, useState } from 'react'
import Link, { LinkProps, LinkType } from './Link'

export type NavBarSize = 'medium' | 'small'

export interface NavBarProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /**
   * Nav bar content
   */
  children: React.ReactNode

  /**
   * navigation default active value
   */
  defaultValue?: number

  /**
   * Callback for change in nav bar active
   */
  onChange?: (value: number) => void

  /**
   * Nav bar size
   */
  size?: NavBarSize

  /**
   * navigation current active value
   */
  value?: number
}

interface NavBarComponent extends React.ForwardRefExoticComponent<
  NavBarProps & React.RefAttributes<HTMLElement>
> {
  Link: LinkType
}

interface NavBarContextProps {
  value?: number
  onValueChange: (value: number) => void
  size?: 'small' | 'medium'
}

export const NavBarContext = createContext<NavBarContextProps | null>(null)

const NavBar: NavBarComponent = forwardRef<HTMLElement, NavBarProps>(
  ({ size = 'medium', className, children, value, defaultValue, style, onChange, ...rest }, ref) => {
    const [navValue, setNavValue] = useState(defaultValue)

    const handleValueChange = (v: number) => {
      setNavValue(v)
      onChange?.(v)
    }

    let unsafeIndex: number = 0

    return (
      <nav {...rest} ref={ref} className={cl('eds-navbar', `eds-navbar--${size}`, className)} style={style}>
        <NavBarContext.Provider
          value={{
            value: value ?? navValue,
            onValueChange: handleValueChange,
            size
          }}
        >
          {React.Children.map(children, (link) => {
            return React.isValidElement<LinkProps>(link) &&
              // @ts-expect-error - We are checking if the element is a NavBar.Link
              link?.type?.displayName === 'NavBar.Link'
              ? React.cloneElement(link, {
                  ...link.props,
                  unsafeIndex: unsafeIndex++
                })
              : link
          })}
        </NavBarContext.Provider>
      </nav>
    )
  }
) as NavBarComponent

NavBar.Link = Link
NavBar.displayName = 'NavBar'

export default NavBar
