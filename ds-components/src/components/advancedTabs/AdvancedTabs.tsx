import * as RadixTabs from '@radix-ui/react-tabs'
import cl from 'clsx'
import React, { forwardRef, HTMLAttributes } from 'react'
import TabList, { TabListType } from './TabList'
import TabPanel, { TabPanelType } from './TabPanel'
import AdvancedTab, { AdvancedTabType } from './AdvancedTab'

export interface AdvancedTabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'dir'> {
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
  AdvancedTabsProps & React.RefAttributes<HTMLDivElement>
> {
  Tab: AdvancedTabType
  List: TabListType
  Panel: TabPanelType
}

const AdvancedTabs = forwardRef<HTMLDivElement, AdvancedTabsProps>(
  ({ className, children, onChange, selectionFollowsFocus = false, ...rest }, ref) => {
    return (
      <RadixTabs.Root
        {...rest}
        ref={ref}
        className={cl('eds-advanced-tabs', className)}
        activationMode={selectionFollowsFocus ? 'automatic' : 'manual'}
        onValueChange={onChange}
      >
        {children}
      </RadixTabs.Root>
    )
  }
) as TabsComponent

AdvancedTabs.Tab = AdvancedTab
AdvancedTabs.List = TabList
AdvancedTabs.Panel = TabPanel

AdvancedTabs.displayName = 'AdvancedTabs'
export default AdvancedTabs
