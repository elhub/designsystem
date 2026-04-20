import React, { forwardRef } from 'react'
import cl from 'clsx'

export type DividerType = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLHRElement> & React.RefAttributes<HTMLHRElement>
>

const Divider: DividerType = forwardRef(({ className, ...rest }, ref) => (
  <hr {...rest} ref={ref} className={cl('eds-dropdown__divider', className)} />
))

Divider.displayName = 'Dropdown.Menu.Divider'
export default Divider
