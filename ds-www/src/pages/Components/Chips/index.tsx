import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { ChipsDefaultExample } from './examples/Default'
import chipsDefaultSource from './examples/Default.tsx?raw'
import { ChipsDisabledExample } from './examples/Disabled'
import chipsDisabledSource from './examples/Disabled.tsx?raw'
import { ChipsSizesExample } from './examples/Sizes'
import chipsSizesSource from './examples/Sizes.tsx?raw'

const ComponentsChips = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Chips' level='1' spacing>
        Chips
      </Heading>
      <VerticalSpace size='2' />
      <p>
        <BodyText>
          Chips come in one flavor:
          <ul>
            <li>
              <strong>Chip</strong> - A chip that can be dismissed, and it is not visible when off. This is
              the preferred chip for the combobox with multiple selections.
            </li>
          </ul>
        </BodyText>
      </p>
      <p>
        <BodyText>Chips come in three sizes: large, medium, and small. The default size is medium.</BodyText>
      </p>

      <Heading className='toc' size='medium' id='Chips-default' level='2' spacing>
        Chip component
      </Heading>

      <DemoableDiv alignContent='center' code={chipsDefaultSource} codeHighlighter='shiki'>
        <ChipsDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Chips-disabled' level='2' spacing>
        Disabled
      </Heading>

      <DemoableDiv alignContent='center' code={chipsDisabledSource} codeHighlighter='shiki'>
        <ChipsDisabledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Chips-size' level='2' spacing>
        Size
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv alignContent='center' code={chipsSizesSource} codeHighlighter='shiki'>
        <ChipsSizesExample />
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
              <code>disabled</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets disabled</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onClick</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>() =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function when clicking on the chip text</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>selected</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets selected style</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'large' | 'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets chip size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsChips
