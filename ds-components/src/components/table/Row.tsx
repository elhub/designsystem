import cl from 'clsx'
import React, { forwardRef } from 'react'

export interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /**
   * Row is selected
   * @default false
   */
  selected?: boolean
}

export type RowType = React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLTableRowElement>>

const Row: RowType = forwardRef(({ className, selected = false, ...rest }, ref) => (
  <tr
    {...rest}
    ref={ref}
    className={cl(
      'eds-table__row',
      {
        'eds-table__row--selected': selected
      },
      className
    )}
  />
))

Row.displayName = 'Row'
export default Row
