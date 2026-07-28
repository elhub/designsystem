import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { TagCustomStylesExample } from './examples/CustomStyles'
import tagCustomStylesSource from './examples/CustomStyles.tsx?raw'
import { TagDefaultExample } from './examples/Default'
import tagDefaultSource from './examples/Default.tsx?raw'
import { TagSizesExample } from './examples/Sizes'
import tagSizesSource from './examples/Sizes.tsx?raw'
import { TagVariantsExample } from './examples/Variants'
import tagVariantsSource from './examples/Variants.tsx?raw'

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

      <DemoableDiv alignContent='center' code={tagDefaultSource} codeHighlighter='shiki'>
        <TagDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tag-variants' level='2' spacing>
        Variants
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>The tag variant prop have one of the following 4 strings:</BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type TagVariant = 'warning' | 'error' | 'info' | 'success'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>TagVariant</code> from <code>@elhub/ds-components</code>.
      </BodyText>

      <BodyText>
        This is not a required prop, the variant only applies the corresponding feedback colors.
      </BodyText>

      <DemoableDiv alignContent='center' code={tagVariantsSource} codeHighlighter='shiki'>
        <TagVariantsExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tag-size' level='2' spacing>
        Size
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>The tag size prop have one of the following 4 strings:</BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type TagSize = 'medium' | 'small'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>TagSize</code> from <code>@elhub/ds-components</code>.
      </BodyText>

      <DemoableDiv alignContent='center' code={tagSizesSource} codeHighlighter='shiki'>
        <TagSizesExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tag-customizable' level='2' spacing>
        Customizable
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        You can pass a <code>style</code> prop to customize your tags.
      </BodyText>

      <DemoableDiv alignContent='center' code={tagCustomStylesSource} codeHighlighter='shiki'>
        <TagCustomStylesExample />
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
