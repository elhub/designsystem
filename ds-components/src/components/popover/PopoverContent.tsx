import cl from 'clsx'
import React, { forwardRef } from 'react'

interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Modal.Content content
   */
  children: React.ReactNode
}

export type PopoverContentType = React.ForwardRefExoticComponent<
  PopoverContentProps & React.RefAttributes<HTMLDivElement>
>

const PopoverContent: PopoverContentType = forwardRef(({ className, ...rest }, ref) => (
  <div {...rest} ref={ref} className={cl('eds-popover__content', className)} />
))

PopoverContent.displayName = 'Popover.Content'
export default PopoverContent
