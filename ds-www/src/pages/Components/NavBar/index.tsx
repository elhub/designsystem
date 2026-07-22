import { BodyText, Heading, Link, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { NavBarControlledExample } from './examples/Controlled'
import navBarControlledSource from './examples/Controlled.tsx?raw'
import { NavBarDefaultExample } from './examples/Default'
import navBarDefaultSource from './examples/Default.tsx?raw'
import { NavBarDefaultValueExample } from './examples/DefaultValue'
import navBarDefaultValueSource from './examples/DefaultValue.tsx?raw'
import { NavBarSmallExample } from './examples/Small'
import navBarSmallSource from './examples/Small.tsx?raw'

const ComponentsNavBar: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='navbar' level='1' spacing>
        NavBar
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>NavBar</code> component is a navigation menu that can be placed vertically on a page
        sidebar.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='navbar-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace />
      <BodyText>The default component renders by default with a medium size.</BodyText>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={navBarDefaultSource} codeHighlighter='shiki'>
        <NavBarDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='navbar-size' level='2' spacing>
        Size
      </Heading>
      <VerticalSpace />

      <BodyText>The navigation bar size prop can be one of the following 2 strings:</BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type NavBarSize = 'medium' | 'small'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>NavBarSize</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <DemoableDiv alignContent='center' code={navBarSmallSource} codeHighlighter='shiki'>
        <NavBarSmallExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='navbar-default-value' level='2' spacing>
        Default Value
      </Heading>
      <VerticalSpace />

      <BodyText>
        The navigation bar <code>defaultValue</code> prop sets the default active link (index) upon initial
        render.
      </BodyText>

      <DemoableDiv alignContent='center' code={navBarDefaultValueSource} codeHighlighter='shiki'>
        <NavBarDefaultValueExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='navbar-controlled-value' level='2' spacing>
        Value (Controlled)
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>value</code> prop sets the active link dynamically (index).
      </BodyText>

      <DemoableDiv alignContent='center' code={navBarControlledSource} codeHighlighter='shiki'>
        <NavBarControlledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>
      <VerticalSpace />
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='NavBar-properties' level='3' spacing>
        NavBar props
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>NavBarProps</code> interface extends <code>React.HTMLAttributes&lt;HTMLElement&gt;</code>,
        as the top level uses a <code>nav</code> tag. As such, you can pass{' '}
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
              <code>defaultValue</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>Sets default selected bar link (index)</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onChange</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(value: number) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function when link is clicked</Table.DataCell>
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
              <code>'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets different bar sizes</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>value</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>Sets selected bar link (index)</Table.DataCell>
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

export default ComponentsNavBar
