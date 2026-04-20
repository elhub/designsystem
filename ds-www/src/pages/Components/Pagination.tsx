import { Heading, BodyText, Link, VerticalSpace, Pagination, Table } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsPagination = () => {
  const [page, setPage] = useState<number>(1)
  return (
    <>
      <VerticalSpace size='3' />
      <Heading size='large' id='pagination' level='1'>
        Pagination
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>Pagination</code> component goes along with tables or other list elements that need to show
        only a subset of elements at a time.
      </BodyText>

      <BodyText>
        You need to set at least <code>count</code>, <code>page</code> and <code>onPageChange</code> props so
        you can have a working component.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='pagination-texts' level='2'>
        Default component
      </Heading>
      <VerticalSpace />
      <DemoableDiv
        alignContent='center'
        code={`import { Pagination } from '@elhub/ds-components'

const Component = () => {
  const [page, setPage] = useState<number>(1)
  return (
    <Pagination 
      prevNextTexts 
      count={9} 
      page={page} 
      onPageChange={setPage}
      prevText={'Forrige'}
      nextText={'Neste'}
    />
  )
}`}
      >
        <Pagination count={9} page={page} onPageChange={setPage} prevText={'Forrige'} nextText={'Neste'} />
      </DemoableDiv>
      <VerticalSpace size='2' />
      <Heading className='toc' size='large' id='properties' level='2'>
        Props table
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>PaginationProps</code> interface extends{' '}
        <code>React.HTMLAttributes&lt;HTMLElement&gt;</code>, as the top level uses a <code>nav</code> tag. As
        such, you can pass{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement'>HTMLElement</Link> props.
      </BodyText>
      <VerticalSpace />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>count</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>Total number of pages</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onPageChange</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(page: number) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>callback function called when page changes</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>page</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>Current pagination page</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>renderItem</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(item: PaginationItemProps) =&gt; ReturnType&lt;React.FC&gt;</code>
            </Table.DataCell>
            <Table.DataCell>Overrides the page item renderer</Table.DataCell>
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

export default ComponentsPagination
