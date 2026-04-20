import * as RadixTabs from '@radix-ui/react-tabs'
import cl from 'clsx'
import React, { forwardRef, HTMLAttributes } from 'react'
import Tab, { TabType } from './Tab'
import TabList, { TabListType } from './TabList'
import TabPanel, { TabPanelType } from './TabPanel'

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'dir'> {
  children: React.ReactNode
  /**
   * onChange callback for selected Tab
   */
  onChange?: (value: string) => void
  /**
   * Controlled selected value
   */
  value?: string
  /**
   * If not controlled, a default-value needs to be set
   */
  defaultValue?: string
  /**
   * Automatically activates tab on focus/navigation
   * @default false
   */
  selectionFollowsFocus?: boolean
}

interface TabsComponent extends React.ForwardRefExoticComponent<
  TabsProps & React.RefAttributes<HTMLDivElement>
> {
  Tab: TabType
  List: TabListType
  Panel: TabPanelType
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, children, onChange, selectionFollowsFocus = false, ...rest }, ref) => {
    return (
      <RadixTabs.Root
        {...rest}
        ref={ref}
        className={cl('eds-tabs', className)}
        activationMode={selectionFollowsFocus ? 'automatic' : 'manual'}
        onValueChange={onChange}
      >
        {children}
      </RadixTabs.Root>
    )
  }
) as TabsComponent

Tabs.Tab = Tab
Tabs.List = TabList
Tabs.Panel = TabPanel

Tabs.displayName = 'Tabs'
export default Tabs
