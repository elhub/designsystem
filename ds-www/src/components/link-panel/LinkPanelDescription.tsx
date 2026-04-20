import React, { forwardRef } from 'react'
import cl from 'clsx'
import { BodyText } from '@elhub/ds-components'

interface LinkPanelDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export type LinkPanelDescriptionType = React.ForwardRefExoticComponent<
  LinkPanelDescriptionProps & React.RefAttributes<HTMLDivElement>
>

const LinkPanelDescription: LinkPanelDescriptionType = forwardRef(({ className, ...rest }, ref) => (
  <BodyText {...rest} as='div' ref={ref} className={cl('eds-link-panel__description', className)} />
))

LinkPanelDescription.displayName = 'LinkPanel.Description'
export default LinkPanelDescription
