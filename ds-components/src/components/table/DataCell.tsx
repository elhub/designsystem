import cl from 'clsx'
import React, { forwardRef, useContext } from 'react'
import { BodyText } from 'components/typography'
import { TableContext } from './Table'

interface DataCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  /**
   * Content alignment inside cell
   * @default "left"
   */
  align?: 'left' | 'center' | 'right'
}

export type DataCellType = React.ForwardRefExoticComponent<
  DataCellProps & React.RefAttributes<HTMLTableCellElement>
>

const DataCell: DataCellType = forwardRef(({ className, children = '', align, ...rest }, ref) => {
  const context = useContext(TableContext)

  return (
    <BodyText
      {...rest}
      ref={ref}
      className={cl(
        'eds-table__data-cell',
        {
          [`eds-table__data-cell--align-${align}`]: align
        },
        className
      )}
      as='td'
      size={context?.size}
    >
      {children}
    </BodyText>
  )
})

DataCell.displayName = 'Table.DataCell'
export default DataCell
