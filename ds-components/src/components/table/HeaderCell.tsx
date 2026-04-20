import cl from 'clsx'
import React, { forwardRef, useContext } from 'react'
import { TableContext } from './Table'
import { BodyText } from '../typography'

export interface HeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  scope?: string
  /**
   * Content alignment inside cell
   * @default "left"
   */
  align?: 'left' | 'center' | 'right'
}

export type HeaderCellType = React.ForwardRefExoticComponent<
  HeaderCellProps & React.RefAttributes<HTMLTableCellElement>
>

const HeaderCell: HeaderCellType = forwardRef(({ className, children, align, ...rest }, ref) => {
  const context = useContext(TableContext)

  return (
    <BodyText
      {...rest}
      weight='bold'
      ref={ref}
      className={cl(
        'eds-table__header-cell',
        {
          [`eds-table__header-cell--align-${align}`]: align
        },
        className
      )}
      as='th'
      size={context?.size}
    >
      {children}
    </BodyText>
  )
})

HeaderCell.displayName = 'HeaderCell'
export default HeaderCell
