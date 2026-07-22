import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import { TableDefaultExample } from './examples/Default'
import tableDefaultSource from './examples/Default.tsx?raw'
import { TableExpandableExample } from './examples/Expandable'
import tableExpandableSource from './examples/Expandable.tsx?raw'
import { TableSelectableExample } from './examples/Selectable'
import tableSelectableSource from './examples/Selectable.tsx?raw'
import { TableSizesExample } from './examples/Sizes'
import tableSizesSource from './examples/Sizes.tsx?raw'
import { TableSortableExample } from './examples/Sortable'
import tableSortableSource from './examples/Sortable.tsx?raw'

const ComponentsTable = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='table' level='1' spacing>
        Table
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        The <code>Table</code> component has active headers for sorting, expandable rows, and zebra stripes.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading classRecipe='toc' size='medium' id='table-default' level='2' spacing>
        Default component
      </Heading>

      <VerticalSpace />

      <BodyText>
        This is how a basic <code>Table</code> component and sub-components should be used.
      </BodyText>

      <DemoableDiv alignContent='center' code={tableDefaultSource} codeHighlighter='shiki'>
        <TableDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading classRecipe='toc' size='medium' id='table-size' level='2' spacing>
        Size
      </Heading>

      <BodyText>
        The <code>size</code> prop can be one of the following 2 strings:
      </BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type TableSize = 'medium' | 'small'
      </CodeDiv>

      <DemoableDiv alignContent='center' code={tableSizesSource} codeHighlighter='shiki'>
        <TableSizesExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading classRecipe='toc' size='medium' id='table-sort' level='2' spacing>
        Sort
      </Heading>

      <VerticalSpace />

      <BodyText>
        Set the <code>sort</code> prop and <code>onSortChange</code> to handle the sort requests. You also
        have to add the <code>sortable</code> prop to the column headers you want to allow to be sorted by.
      </BodyText>

      <DemoableDiv alignContent='center' code={tableSortableSource} codeHighlighter='shiki'>
        <TableSortableExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading classRecipe='toc' size='medium' id='table-selectable' level='2' spacing>
        Selectable
      </Heading>

      <BodyText>
        You can have selectable rows, and control the table to get/set the changes being made.
      </BodyText>

      <DemoableDiv alignContent='center' code={tableSelectableSource} codeHighlighter='shiki'>
        <TableSelectableExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading classRecipe='toc' size='medium' id='table-expandable' level='2' spacing>
        Expandable
      </Heading>

      <DemoableDiv alignContent='center' code={tableExpandableSource} codeHighlighter='shiki'>
        <TableExpandableExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading classRecipe='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>
      <VerticalSpace size='2' />

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Recipe</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets table size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>sort</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>SortState</code>
            </Table.DataCell>
            <Table.DataCell>Sets search sort</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsTable
