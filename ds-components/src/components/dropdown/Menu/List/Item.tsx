import cl, { type ClassValue } from 'clsx'
import React, { forwardRef } from 'react'
import { type OverridableComponent } from 'util/OverridableComponent'
import { useDropdownContext } from 'components/dropdown'

interface ListItemProps extends React.ButtonHTMLAttributes<HTMLElement> {
  /**
   * Menu item content
   */
  children: React.ReactNode
}

export type ListItemType = OverridableComponent<ListItemProps>

const ListItem: ListItemType = forwardRef(({ as: Component = 'button', className, ...rest }, ref) => {
  const context = useDropdownContext()
  return (
    <li className='eds-dropdown__list-item'>
      <Component
        {...rest}
        ref={ref}
        value={rest.children}
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
          context?.onSelect?.(event)
          rest?.onClick?.(event)
        }}
        className={cl(
          'eds-dropdown__item',
          'eds-body-short',
          'eds-body-short--small',
          className as ClassValue
        )}
      />
    </li>
  )
})
ListItem.displayName = 'Dropdown.Menu.List.Item'
export default ListItem
