import { BodyText, FlexDiv, Heading, HorizontalSpace, Table, Tag, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'

const ComponentsTag = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Tag' level='1' spacing>
        Tag
      </Heading>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Tag-default' level='2' spacing>
        Default component
      </Heading>

      <DemoableDiv
        alignContent='center'
        code={`import { Tag } from '@elhub/ds-components'

const Component = () => {
  return (
    <Tag>Default</Tag>
  )
}`}
      >
        <Tag>Default</Tag>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tag-variants' level='2' spacing>
        Variants
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>The tag variant prop have one of the following 4 strings:</BodyText>

      <CodeDiv expand={false} spacing>
        export type TagVariant = 'warning' | 'error' | 'info' | 'success'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>TagVariant</code> from <code>@elhub/ds-components</code>.
      </BodyText>

      <BodyText>
        This is not a required prop, the variant only applies the corresponding feedback colors.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Tag } from '@elhub/ds-components'

const Component = () => {
  return (
    <FlexDiv>
      <Tag variant="info">info</Tag>
      <HorizontalSpace/>
      <Tag variant="error">error</Tag>
      <HorizontalSpace/>
      <Tag variant="success">success</Tag>
      <HorizontalSpace/>
      <Tag variant="warning">warning</Tag>
    </FlexDiv>
    )
}`}
      >
        <FlexDiv>
          <Tag variant='info'>info</Tag>
          <HorizontalSpace />
          <Tag variant='error'>error</Tag>
          <HorizontalSpace />
          <Tag variant='success'>success</Tag>
          <HorizontalSpace />
          <Tag variant='warning'>warning</Tag>
        </FlexDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tag-size' level='2' spacing>
        Size
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>The tag size prop have one of the following 4 strings:</BodyText>

      <CodeDiv expand={false} spacing>
        export type TagSize = 'medium' | 'small'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>TagSize</code> from <code>@elhub/ds-components</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Tag } from '@elhub/ds-components'

const Component = () => {
  return (
    <FlexDiv>
      <Tag variant="info" size="medium">medium</Tag>
      <HorizontalSpace/>
      <Tag variant="info" size="small">small</Tag>
    </FlexDiv>
    )
}`}
      >
        <FlexDiv>
          <Tag variant='info' size='medium'>
            medium
          </Tag>
          <HorizontalSpace />
          <Tag variant='info' size='small'>
            small
          </Tag>
        </FlexDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tag-customizable' level='2' spacing>
        Customizable
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        You can pass a <code>style</code> prop to customize your tags.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Tag } from '@elhub/ds-components'

const Component = () => {
  return (
      <Tag style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, ' +
          'rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          borderRadius: '20px',
          color: 'var(--eds-semantic-background)'
      }}>Custom tag</Tag>
    )
}`}
      >
        <Tag
          style={{
            background:
              'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
            borderRadius: '20px',
            color: 'var(--eds-semantic-background)'
          }}
        >
          Custom tag
        </Tag>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>
      <VerticalSpace size='2' />

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
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets tag size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>variant</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'warning' | 'error' | 'info' | 'success'</code>
            </Table.DataCell>
            <Table.DataCell>Sets optional tag variant</Table.DataCell>
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

export default ComponentsTag
