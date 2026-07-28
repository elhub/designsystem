import { fireEvent, render, screen } from '@testing-library/react'
import React, { useState } from 'react'
import { describe, expect, it, vi } from 'vitest'
import Table, { type SortState } from './Table'

const SortableTable = ({
  sort,
  onSortChange
}: {
  sort?: SortState
  onSortChange?: (sort?: SortState) => void
}) => (
  <Table sort={sort} onSortChange={onSortChange}>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader sortable sortKey='name'>
          Name
        </Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
  </Table>
)

const ControlledSortableTable = () => {
  const [sort, setSort] = useState<SortState>()
  return <SortableTable sort={sort} onSortChange={setSort} />
}

describe('Table', () => {
  it('updates when the controlled sort state changes', () => {
    render(<ControlledSortableTable />)
    const header = screen.getByRole('columnheader')

    fireEvent.click(screen.getByRole('button', { name: 'Name' }))
    expect(header.getAttribute('aria-sort')).toBe('ascending')

    fireEvent.click(screen.getByRole('button', { name: 'Name' }))
    expect(header.getAttribute('aria-sort')).toBe('descending')

    fireEvent.click(screen.getByRole('button', { name: 'Name' }))
    expect(header.getAttribute('aria-sort')).toBe('none')
  })

  it('reports complete next state without changing controlled state', () => {
    const onSortChange = vi.fn()
    render(<SortableTable onSortChange={onSortChange} />)

    fireEvent.click(screen.getByRole('button', { name: 'Name' }))

    expect(onSortChange).toHaveBeenCalledWith({
      orderBy: 'name',
      direction: 'ascending',
      type: 'string'
    })
    expect(screen.getByRole('columnheader').getAttribute('aria-sort')).toBe('none')
  })

  it('renders reusable skeleton rows', () => {
    const { container } = render(
      <Table>
        <Table.Skeleton rows={2} columns={4} />
      </Table>
    )

    expect(container.querySelectorAll('.eds-table__skeleton .eds-table__row')).toHaveLength(2)
    expect(container.querySelectorAll('.eds-table__skeleton-line')).toHaveLength(8)
  })
})
