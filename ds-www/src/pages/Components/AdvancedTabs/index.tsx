import { Alert, BodyText, Heading, Link, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import advancedTabsDefaultSource from './examples/Default.tsx?raw'
import { AdvancedTabsDefaultExample } from './examples/Default'
import advancedTabsCustomizableSource from './examples/Customizable.tsx?raw'
import { AdvancedTabsCustomizableExample } from './examples/Customizable'
import { TabsSelectionFollowsFocusExample } from './examples/SelectionFollowsFocus'
import tabsSelectionFollowsFocusSource from './examples/SelectionFollowsFocus.tsx?raw'
import advancedTabsControlledExampleSource from './examples/Controlled.tsx?raw'
import { AdvancedTabsControlledExample } from './examples/Controlled'

const ComponentsAdvancedTabs = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Tabs' level='1'>
        Advanced Tabs
      </Heading>
      <BodyText>
        <code>AdvancedTabs</code> let users switch between related views, where each tab summarises its own
        content, for example a key figure and a status. Use them when the tabs themselves carry information,
        such as categories in a dashboard.
      </BodyText>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Tabs-default' level='2'>
        Default component
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        Each tab shows a label, a main value with a short description and an optional status, so users can
        compare the categories at a glance before opening one. The active tab merges with the panel below it.
      </BodyText>
      <DemoableDiv alignContent='center' code={advancedTabsDefaultSource} codeHighlighter='shiki'>
        <AdvancedTabsDefaultExample />
      </DemoableDiv>
      <Alert>
        Pass <code>label</code>, <code>status</code>, <code>statusLabel</code>, <code>heading</code>,{' '}
        <code>subheading</code> and <code>detail</code> to <code>AdvancedTabs.Tab</code> for the standard
        layout, and set <code>defaultValue</code> on <code>AdvancedTabs</code> when the tabs are not
        controlled, otherwise no panel is rendered. Use <code>fit='container'</code> on a table to make it
        fill the panel. See <Link href='#Tabs-flexible-content'>Flexible tab content</Link> for other layouts.
      </Alert>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Tabs-flexible-content' level='2'>
        Flexible tab content
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        All summary props are optional, so use only the ones you need. For other layouts, pass your own
        content as children instead, or combine both to add content below the summary. Tabs in the same list
        usually look best with the same layout.
      </BodyText>
      <DemoableDiv alignContent='center' code={advancedTabsCustomizableSource} codeHighlighter='shiki'>
        <AdvancedTabsCustomizableExample />
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Tabs-controlled' level='2'>
        Controlled
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        Control the active tab with the <code>value</code> and <code>onChange</code> props when your code
        needs to know or change which tab is open, for example to sync it with the URL or switch tabs from
        elsewhere on the page. The buttons below change the tab from outside the component.
      </BodyText>
      <DemoableDiv alignContent='center' code={advancedTabsControlledExampleSource} codeHighlighter='shiki'>
        <AdvancedTabsControlledExample />
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Tabs-selectionFollowsFocus' level='2'>
        Selection follows focus
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        Set <code>selectionFollowsFocus</code> prop if you want the selection to follow focus, or in other
        words, if you change active tab with keyboard arrow keys, the panels also change accordingly.
      </BodyText>
      <DemoableDiv alignContent='center' code={tabsSelectionFollowsFocusSource} codeHighlighter='shiki'>
        <TabsSelectionFollowsFocusExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='large' id='properties' level='2'>
        Props table
      </Heading>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='properties-tabs' level='2'>
        AdvancedTabs
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
              <code>value</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Controlled selected tab value. Use together with onChange</Table.DataCell>
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
        </Table.Body>
      </Table>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='properties-advanced-tabs-list' level='2'>
        AdvancedTabs.List
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
        AdvancedTabs.Panel
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
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />

      <Heading className='toc' size='medium' id='properties-tabs-tab' level='2'>
        AdvancedTabs.Tab
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
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
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
          <Table.Row>
            <Table.DataCell>
              <code>label</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Small text above the heading, e.g. the category name</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>status</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'success' | 'warning' | 'error'</code>
            </Table.DataCell>
            <Table.DataCell>
              Shows a colour-coded status tag next to the label. Hidden when not set
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>statusLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Text in the status tag. Required when status is set</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>heading</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              Main value of the tab, highlighted when the tab is hovered, pressed or active
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>subheading</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Text directly below the heading</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>detail</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Small text at the bottom, e.g. a count or date</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>
              Custom tab content. Rendered after the summary when summary props are also set
            </Table.DataCell>
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

export default ComponentsAdvancedTabs
