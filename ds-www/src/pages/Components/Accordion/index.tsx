import { BodyText, Heading, Link, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { AccordionArrowVisibilityExample } from './examples/ArrowVisibility'
import accordionArrowVisibilitySource from './examples/ArrowVisibility.tsx?raw'
import { AccordionBordersExample } from './examples/Borders'
import accordionBordersSource from './examples/Borders.tsx?raw'
import { AccordionControlledExample } from './examples/Controlled'
import accordionControlledSource from './examples/Controlled.tsx?raw'
import { AccordionDefaultExample } from './examples/Default'
import accordionDefaultSource from './examples/Default.tsx?raw'
import { AccordionSingleOpenExample } from './examples/SingleOpen'
import accordionSingleOpenSource from './examples/SingleOpen.tsx?raw'
import { AccordionSizesExample } from './examples/Sizes'
import accordionSizesSource from './examples/Sizes.tsx?raw'
import { AccordionVariantsExample } from './examples/Variants'
import accordionVariantsSource from './examples/Variants.tsx?raw'

const ComponentsAccordion = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Accordion' level='1' spacing>
        Accordion
      </Heading>

      <VerticalSpace />
      <BodyText>Accordions organize your content into expendable sections.</BodyText>

      <BodyText>
        Be sure you use the exported Accordion sub-components <code>Accordion.Item</code>,{' '}
        <code>Accordion.Header</code> and <code>Accordion.Content</code> as shown in the examples.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-default' level='2' spacing>
        Default component
      </Heading>

      <VerticalSpace />

      <BodyText>
        The default component renders with medium size, primary variant, no border and with arrow.
      </BodyText>

      <DemoableDiv alignContent='center' code={accordionDefaultSource} codeHighlighter='shiki'>
        <AccordionDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-variant' level='2' spacing>
        Variants
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>variant</code> prop can be one of the following 3 values:
      </BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type AccordionVariant = 'primary' | 'secondary' | 'tertiary'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>AccordionVariant</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <DemoableDiv alignContent='center' code={accordionVariantsSource} codeHighlighter='shiki'>
        <AccordionVariantsExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-arrow' level='2' spacing>
        Hide arrow
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>arrow</code> prop adds a expand / collapse icon places on the right side of the accordion
        header. It is true by default, but if you want to hide it, set it to <code>false</code>.
      </BodyText>
      <DemoableDiv alignContent='center' code={accordionArrowVisibilitySource} codeHighlighter='shiki'>
        <AccordionArrowVisibilityExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-border' level='2' spacing>
        Border
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>border</code> prop adds a border through the accordion's header and content.
      </BodyText>
      <DemoableDiv alignContent='center' code={accordionBordersSource} codeHighlighter='shiki'>
        <AccordionBordersExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-sizes' level='2' spacing>
        Sizes
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>size</code> prop can be one of the following 3 values:
      </BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type AccordionSize = 'medium' | 'small' | 'xsmall'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>AccordionSize</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <DemoableDiv alignContent='center' code={accordionSizesSource} codeHighlighter='shiki'>
        <AccordionSizesExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Accordion-controlled' level='2' spacing>
        Controlling the open state
      </Heading>

      <VerticalSpace />
      <BodyText>
        You can control the expand/collapse state of accordion item(s) from the outside, as follows:
      </BodyText>

      <DemoableDiv alignContent='center' code={accordionControlledSource} codeHighlighter='shiki'>
        <AccordionControlledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Accordion-one-open' level='2' spacing>
        One section open at a time
      </Heading>

      <VerticalSpace />
      <BodyText>
        If you want to have the accordion with maximum of one section open at the same time, do this for
        example:
      </BodyText>

      <DemoableDiv alignContent='center' code={accordionSingleOpenSource} codeHighlighter='shiki'>
        <AccordionSingleOpenExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props tables
      </Heading>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-properties' level='3' spacing>
        Accordion props
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>AccordionProps</code> interface extends{' '}
        <code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code>, as the top level uses a <code>div</code> tag.
        As such, you can pass{' '}
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
              <code>arrow</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets accordion arrow</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>true</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>border</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets accordion border</Table.DataCell>
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
              <code>'medium' | 'small' | 'xsmall'</code>
            </Table.DataCell>
            <Table.DataCell>Sets accordion size</Table.DataCell>
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
              <code>'primary' | 'secondary' | 'tertiary'</code>
            </Table.DataCell>
            <Table.DataCell>Sets accordion variant</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>primary</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-item-properties' level='3' spacing>
        Accordion.Item props
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>AccordionItemProps</code> interface extends{' '}
        <code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code>, as the top level uses a <code>div</code> tag.
        As such, you can pass{' '}
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
              <code>defaultOpen</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Defaults the accordion to open if not controlled</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>open</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>
              Sets accordion to open state. Use this if you want to remove automatic control of open state
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'medium' | 'small' | 'xsmall'</code>
            </Table.DataCell>
            <Table.DataCell>Sets accordion item size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-header-properties' level='3' spacing>
        Accordion.Header props
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>AccordionHeaderProps</code> interface extends{' '}
        <code>React.HTMLAttributes&lt;HTMLButtonElement&gt;</code>, as the top level uses a{' '}
        <code>button</code> tag. As such, you can pass{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLDButtonElement'>
          HTMLButtonElement
        </Link>{' '}
        props and <Link href='https://developer.mozilla.org/en-US/docs/Web/API/UIEvent'>UI events</Link> such
        as <code>onClick</code>.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-content-properties' level='3' spacing>
        Accordion.Content props
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>AccordionContentProps</code> interface extends{' '}
        <code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code>, as the top level uses a <code>div</code> tag.
        As such, you can pass{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement'>HTMLDivElement</Link>{' '}
        props.
      </BodyText>

      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsAccordion
