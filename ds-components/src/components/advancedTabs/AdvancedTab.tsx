import * as RadixTabs from '@radix-ui/react-tabs'
import cl from 'clsx'
import React, { forwardRef } from 'react'
import { type OverridableComponent } from 'util/index'

interface AdvancedTabProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * Tab as a React component
   */
  children: React.ReactNode
  /**
   * Value for state-handling
   */
  value: string
}

export type AdvancedTabType = OverridableComponent<AdvancedTabProps>

const AdvancedTab: AdvancedTabType = forwardRef(
  ({ className, as: Component = 'button', children, value, disabled, ...rest }, ref) => {
    return (
      <RadixTabs.Trigger value={value} asChild disabled={disabled}>
        <Component
          {...rest}
          ref={ref}
          className={cl('eds-advanced-tabs__tab', className)}
          disabled={disabled}
        >
          {children}
        </Component>
      </RadixTabs.Trigger>
    )
  }
)

AdvancedTab.displayName = 'Tabs.Tab'
export default AdvancedTab
