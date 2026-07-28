import { BodyText, Heading, Link, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import { PopoverArrowAndOffsetExample } from './examples/ArrowAndOffset'
import popoverArrowAndOffsetSource from './examples/ArrowAndOffset.tsx?raw'
import { PopoverDefaultExample } from './examples/Default'
import popoverDefaultSource from './examples/Default.tsx?raw'
import { PopoverPlacementExample } from './examples/Placement'
import popoverPlacementSource from './examples/Placement.tsx?raw'
import { PopoverVariantsExample } from './examples/Variants'
import popoverVariantsSource from './examples/Variants.tsx?raw'

const ComponentsHome = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='popover' level='1' spacing>
        Popover
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>Popover</code> component shows a ballon panel with a contextual text.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='popover-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace />
      <BodyText>
        You must provide an HTML element to attach the popover elements, so it is displayed next to the
        element that is being pointed to.
      </BodyText>

      <DemoableDiv alignContent='center' code={popoverDefaultSource} codeHighlighter='shiki'>
        <PopoverDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='popover-placement' level='2' spacing>
        Placement
      </Heading>
      <VerticalSpace />
      <BodyText>
        The HelpText <code>placement</code> prop is a <code>Placement</code> type from{' '}
        <Link href='https://www.npmjs.com/package/@popperjs/core'>@popperjs/core</Link>, and can be one of the
        following 12 strings:
      </BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        {`export type Placement = 'top' | 'bottom' | 'right' | 'left' | 'top-start' | 'top-end' |
   'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end'`}
      </CodeDiv>

      <DemoableDiv alignContent='center' code={popoverPlacementSource} codeHighlighter='shiki'>
        <PopoverPlacementExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='popover-variant' level='2' spacing>
        Variant
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>variant</code> prop is passed to the Popover component, which can have 2 values.
      </BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        {`export type PopoverVariant = 'primary' | 'secondary'`}
      </CodeDiv>

      <VerticalSpace />

      <DemoableDiv alignContent='center' code={popoverVariantsSource} codeHighlighter='shiki'>
        <PopoverVariantsExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='popover-arrow' level='2' spacing>
        Arrow and offset
      </Heading>
      <VerticalSpace />
      <BodyText>
        You can remove the popover arrow by setting prop <code>arrow</code> to <code>false</code>. You can
        also define the offset with a numeric value in the <code>offset</code> prop.
      </BodyText>

      <DemoableDiv alignContent='center' code={popoverArrowAndOffsetSource} codeHighlighter='shiki'>
        <PopoverArrowAndOffsetExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>PopoverProps</code> interface extends{' '}
        <code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code>, as the top level component is a{' '}
        <code>Panel</code> component as a <code>div</code>. As such, you can pass{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement'>HTMLDivElement</Link>{' '}
        props.
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
              <code>anchorEl</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>Element | null</code>
            </Table.DataCell>
            <Table.DataCell>set HTML element to anchor the popover</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>arrow</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set popover arrow</Table.DataCell>
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
            <Table.DataCell>Set popover offset to anchor element</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>16</code> with arrow, <code>4</code> without arrow
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onClose</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>() =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Set popover callback when it closes</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>open</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set popover open</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>placement</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>
                "auto" | "auto-start" | "auto-end" | "top" | "left" | "bottom" | "right" | "top-start" |
                "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" |
                "left-end"
              </code>
            </Table.DataCell>
            <Table.DataCell>Set popover placement</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>auto</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>strategy</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'absolute' | 'fixed'</code>
            </Table.DataCell>
            <Table.DataCell>
              Set popover CSS position attribute. Use 'fixed' if popover is inside a fixed element, otherwise
              leave this property as 'absolute'
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>absolute</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>variant</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'primary' | 'secondary'</code>
            </Table.DataCell>
            <Table.DataCell>Sets popover variant.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>primary</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsHome
