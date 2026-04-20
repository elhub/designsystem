import React, { type Context, createContext, useContext, useState } from 'react'
import Toggle, { type ToggleType } from './Toggle'
import Menu, { type MenuType } from './Menu'

export interface DropdownProps {
  children: React.ReactNode

  /**
   * Whether the Menu closes when a selection is made.
   * @default true
   */
  closeOnSelect?: boolean

  /**
   * Handler that is called when an item is selected.
   */
  onSelect?: (element: React.MouseEvent) => void
}

export interface DropdownType extends React.FC<DropdownProps> {
  Toggle: ToggleType
  Menu: MenuType
}

interface DropdownContextType {
  readonly isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  readonly anchorEl: Element | null
  setAnchorEl: React.Dispatch<React.SetStateAction<Element | null>>
  onSelect: (element: React.MouseEvent) => void
}

const DropdownContext: Context<DropdownContextType | null> = createContext<DropdownContextType | null>(null)

const Dropdown = (({ children, onSelect, closeOnSelect = true }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        anchorEl,
        setAnchorEl,
        onSelect: (event) => {
          onSelect?.(event)
          if (closeOnSelect) {
            setIsOpen(false)
          }
        }
      }}
    >
      {children}
    </DropdownContext.Provider>
  )
}) as DropdownType

// Custom hook for using the DropdownContext
export const useDropdownContext = ({ errorContext }: { errorContext?: string } = {}): DropdownContextType => {
  const context = useContext(DropdownContext)

  if (!context) {
    throw new Error(errorContext ?? 'useDropdownContext must be used within a DropdownProvider')
  }

  return context
}

Dropdown.Toggle = Toggle
Dropdown.Menu = Menu
Dropdown.displayName = 'Dropdown'
export default Dropdown
