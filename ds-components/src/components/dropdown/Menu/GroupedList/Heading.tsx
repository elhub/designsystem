import React, { forwardRef } from 'react'
import cl from 'clsx'

interface GroupedHeadingProps extends React.HTMLAttributes<HTMLDetailsElement> {
  /**
   * Heading
   */
  children: React.ReactNode
}

export type GroupedHeadingType = React.ForwardRefExoticComponent<
  GroupedHeadingProps & React.RefAttributes<HTMLElement>
>

const GroupedHeading: GroupedHeadingType = forwardRef(({ className, ...rest }, ref) => (
  <dt
    {...rest}
    ref={ref}
    className={cl('eds-dropdown__list-heading', 'eds-heading', 'eds-heading--xsmall', className)}
  />
))

GroupedHeading.displayName = 'Dropdown.Menu.DescriptionList.GroupedHeading'

export default GroupedHeading
