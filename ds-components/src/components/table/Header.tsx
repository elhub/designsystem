import React, { forwardRef } from 'react'
import cl from 'clsx'

type HeaderProps = React.HTMLAttributes<HTMLTableSectionElement>

export type HeaderType = React.ForwardRefExoticComponent<
  HeaderProps & React.RefAttributes<HTMLTableSectionElement>
>

const Header: HeaderType = forwardRef(({ className, ...rest }, ref) => (
  <thead {...rest} ref={ref} className={cl('eds-table__header', className)} />
))

Header.displayName = 'Table.Header'
export default Header
