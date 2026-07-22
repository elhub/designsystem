import cl from 'clsx'
import React, { forwardRef } from 'react'

export interface SkeletonProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  /**
   * Number of placeholder rows.
   * @default 5
   */
  rows?: number
  /**
   * Number of placeholder columns.
   * @default 3
   */
  columns?: number
}

export type SkeletonType = React.ForwardRefExoticComponent<
  SkeletonProps & React.RefAttributes<HTMLTableSectionElement>
>

const Skeleton: SkeletonType = forwardRef(({ className, rows = 5, columns = 3, ...rest }, ref) => (
  <tbody
    {...rest}
    ref={ref}
    className={cl('eds-table__body', 'eds-table__skeleton', className)}
    aria-hidden='true'
  >
    {Array.from({ length: rows }, (_row, rowIndex) => (
      <tr className='eds-table__row' key={rowIndex}>
        {Array.from({ length: columns }, (_column, columnIndex) => (
          <td className='eds-table__data-cell' key={columnIndex}>
            <span className='eds-table__skeleton-line' />
          </td>
        ))}
      </tr>
    ))}
  </tbody>
))

Skeleton.displayName = 'Table.Skeleton'

export default Skeleton
