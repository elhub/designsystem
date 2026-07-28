import { Table } from '@elhub/ds-components'

export const TableLoadingAndOverflowExample = () => (
  <Table.ScrollContainer>
    <Table fit='content' aria-busy='true'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Settlement period</Table.ColumnHeader>
          <Table.ColumnHeader>Metering point</Table.ColumnHeader>
          <Table.ColumnHeader>Grid area</Table.ColumnHeader>
          <Table.ColumnHeader>Production</Table.ColumnHeader>
          <Table.ColumnHeader>Consumption</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Skeleton rows={3} columns={5} />
    </Table>
  </Table.ScrollContainer>
)
