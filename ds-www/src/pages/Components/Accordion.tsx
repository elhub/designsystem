import {
  Accordion,
  AccordionSize,
  AccordionVariant,
  BodyText,
  Button,
  FlexDiv,
  Heading,
  Link,
  Panel,
  PileCenterDiv,
  Table,
  VerticalSpace
} from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'

const SampleAccordion = ({
  size = 'medium',
  variant = 'primary',
  border = false,
  arrow = true,
  open
}: {
  size?: AccordionSize
  variant?: AccordionVariant
  border?: boolean
  arrow?: boolean
  open?: boolean
}) => (
  <Accordion border={border} size={size} variant={variant} arrow={arrow}>
    <Accordion.Item open={open}>
      <Accordion.Header>Recipe ingredients</Accordion.Header>
      <Accordion.Content>
        <span>You need these ingredients:</span>
        <ul>
          <li>Flour</li>
          <li>Milk</li>
          <li>Eggs</li>
          <li>Sugar</li>
          <li>Butter</li>
        </ul>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item open={open}>
      <Accordion.Header>Preparation</Accordion.Header>
      <Accordion.Content>
        <ul>
          <li>Add everything in a bowl</li>
          <li>Mix it for 10 min</li>
          <li>
            Put in a oven for 20 min, 200<sup>o</sup> C
          </li>
        </ul>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
)

const ComponentsAccordion = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [open2, setOpen2] = useState<number>(1)

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

      <DemoableDiv
        alignContent='center'
        code={`import { Accordion } from '@elhub/ds-components'
                    
const Component = () => {
  return ${reactElementToJSXString(SampleAccordion({}), {
    showDefaultProps: false,
    filterProps: ['arrow', 'border', 'size', 'variant']
  })}
}`}
      >
        <SampleAccordion />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-variant' level='2' spacing>
        Variants
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>variant</code> prop can be one of the following 3 values:
      </BodyText>

      <CodeDiv expand={false} spacing>
        export type AccordionVariant = 'primary' | 'secondary' | 'tertiary'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>AccordionVariant</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Accordion } from '@elhub/ds-components'
                    
const Component = () => {
  return (
    <FlexDiv>
      <PileCenterDiv>
        <BodyText>Primary</BodyText>
          ${reactElementToJSXString(SampleAccordion({ variant: 'primary' }), {
            showDefaultProps: false,
            filterProps: ['arrow', 'border', 'size'],
            maxInlineAttributesLineLength: 2
          })}
      </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Secondary</BodyText>
          ${reactElementToJSXString(SampleAccordion({ variant: 'secondary' }), {
            showDefaultProps: false,
            filterProps: ['arrow', 'border', 'size'],
            maxInlineAttributesLineLength: 2
          })}
           </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Tertiary</BodyText>
          ${reactElementToJSXString(SampleAccordion({ variant: 'tertiary' }), {
            showDefaultProps: false,
            filterProps: ['arrow', 'border', 'size'],
            maxInlineAttributesLineLength: 2
          })}
      </PileCenterDiv>
    </FlexDiv>
  )
}`}
      >
        <FlexDiv style={{ justifyContent: 'space-evenly', width: '100%' }}>
          <PileCenterDiv>
            <BodyText>Primary</BodyText>
            <SampleAccordion variant='primary' />
          </PileCenterDiv>
          <PileCenterDiv>
            <BodyText>Secondary</BodyText>
            <SampleAccordion variant='secondary' />
          </PileCenterDiv>
          <PileCenterDiv>
            <BodyText>Tertiary</BodyText>
            <SampleAccordion variant='tertiary' />
          </PileCenterDiv>
        </FlexDiv>
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
      <DemoableDiv
        alignContent='center'
        code={`import { Accordion } from '@elhub/ds-components'
                    
const Component = () => {
  return (
    <FlexDiv>
      <PileCenterDiv>
        <BodyText>Primary</BodyText>
          ${reactElementToJSXString(SampleAccordion({ arrow: true }), {
            showDefaultProps: false,
            filterProps: ['border', 'size', 'variant'],
            maxInlineAttributesLineLength: 2
          })}
      </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Secondary</BodyText>
          ${reactElementToJSXString(SampleAccordion({ arrow: false }), {
            showDefaultProps: false,
            filterProps: ['border', 'size', 'variant'],
            maxInlineAttributesLineLength: 2
          })}
       </PileCenterDiv>
  
    </FlexDiv>
  )
}`}
      >
        <FlexDiv style={{ justifyContent: 'space-evenly', width: '100%' }}>
          <PileCenterDiv>
            <BodyText>with arrow</BodyText>
            <SampleAccordion arrow />
          </PileCenterDiv>
          <PileCenterDiv>
            <BodyText>without arrow</BodyText>
            <SampleAccordion arrow={false} />
          </PileCenterDiv>
        </FlexDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-border' level='2' spacing>
        Border
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>border</code> prop adds a border through the accordion's header and content.
      </BodyText>
      <DemoableDiv
        alignContent='center'
        code={`import { Accordion } from '@elhub/ds-components'
                    
