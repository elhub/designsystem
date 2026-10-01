import { TabsContent } from '@radix-ui/react-tabs'
import cl from 'clsx'
import React, { forwardRef } from 'react'

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Tab panel content
   */
  children: React.ReactNode
  /**
   * Value for state-handling
   */
  value: string
}

export type TabPanelType = React.ForwardRefExoticComponent<
  TabPanelProps & React.RefAttributes<HTMLDivElement>
>

const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(({ className, children, ...rest }, ref) => (
  // Wrapped in a div to center content without impacting the border
  <TabsContent {...rest} ref={ref} className={cl('eds-advanced-tabs__panel', className)}>
    <div className={cl('eds-advanced-tabs__panel-content', className)}>{children}</div>
  </TabsContent>
)) as TabPanelType

TabPanel.displayName = 'Tab.Panel'
export default TabPanel
