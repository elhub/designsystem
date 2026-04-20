import React, { forwardRef, HTMLAttributes } from 'react'
import cl from 'clsx'

export type DividerProps = HTMLAttributes<HTMLDivElement>

const Divider = forwardRef<HTMLDivElement, DividerProps>(({ className, ...rest }, ref) => {
  return <div {...rest} ref={ref} className={cl('eds-divider', className)} />
})

Divider.displayName = 'Divider'
export default Divider
