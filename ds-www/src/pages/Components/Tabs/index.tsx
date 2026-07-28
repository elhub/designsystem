import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import { TabsControlledExample } from './examples/Controlled'
import tabsControlledSource from './examples/Controlled.tsx?raw'
import { TabsDefaultExample } from './examples/Default'
import tabsDefaultSource from './examples/Default.tsx?raw'
import { TabsDisabledExample } from './examples/Disabled'
import tabsDisabledSource from './examples/Disabled.tsx?raw'
import { TabsIconsExample } from './examples/Icons'
import tabsIconsSource from './examples/Icons.tsx?raw'
import { TabsNoLoopExample } from './examples/NoLoop'
import tabsNoLoopSource from './examples/NoLoop.tsx?raw'
import { TabsSelectionFollowsFocusExample } from './examples/SelectionFollowsFocus'
import tabsSelectionFollowsFocusSource from './examples/SelectionFollowsFocus.tsx?raw'

const ComponentsTabs = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Tabs' level='1'>
        Tabs
      </Heading>
      <BodyText>
        <code>Tabs</code> make it easy to switch between different views.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tabs-default' level='2'>
        Default component
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        If you are not controlling the tabs, at least pass a <code>defaultValue</code> prop, otherwise no
        panel will be rendered.
      </BodyText>
      <DemoableDiv alignContent='center' code={tabsDefaultSource} codeHighlighter='shiki'>
        <TabsDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Tabs-controlled' level='2'>
        Controlled
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        Control the tab values with <code>onChange</code> and <code>value</code> props
      </BodyText>

      <DemoableDiv alignContent='center' code={tabsControlledSource} codeHighlighter='shiki'>
        <TabsControlledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Tabs-icons' level='2'>
        Using icons
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv alignContent='center' code={tabsIconsSource} codeHighlighter='shiki'>
        <TabsIconsExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tabs-selectionFollowsFocus' level='2'>
        Selection follows focus
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        Set <code>defaultValue</code> prop if you want the selection to follow focus, or in other words, if
        you change active tab with keyboard arrow keys, the panels also change accordingly.
      </BodyText>
      <DemoableDiv alignContent='center' code={tabsSelectionFollowsFocusSource} codeHighlighter='shiki'>
        <TabsSelectionFollowsFocusExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tabs-loop' level='2'>
        Loop
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        Set <code>loop</code> prop to false if you want the tabs to not loop around.
      </BodyText>
      <DemoableDiv alignContent='center' code={tabsNoLoopSource} codeHighlighter='shiki'>
        <TabsNoLoopExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tabs-disabled' level='2'>
        Disabled
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        Use the <code>disabled</code> prop on the tabs you want to be uninteractable.
      </BodyText>
      <DemoableDiv alignContent='center' code={tabsDisabledSource} codeHighlighter='shiki'>
        <TabsDisabledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='large' id='properties' level='2'>
        Props table
      </Heading>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='properties-tabs' level='2'>
        Tabs
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
              <code>value</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets tab value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>defaultValue</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets default tab value</Table.DataCell>
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
              <code>(value: string) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback when tabs change</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>selectionFollowsFocus</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set if changing tab focus also selection</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>disabled</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Disables the tab</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='properties-tabs-list' level='2'>
        Tabs.List
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
              <code>loop</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Loops back to start when navigating past last item</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='properties-tabs-panel' level='2'>
        Tabs.Panel
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
              <code>value</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets tab panel value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>noPadding</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Removes padding from tab panel</Table.DataCell>
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

export default ComponentsTabs
