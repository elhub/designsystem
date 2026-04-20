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

  noPadding?: boolean
}

export type TabPanelType = React.ForwardRefExoticComponent<
  TabPanelProps & React.RefAttributes<HTMLDivElement>
>

const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ className, noPadding = false, ...rest }, ref) => (
    <TabsContent
      {...rest}
      ref={ref}
      className={cl('eds-tabs__tabpanel', { 'eds-tabs__tabpanel-nopadding': noPadding }, className)}
    />
  )
) as TabPanelType

TabPanel.displayName = 'Tab.Panel'
export default TabPanel
