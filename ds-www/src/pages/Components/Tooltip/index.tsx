import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { TooltipArrowOffsetExample } from './examples/ArrowOffset'
import tooltipArrowOffsetSource from './examples/ArrowOffset.tsx?raw'
import { TooltipDefaultExample } from './examples/Default'
import tooltipDefaultSource from './examples/Default.tsx?raw'
import { TooltipPlacementExample } from './examples/Placement'
import tooltipPlacementSource from './examples/Placement.tsx?raw'

const ComponentsHome: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Tooltip' level='1' spacing>
        Tooltip
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        A tooltip displays additional information when hovering over or focusing on a Tooltip button. This
        information should be contextual, useful, but not critical.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tooltip-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        You must provide an HTML element to attach the Tooltip elements, so it flows along with the elements
        that are being pointed to. If you
      </BodyText>
      <VerticalSpace size='2' />

      <DemoableDiv alignContent='center' code={tooltipDefaultSource} codeHighlighter='shiki'>
        <TooltipDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tooltip-placement' level='2' spacing>
        Placement
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>The placement prop can ber one of these values:</BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type TooltipPlacement = "top" | "left" | "bottom" | "right"
      </CodeDiv>
      <BodyText>
        you can import TooltipPlacement from <code>@elhub/ds-components</code>.
      </BodyText>

      <VerticalSpace size='2' />

      <DemoableDiv alignContent='center' code={tooltipPlacementSource} codeHighlighter='shiki'>
        <TooltipPlacementExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tooltip-arrow' level='2' spacing>
        Arrow and offset
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        You can remove the Tooltip arrow by setting prop <code>arrow</code> to <code>false</code>. You can
        also define the offset with a numeric value in the <code>offset</code> prop.
      </BodyText>

      <DemoableDiv alignContent='center' code={tooltipArrowOffsetSource} codeHighlighter='shiki'>
        <TooltipArrowOffsetExample />
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
              <code>open</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set Tooltip open</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>defaultOpen</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set Tooltip default open</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>placement</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>"top" | "left" | "bottom" | "right"</code>
            </Table.DataCell>
            <Table.DataCell>Set Tooltip placement</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>auto</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>arrow</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set Tooltip arrow</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>true</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>offset</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>Set Tooltip offset to anchor element</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>6</code> with arrow, <code>2</code> without arrow
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>content</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Tooltip content</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>delay</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>Tooltip delay in milliseconds</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>150</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsHome
