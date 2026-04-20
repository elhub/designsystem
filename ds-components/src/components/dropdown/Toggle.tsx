import React, { forwardRef } from 'react'
import cl from 'clsx'
import { useDropdownContext } from './Dropdown'

interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button content
   */
  children: React.ReactNode
}

export type ToggleType = React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>

const Toggle: ToggleType = forwardRef(({ className, onClick, ...rest }, ref) => {
  const context = useDropdownContext({ errorContext: 'Dropdown.Toggle has to be wrapped in <Dropdown />' })

  const { setAnchorEl, setIsOpen, isOpen } = context

  return (
    <button
      {...rest}
      ref={ref}
      onClick={(e) => {
        setAnchorEl(e.currentTarget)
        setIsOpen((prevOpen) => !prevOpen)
        if (onClick) {
          onClick(e)
        }
      }}
      aria-expanded={isOpen}
      className={cl(className, 'eds-dropdown__toggle')}
    />
  )
})

Toggle.displayName = 'Dropdown.Toggle'
export default Toggle
