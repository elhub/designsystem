import React, { forwardRef } from 'react'
import cl from 'clsx'
import { Popover } from 'components/popover'
import List, { type ListType } from './List'
import GroupedList, { type GroupedListType } from './GroupedList'
import Divider, { type DividerType } from './Divider'
import { useDropdownContext } from 'components/dropdown'

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Dropdown content
   */
  children: React.ReactNode
  /**
   * onClose callback
   */
  onClose?: () => void
  /**
   * Popover positioning strategy
   * @default "absolute"
   */
  strategy?: 'fixed' | 'absolute'
  /*
   * Default dialog-placement on open
   * @default "bottom-end"
   */
  placement?:
    | 'top'
    | 'bottom'
    | 'right'
    | 'left'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end'

  /**
   * Adds a arrow from dialog to anchor when true
   */
  arrow?: boolean
}

export interface MenuType<Props = MenuProps> extends React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLDivElement>
> {
  List: ListType
  GroupedList: GroupedListType
  Divider: DividerType
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ className, onClose, placement = 'bottom-end', arrow = false, ...rest }, ref) => {
    const context = useDropdownContext({ errorContext: 'Dropdown.Menu has to be wrapped in <Dropdown />' })

    const { isOpen, anchorEl, setIsOpen } = context

    return (
      <Popover
        {...rest}
        ref={ref}
        placement={placement}
        arrow={arrow}
        variant='secondary'
        className={cl(className, 'eds-dropdown__menu')}
        offset={arrow ? 12 : -4}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
          if (onClose) {
            onClose()
          }
        }}
      />
    )
  }
) as MenuType

Menu.List = List
Menu.GroupedList = GroupedList
Menu.Divider = Divider

Menu.displayName = 'Dropdown.Menu'
export default Menu
