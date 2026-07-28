import { IconSortDescending as Down, IconUnsorted as UpDown } from '@elhub/ds-icons'
import React, { forwardRef, useContext } from 'react'
import HeaderCell, { type HeaderCellProps } from './HeaderCell'
import { TableContext } from './Table'
import cl from 'clsx'

interface ColumnHeaderProps extends HeaderCellProps {
  /**
   * Key to sort by
   */
  sortKey?: string
  /**
   * Column is sortable, adds indicators to show sorting
   * @default false
   */
  sortable?: boolean
  /**
   * Value type used by consumers when applying the requested sort.
   * @default "string"
   */
  sortType?: 'string' | 'date' | 'number'
}

export type ColumnHeaderType = React.ForwardRefExoticComponent<
  ColumnHeaderProps & React.RefAttributes<HTMLTableCellElement>
>

const ColumnHeader: ColumnHeaderType = forwardRef(
  ({ className, children, sortable = false, sortKey, sortType = 'string', ...rest }, ref) => {
    const context = useContext(TableContext)

    if (sortable && !sortKey) {
      console.warn('ColumnHeader with `sortable=true` must have a sortKey.')
    }

    return (
      <HeaderCell
        {...rest}
        ref={ref}
        className={className}
        scope='col'
        aria-sort={
          // eslint-disable-next-line no-nested-ternary
          sortable ? (context?.sort?.orderBy === sortKey ? context?.sort?.direction : 'none') : undefined
        }
      >
        {sortable ? (
          <button
            className='eds-table__sort-button'
            onClick={sortable && sortKey ? () => context?.requestSort(sortKey, sortType) : undefined}
          >
            {children}
            {context?.sort?.orderBy === sortKey ? (
              <Down
                size='small'
                className={cl(
                  'eds-table__sort-icon',
                  context?.sort?.direction === 'ascending' && 'eds-table__sort-icon--up'
                )}
                aria-hidden
              />
            ) : (
              <UpDown size='small' aria-hidden />
            )}
          </button>
        ) : (
          children
        )}
      </HeaderCell>
    )
  }
)

ColumnHeader.displayName = 'Table.ColumnHeader'
export default ColumnHeader
