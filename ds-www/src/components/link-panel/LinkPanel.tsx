import { IconChevronRight as Next } from '@elhub/ds-icons'
import cl, { type ClassValue } from 'clsx'
import { Panel } from '@elhub/ds-components'
import React, { forwardRef } from 'react'
import LinkPanelDescription, { type LinkPanelDescriptionType } from './LinkPanelDescription'
import LinkPanelTitle, { type LinkPanelTitleType } from './LinkPanelTitle'
import { type OverridableComponent } from '../../../../ds-components/src/util/index'
import './link-panel.css'

type LinkPanelVariant = 'primary' | 'secondary' | 'tertiary'

interface LinkPanelProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Panel content
   */
  children?: React.ReactNode

  /**
   * Adds a bottom margin
   * @default false
   */
  spacing?: boolean

  /**
   * Changes design and interaction-visuals
   * @default "primary"
   */
  variant?: LinkPanelVariant
}

type LinkPanelComponent = OverridableComponent<LinkPanelProps> & {
  Title: LinkPanelTitleType
  Description: LinkPanelDescriptionType
}

const LinkPanel: OverridableComponent<LinkPanelProps> = forwardRef(
  ({ children, as = 'a', variant = 'primary', spacing = false, className, ...rest }, ref) => {
    return (
      <Panel
        {...rest}
        ref={ref}
        as={as}
        className={cl(
          'eds-link-panel',
          `eds-link-panel--${variant}`,
          {
            'eds-link-panel--spacing': spacing
          },
          className as ClassValue
        )}
      >
        <div className='eds-link-panel__content'>{children}</div>
        <Next size='medium' className='eds-link-panel__chevron' aria-hidden />
      </Panel>
    )
  }
)

LinkPanel.displayName = 'LinkPanel'

const LinkPanelReturnValue = LinkPanel as LinkPanelComponent
LinkPanelReturnValue.Title = LinkPanelTitle
LinkPanelReturnValue.Description = LinkPanelDescription
LinkPanelReturnValue.displayName = 'LinkPanel'
export default LinkPanelReturnValue
