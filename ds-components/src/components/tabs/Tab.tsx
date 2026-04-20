import * as RadixTabs from '@radix-ui/react-tabs'
import cl, { type ClassValue } from 'clsx'
import React, { forwardRef } from 'react'
import { type OverridableComponent } from 'util/index'
import { BodyText } from '../typography'

interface TabProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * Tab label
   */
  label?: React.ReactNode
  /**
   * Tab Icon
   */
  icon?: React.ReactNode
  /**
   * Value for state-handling
   */
  value: string
  /**
   * Icon position
   * @default "left"
   */
  iconPosition?: 'left' | 'top'
}

export type TabType = OverridableComponent<TabProps>

const Tab: TabType = forwardRef(
  ({ className, as: Component = 'button', label, icon, iconPosition, value, disabled, ...rest }, ref) => {
    if (!label && !icon) {
      console.error('<Tabs.Tab/> needs label/icon')
      return null
    }

    return (
      <RadixTabs.Trigger value={value} asChild disabled={disabled}>
        <Component
          {...rest}
          ref={ref}
          className={cl(
            'eds-tabs__tab',
            `eds-tabs__tab-icon--${iconPosition}`,
            {
              'eds-tabs__tab--icon-only': icon && !label
            },
            className as ClassValue
          )}
          disabled={disabled}
        >
          <BodyText as='span' size='small' className='eds-tabs__tab-inner' weight='bold'>
            {icon}
            {label}
          </BodyText>
        </Component>
      </RadixTabs.Trigger>
    )
  }
)

Tab.displayName = 'Tabs.Tab'
export default Tab
