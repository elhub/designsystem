import * as RadixTabs from '@radix-ui/react-tabs'
import cl from 'clsx'
import React, { forwardRef } from 'react'
import { type OverridableComponent } from 'util/index'
import TabSummary, { type TabSummaryProps } from './TabSummary'

interface AdvancedTabProps
  extends
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'>,
    Pick<TabSummaryProps, 'label' | 'status' | 'statusLabel' | 'heading' | 'subheading' | 'detail'> {
  /**
   * Custom tab content. Rendered after the summary when summary props are also set
   */
  children?: React.ReactNode
  /**
   * Value for state-handling
   */
  value: string
  /**
   * Disables the tab
   */
  disabled?: boolean
}

export type AdvancedTabType = OverridableComponent<AdvancedTabProps>

const AdvancedTab: AdvancedTabType = forwardRef(
  (
    {
      className,
      as: Component = 'button',
      children,
      value,
      disabled,
      label,
      status,
      statusLabel,
      heading,
      subheading,
      detail,
      ...rest
    },
    ref
  ) => {
    const hasSummary = Boolean(label || status || heading || subheading || detail)

    if (!hasSummary && !children) {
      console.error('<AdvancedTabs.Tab/> needs label, status, heading, subheading, detail or children')
    }

    if (status && !statusLabel) {
      console.error('<AdvancedTabs.Tab/> needs statusLabel when status is set')
    }

    return (
      <RadixTabs.Trigger value={value} asChild disabled={disabled}>
        <Component {...rest} ref={ref} className={cl('eds-advanced-tabs__tab', className)}>
          {hasSummary && (
            <TabSummary
              label={label}
              status={status}
              statusLabel={statusLabel}
              heading={heading}
              subheading={subheading}
              detail={detail}
            />
          )}
          {children}
        </Component>
      </RadixTabs.Trigger>
    )
  }
)

AdvancedTab.displayName = 'AdvancedTabs.AdvancedTab'
export default AdvancedTab
