import cl, { type ClassValue } from 'clsx'
import React, { forwardRef } from 'react'
import { type OverridableComponent } from 'util/index'

interface LinkPanelTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export type LinkPanelTitleType = OverridableComponent<LinkPanelTitleProps>

const LinkPanelTitle: LinkPanelTitleType = forwardRef(
  ({ className, as: Component = 'div', ...rest }, ref) => (
    <Component
      {...rest}
      ref={ref}
      className={cl('eds-link-panel__title', 'eds-heading', 'eds-heading--medium', className as ClassValue)}
    />
  )
)

LinkPanelTitle.displayName = 'LinkPanel.Title'
export default LinkPanelTitle
