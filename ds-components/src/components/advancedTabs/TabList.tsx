import { TabsList } from '@radix-ui/react-tabs'
import cl from 'clsx'
import React, { forwardRef } from 'react'

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * <Tabs.Tab /> elements
   */
  children: React.ReactNode
  /**
   * Loops back to start when navigating past last item
   */
  loop?: boolean
}

export type TabListType = React.ForwardRefExoticComponent<TabListProps & React.RefAttributes<HTMLDivElement>>

const TabList = forwardRef<HTMLDivElement, TabListProps>(({ className, ...rest }, ref) => {
  return <TabsList {...rest} ref={ref} className={cl('eds-advanced-tabs__tablist', className)} />
}) as TabListType

TabList.displayName = 'AdvancedTabs.TabList'
export default TabList