const Component = () => {
  return (
    <FlexDiv>
      <PileCenterDiv>
        <BodyText>Primary</BodyText>
          ${reactElementToJSXString(SampleAccordion({ variant: 'primary', border: true }), {
            showDefaultProps: false,
            filterProps: ['arrow', 'size', 'variant'],
            maxInlineAttributesLineLength: 2
          })}
      </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Secondary</BodyText>
          ${reactElementToJSXString(SampleAccordion({ variant: 'secondary', border: true }), {
            showDefaultProps: false,
            filterProps: ['arrow', 'size', 'variant'],
            maxInlineAttributesLineLength: 2
          })}
           </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Tertiary</BodyText>
          ${reactElementToJSXString(SampleAccordion({ variant: 'tertiary', border: true }), {
            showDefaultProps: false,
            filterProps: ['arrow', 'size', 'variant'],
            maxInlineAttributesLineLength: 2
          })}
      </PileCenterDiv>
    </FlexDiv>
  )
}`}
      >
        <FlexDiv style={{ justifyContent: 'space-evenly', width: '100%' }}>
          <PileCenterDiv>
            <BodyText>Primary</BodyText>
            <SampleAccordion variant='primary' border />
          </PileCenterDiv>
          <PileCenterDiv>
            <BodyText>Secondary</BodyText>
            <SampleAccordion variant='secondary' border />
          </PileCenterDiv>
          <PileCenterDiv>
            <BodyText>Tertiary</BodyText>
            <SampleAccordion variant='tertiary' border />
          </PileCenterDiv>
        </FlexDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Accordion-sizes' level='2' spacing>
        Sizes
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>size</code> prop can be one of the following 3 values:
      </BodyText>

      <CodeDiv expand={false} spacing>
        export type AccordionSize = 'medium' | 'small' | 'xsmall'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>AccordionSize</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Accordion } from '@elhub/ds-components'
                    
const Component = () => {
  return (
    <FlexDiv style={{justifyContent: 'space-evenly', width: '100%'}}>
      <PileCenterDiv>
        <BodyText>Medium</BodyText>
      ${reactElementToJSXString(SampleAccordion({ size: 'medium' }), {
        showDefaultProps: false,
        filterProps: ['variant']
      })}
      </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Small</BodyText>
      ${reactElementToJSXString(SampleAccordion({ size: 'small' }), {
        showDefaultProps: false,
        filterProps: ['variant']
      })}
       </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Xsmall</BodyText>
        ${reactElementToJSXString(SampleAccordion({ size: 'xsmall' }), {
          showDefaultProps: false,
          filterProps: ['variant']
        })}
    </PileCenterDiv>
   </FlexDiv>
  )
}`}
      >
        <FlexDiv style={{ justifyContent: 'space-evenly', width: '100%' }}>
          <PileCenterDiv>
            <BodyText>Medium</BodyText>
            <SampleAccordion size='medium' />
          </PileCenterDiv>
          <PileCenterDiv>
            <BodyText>Small</BodyText>
            <SampleAccordion size='small' />
          </PileCenterDiv>
          <PileCenterDiv>
            <BodyText>Xsmall</BodyText>
            <SampleAccordion size='xsmall' />
          </PileCenterDiv>
        </FlexDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Accordion-controlled' level='2' spacing>
        Controlling the open state
      </Heading>

      <VerticalSpace />
      <BodyText>
        You can control the expand/collapse state of accordion item(s) from the outside, as follows:
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Accordion } from '@elhub/ds-components'
                    
const Component = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <Panel>
       <Button onClick={() => setOpen(!open)}>Toggle</Button>
        <VerticalSpace/>  
         ${reactElementToJSXString(SampleAccordion({ open }), {
           showDefaultProps: false,
           filterProps: ['size'],
           maxInlineAttributesLineLength: 2
         })}
      </Panel>
    )`}
      >
        <Panel>
          <Button onClick={() => setOpen(!open)}>Toggle</Button>
          <VerticalSpace />
          <SampleAccordion open={open} />
        </Panel>
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

      <DemoableDiv
        alignContent='center'
        code={`import { Accordion } from '@elhub/ds-components'
                    
const Component = () => {
  const [open, setOpen] = useState<number>(1)
  return (
    <Accordion>
      <Accordion.Item open={open === 1}>
        <Accordion.Header onClick={() => setOpen(1)}>
          Recipe ingredients
        </Accordion.Header>
        <Accordion.Content>
          <span>You need these ingredients:</span>
          <ul>
           <li>Flour</li>
           <li>Milk</li>
           <li>Eggs</li>
           <li>Sugar</li>
           <li>Butter</li>
         </ul>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item open={open === 2}>
        <Accordion.Header onClick={() => setOpen(2)}>
          Preparation
        </Accordion.Header>
        <Accordion.Content>
          <ul>
            <li>Add everything in a bowl</li>
            <li>Mix it for 10 min</li>
            <li>Put in a oven for 20 min, 200<sup>o</sup> C</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
    )`}
      >
        <Accordion>
          <Accordion.Item open={open2 === 1}>
            <Accordion.Header onClick={() => setOpen2(1)}>Recipe ingredients</Accordion.Header>
            <Accordion.Content>
              <span>You need these ingredients:</span>
              <ul>
                <li>Flour</li>
                <li>Milk</li>
                <li>Eggs</li>
                <li>Sugar</li>
                <li>Butter</li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item open={open2 === 2}>
            <Accordion.Header onClick={() => setOpen2(2)}>Preparation</Accordion.Header>
            <Accordion.Content>
              <ul>
                <li>Add everything in a bowl</li>
                <li>Mix it for 10 min</li>
                <li>
                  Put in a oven for 20 min, 200<sup>o</sup> C
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
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
