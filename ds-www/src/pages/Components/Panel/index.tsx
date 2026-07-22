import { BodyText, Heading, Table, Link, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { PanelBackgroundExample } from './examples/Background'
import panelBackgroundSource from './examples/Background.tsx?raw'
import { PanelBorderExample } from './examples/Border'
import panelBorderSource from './examples/Border.tsx?raw'
import { PanelNoPaddingExample } from './examples/NoPadding'
import panelNoPaddingSource from './examples/NoPadding.tsx?raw'

const ComponentsPanel = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='panel' level='1' spacing>
        Panel
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>Panel</code> component is a generic container to provide padding, border or alternative
        background color to a page section.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='panel-border' level='2' spacing>
        Border
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>border</code> props adds a border to the panel.
      </BodyText>

      <DemoableDiv alignContent='center' code={panelBorderSource} codeHighlighter='shiki'>
        <PanelBorderExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='panel-padding' level='2' spacing>
        No padding
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>noPadding</code> props sets padding to 0, so you can do your own layout.
      </BodyText>

      <DemoableDiv alignContent='center' code={panelNoPaddingSource} codeHighlighter='shiki'>
        <PanelNoPaddingExample />
      </DemoableDiv>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='panel-background' level='2' spacing>
        Background
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>background</code> props adds a subtle monochrome transparent background.
      </BodyText>

      <DemoableDiv alignContent='center' code={panelBackgroundSource} codeHighlighter='shiki'>
        <PanelBackgroundExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>PanelProps</code> interface extends <code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code>,
        as the top level component is a <code>Panel</code> component as a <code>div</code>. As such, you can
        pass{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement'>HTMLDivElement</Link>{' '}
        props.
      </BodyText>
      <VerticalSpace />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.DataCell>
              <code>background</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Adds a subtle panel background</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
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
              <code>border</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Adds a panel border</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>noPadding</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Removes panel padding</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsPanel
