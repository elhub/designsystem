import cl from 'clsx'
import React, { createContext, forwardRef } from 'react'
import Body, { type BodyType } from './Body'
import ColumnHeader, { type ColumnHeaderType } from './ColumnHeader'
import DataCell, { type DataCellType } from './DataCell'
import ExpandableRow, { type ExpandableRowType } from './ExpandableRow'
import Header, { type HeaderType } from './Header'
import HeaderCell, { type HeaderCellType } from './HeaderCell'
import Row, { type RowType } from './Row'
import ScrollContainer, { type ScrollContainerType } from './ScrollContainer'
import Skeleton, { type SkeletonType } from './Skeleton'

export type SortDirection = 'ascending' | 'descending'

type SortType = 'string' | 'date' | 'number'

export interface SortState {
  orderBy: string
  direction: SortDirection
  type?: SortType
}

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  /**
   * Changes padding
   * @default "medium"
   */
  size?: 'medium' | 'small'
  /**
   * Controlled sort state.
   */
  sort?: SortState
  /**
   * Called with the complete next sort state.
   */
  onSortChange?: (sort?: SortState) => void
  /**
   * Controls whether the table uses automatic browser sizing, fills its container, or uses its content width.
   * @default "auto"
   */
  fit?: 'auto' | 'container' | 'content'
}

interface TableType extends React.ForwardRefExoticComponent<
  TableProps & React.RefAttributes<HTMLTableElement>
> {
  Header: HeaderType
  Body: BodyType
  Row: RowType
  DataCell: DataCellType
  HeaderCell: HeaderCellType
  ColumnHeader: ColumnHeaderType
  ExpandableRow: ExpandableRowType
  ScrollContainer: ScrollContainerType
  Skeleton: SkeletonType
}

interface TableContextProps {
  size: 'medium' | 'small'
  requestSort: (sortKey: string, type?: SortType) => void
  sort?: SortState
}

export const TableContext = createContext<TableContextProps | null>(null)

const getNextSort = (
  sort: SortState | undefined,
  sortKey: string,
  type?: SortType
): SortState | undefined => {
  if (sort?.orderBy !== sortKey) {
    return { orderBy: sortKey, direction: 'ascending', type }
  }
  if (sort.direction === 'ascending') {
    return { orderBy: sortKey, direction: 'descending', type }
  }
  return undefined
}

const Table = forwardRef((props, ref) => {
  const { className, size = 'small', fit = 'auto', onSortChange, sort, ...rest } = props

  const requestSort = (sortKey: string, type?: SortType) => {
    const nextSort = getNextSort(sort, sortKey, type)
    onSortChange?.(nextSort)
  }

  return (
    <TableContext.Provider value={{ size, requestSort, sort }}>
      <table
        {...rest}
        ref={ref}
        className={cl('eds-table', `eds-table--${size}`, `eds-table--fit-${fit}`, className)}
      />
    </TableContext.Provider>
  )
}) as TableType

Table.Header = Header
Table.Body = Body
Table.Row = Row
Table.ColumnHeader = ColumnHeader
Table.HeaderCell = HeaderCell
Table.DataCell = DataCell
Table.ExpandableRow = ExpandableRow
Table.ScrollContainer = ScrollContainer
Table.Skeleton = Skeleton

Table.displayName = 'Table'
export default Table
