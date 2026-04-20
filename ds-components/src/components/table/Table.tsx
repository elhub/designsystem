import cl from 'clsx'
import React, { createContext, forwardRef } from 'react'
import Body, { type BodyType } from './Body'
import ColumnHeader, { type ColumnHeaderType } from './ColumnHeader'
import DataCell, { type DataCellType } from './DataCell'
import ExpandableRow, { type ExpandableRowType } from './ExpandableRow'
import Header, { type HeaderType } from './Header'
import HeaderCell, { type HeaderCellType } from './HeaderCell'
import Row, { type RowType } from './Row'

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
   * Sort state
   */
  sort?: SortState
  /**
   * Callback whens sort state changes
   */
  onSortChange?: (sortKey?: string) => void
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
}

interface TableContextProps {
  size: 'medium' | 'small'
  onSortChange?: (sortKey: string) => void
  sort?: SortState
}

export const TableContext = createContext<TableContextProps | null>(null)

const Table = forwardRef(({ className, size = 'small', onSortChange, sort, ...rest }, ref) => (
  <TableContext.Provider value={{ size, onSortChange, sort }}>
    <table {...rest} ref={ref} className={cl('eds-table', `eds-table--${size}`, className)} />
  </TableContext.Provider>
)) as TableType

Table.Header = Header
Table.Body = Body
Table.Row = Row
Table.ColumnHeader = ColumnHeader
Table.HeaderCell = HeaderCell
Table.DataCell = DataCell
Table.ExpandableRow = ExpandableRow

Table.displayName = 'Table'
export default Table
