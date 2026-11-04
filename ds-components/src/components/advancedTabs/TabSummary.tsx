import cl from 'clsx'
import React, { forwardRef } from 'react'
import { Tag } from '../tag'

export type TabStatus = 'success' | 'warning' | 'error'

export interface TabSummaryProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Small text above the heading, e.g. the category name
   */
  label?: string
  /**
   * Status shown as a colour-coded tag next to the label. The tag is hidden when not set
   */
  status?: TabStatus
  /**
   * Text shown in the status tag. Required when status is set
   */
  statusLabel?: string
  /**
   * Main value of the tab, highlighted when the tab is hovered, pressed or active
   */
  heading?: string
  /**
   * Text directly below the heading
   */
  subheading?: string
  /**
   * Small text at the bottom, e.g. a count or date
   */
  detail?: string
}

type TabSummaryType = React.ForwardRefExoticComponent<TabSummaryProps & React.RefAttributes<HTMLSpanElement>>

/**
 * Predefined tab content following the design: label, status, heading, sub-heading and detail.
 * Only <span> elements are used, since a tab is a <button> and may only contain inline content.
 */
const TabSummary = forwardRef<HTMLSpanElement, TabSummaryProps>(
  ({ className, label, status, statusLabel, heading, subheading, detail, ...rest }, ref) => (
    <span {...rest} ref={ref} className={cl('eds-advanced-tabs__summary', className)}>
      {(label || status) && (
        <span className='eds-advanced-tabs__summary-top'>
          {label && <span className='eds-advanced-tabs__summary-label'>{label}</span>}
          {status && (
            <Tag variant={status} size='small' className='eds-advanced-tabs__summary-status'>
              {statusLabel}
            </Tag>
          )}
        </span>
      )}
      {(heading || subheading) && (
        <span className='eds-advanced-tabs__summary-main'>
          {heading && <span className='eds-advanced-tabs__summary-heading'>{heading}</span>}
          {subheading && <span className='eds-advanced-tabs__summary-subheading'>{subheading}</span>}
        </span>
      )}
      {detail && <span className='eds-advanced-tabs__summary-detail'>{detail}</span>}
    </span>
  )
) as TabSummaryType

TabSummary.displayName = 'AdvancedTabs.TabSummary'
export default TabSummary
