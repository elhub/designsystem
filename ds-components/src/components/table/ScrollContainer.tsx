import cl from 'clsx'
import React, { forwardRef } from 'react'

export type ScrollContainerProps = React.HTMLAttributes<HTMLDivElement>

export type ScrollContainerType = React.ForwardRefExoticComponent<
  ScrollContainerProps & React.RefAttributes<HTMLDivElement>
>

const ScrollContainer: ScrollContainerType = forwardRef(({ className, ...rest }, ref) => (
  <div {...rest} ref={ref} className={cl('eds-table__scroll-container', className)} />
))

ScrollContainer.displayName = 'Table.ScrollContainer'

export default ScrollContainer
