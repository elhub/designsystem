import cl, { type ClassValue } from 'clsx'
import React, { forwardRef } from 'react'
import { type OverridableComponent } from 'util/OverridableComponent'
import { useDropdownContext } from 'components/dropdown'

interface GroupedItemProps extends React.ButtonHTMLAttributes<HTMLElement> {
  /**
   * Menu item content
   */
  children: React.ReactNode
}

export type GroupedItemType = OverridableComponent<GroupedItemProps>

const GroupedItem: GroupedItemType = forwardRef(({ as: Component = 'button', className, ...rest }, ref) => {
  const context = useDropdownContext()
  return (
    <dd className='eds-dropdown__list-item'>
      <Component
        {...rest}
        ref={ref}
        value={rest.children}
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
          context?.onSelect?.(event)
          rest?.onClick?.(event)
        }}
        className={cl('eds-dropdown__item', 'eds-body-short', className as ClassValue)}
      />
    </dd>
  )
})
GroupedItem.displayName = 'Dropdown.Menu.DescriptionList.GroupedItem'
export default GroupedItem
