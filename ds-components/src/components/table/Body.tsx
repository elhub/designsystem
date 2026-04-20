import cl from 'clsx'
import React, { forwardRef } from 'react'

type BodyProps = React.HTMLAttributes<HTMLTableSectionElement>

export type BodyType = React.ForwardRefExoticComponent<
  BodyProps & React.RefAttributes<HTMLTableSectionElement>
>

const Body: BodyType = forwardRef(({ className, ...rest }, ref) => (
  <tbody {...rest} ref={ref} className={cl('eds-table__body', className)} />
))

Body.displayName = 'Table.Body'
export default Body
