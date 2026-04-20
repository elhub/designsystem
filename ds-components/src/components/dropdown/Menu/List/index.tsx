import cl from 'clsx'
import React, { forwardRef } from 'react'
import ListItem, { ListItemType } from './Item'

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * Menu list content
   */
  children: React.ReactNode
}

export interface ListType extends React.ForwardRefExoticComponent<
  ListProps & React.RefAttributes<HTMLUListElement>
> {
  Item: ListItemType
}

const List = forwardRef(({ className, children, ...rest }, ref) => (
  <ul {...rest} ref={ref} className={cl('eds-dropdown__list', className)}>
    {children}
  </ul>
)) as ListType

List.Item = ListItem

List.displayName = 'Dropdown.Menu.List'
export default List
