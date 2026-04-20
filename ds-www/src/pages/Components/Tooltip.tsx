import {
  BodyText,
  Button,
  FlexEndDiv,
  Heading,
  HorizontalSpace,
  Select,
  SelectContent,
  SelectItem,
  Table,
  Tooltip,
  type TooltipPlacement,
  VerticalSpace
} from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'
import { IconPlus as Add } from '@elhub/ds-icons'

const ComponentsHome: React.FC = () => {
  const [placement, setPlacement] = useState<TooltipPlacement>('top')

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

      <DemoableDiv
        alignContent='center'
        code={`import { Tooltip } from '@elhub/ds-components'

const Component = () => {
  return (
    <Tooltip content="Print this page">
      <Button size='small' icon={Add} iconProps={{ size: 'medium', title: 'demo knapp' }}/>
    </Tooltip>
  )
}`}
      >
        <Tooltip content='Print this page'>
          <Button size='small' icon={Add} iconProps={{ size: 'medium', title: 'demo knapp' }} />
        </Tooltip>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tooltip-placement' level='2' spacing>
        Placement
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>The placement prop can ber one of these values:</BodyText>

      <CodeDiv expand={false} spacing>
        export type TooltipPlacement = "top" | "left" | "bottom" | "right"
      </CodeDiv>
      <BodyText>
        you can import TooltipPlacement from <code>@elhub/ds-components</code>.
      </BodyText>

      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Tooltip } from '@elhub/ds-components'

const Component = () => {
  return (
   <FlexEndDiv>
      <Select onChange={(e: any) => setPlacement(e.target.value)}>
      <SelectContent>
        <SelectItem>top</SelectItem>
        <SelectItem>left</SelectItem>
        <SelectItem>bottom</SelectItem>
        <SelectItem>right</SelectItem>
        </SelectContent>
      </Select>
      <HorizontalSpace/>
      <Tooltip placement={placement} content={'Tooltip is placed on ' + placement}>
        <BodyText>Hover me for tooltip</BodyText>
      </Tooltip>
    </FlexEndDiv>
  )
}`}
      >
        <FlexEndDiv>
          <Select
            placeholder='placement'
            defaultValue='top'
            onValueChange={(value) => {
              setPlacement(value as TooltipPlacement)
            }}
          >
            <SelectContent>
              <SelectItem value='top'>top</SelectItem>
              <SelectItem value='left'>left</SelectItem>
              <SelectItem value='bottom'>bottom</SelectItem>
              <SelectItem value='right'>right</SelectItem>
            </SelectContent>
          </Select>
          <HorizontalSpace />
          <Tooltip placement={placement} content={`Tooltip is placed on ${placement}`}>
            <BodyText>Hover me for tooltip</BodyText>
          </Tooltip>
        </FlexEndDiv>
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

      <DemoableDiv
        alignContent='center'
        code={`import { Tooltip } from '@elhub/ds-components'

const Component = () => {
  return (
    <Tooltip 
      arrow={false} 
      offset='50'
      content='This Tooltip has no arrow and has a 50px offset'
    >
       <BodyText>Hover me for tooltip</BodyText>
    </Tooltip>
  )
}`}
      >
        <Tooltip arrow={false} offset={100} content='This Tooltip has no arrow and has a 100px offset'>
          <BodyText>Hover me for tooltip</BodyText>
        </Tooltip>
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
