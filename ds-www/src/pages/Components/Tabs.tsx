import { Heading, VerticalSpace, Table, BodyText, Tabs } from '@elhub/ds-components'
import { IconInformationCircleOutlined, IconWarningCircle, IconQuestionCircle } from '@elhub/ds-icons'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsTabs = () => {
  const [tabValue, setTabValue] = useState<string>('email')
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
      <DemoableDiv
        alignContent='center'
        code={`import { Tabs } from '@elhub/ds-components'

const Component = () => {
  return (
    <Tabs defaultValue='email'>
      <Tabs.List>
        <Tabs.Tab value='email' label='Emails' />
        <Tabs.Tab value='read' label='Read' />
        <Tabs.Tab value='unread' label='Unread' />
      </Tabs.List>
      <Tabs.Panel value='email'>
        Panel for Emails
      </Tabs.Panel>
      <Tabs.Panel value='read'>
        Panel for Read emails
      </Tabs.Panel>
      <Tabs.Panel value='unread'>
        Panel for Unread emails
      </Tabs.Panel>
    </Tabs>
  )
}`}
      >
        <Tabs defaultValue='email'>
          <Tabs.List>
            <Tabs.Tab value='email' label='Emails' />
            <Tabs.Tab value='read' label='Read' />
            <Tabs.Tab value='unread' label='Unread' />
          </Tabs.List>
          <Tabs.Panel value='email'>Panel for Emails</Tabs.Panel>
          <Tabs.Panel value='read'>Panel for Read emails</Tabs.Panel>
          <Tabs.Panel value='unread'>Panel for Unread emails</Tabs.Panel>
        </Tabs>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Tabs-controlled' level='2'>
        Controlled
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        Control the tab values with <code>onChange</code> and <code>value</code> props
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Tabs } from '@elhub/ds-components'

const [tabValue, setTabValue] = useState<string>('email') 
const Component = () => {
  return (
    <Tabs 
      value={tabValue}
      onChange={setValue} 
    >
      <Tabs.List>
        <Tabs.Tab value='email' label='Emails' />
        <Tabs.Tab value='read' label='Read' />
        <Tabs.Tab value='unread' label='Unread' />
      </Tabs.List>
      <Tabs.Panel value='email'>
          Panel for Emails
      </Tabs.Panel>
      <Tabs.Panel value='read'>
          Panel for Read emails
      </Tabs.Panel>
      <Tabs.Panel value='unread'>
          Panel for Unread emails
      </Tabs.Panel>
    </Tabs>
  )
}`}
      >
        <Tabs value={tabValue} onChange={setTabValue}>
          <Tabs.List>
            <Tabs.Tab value='email' label='Emails' />
            <Tabs.Tab value='read' label='Read' />
            <Tabs.Tab value='unread' label='Unread' />
          </Tabs.List>
          <Tabs.Panel value='email'>Panel for Emails</Tabs.Panel>
          <Tabs.Panel value='read'>Panel for Read emails</Tabs.Panel>
          <Tabs.Panel value='unread'>Panel for Unread emails</Tabs.Panel>
        </Tabs>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Tabs-icons' level='2'>
        Using icons
      </Heading>
      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Tabs } from '@elhub/ds-components'

const Component = () => {
  return (
    <Tabs defaultValue='email'>
      <Tabs.List>
        <Tabs.Tab
          value='email'
          iconPosition='left'
          label='Emails'
          icon={<IconInformationCircleOutlined size='1.5rem' title='Emails' />}
        />
        <Tabs.Tab
          value='read'
          iconPosition='left'
          label='Read'
          icon={<IconWarningCircle size='1.5rem' title='Read emails' />}
        />
        <Tabs.Tab
          value='unread'
          iconPosition='left'
          label='Unread'
          icon={<IconQuestionCircle size='1.5rem' title='Unread emails' />}
        />
      </Tabs.List>
      <Tabs.Panel value='email'>
          Panel for Emails
      </Tabs.Panel>
      <Tabs.Panel value='read'>
          Panel for Read emails
      </Tabs.Panel>
      <Tabs.Panel value='unread'>
          Panel for Unread emails
      </Tabs.Panel>
    </Tabs>
  )
}`}
      >
        <Tabs defaultValue='email'>
          <Tabs.List>
            <Tabs.Tab
              value='email'
              iconPosition='left'
              label='Emails'
              icon={<IconInformationCircleOutlined size='medium' title='Emails' />}
            />
            <Tabs.Tab
              value='read'
              iconPosition='left'
              label='Read'
              icon={<IconWarningCircle size='medium' title='Read emails' />}
            />
            <Tabs.Tab
              value='unread'
              iconPosition='left'
              label='Unread'
              icon={<IconQuestionCircle size='medium' title='Unread emails' />}
            />
          </Tabs.List>
          <Tabs.Panel value='email'>Panel for Emails</Tabs.Panel>
          <Tabs.Panel value='read'>Panel for Read emails</Tabs.Panel>
          <Tabs.Panel value='unread'>Panel for Unread emails</Tabs.Panel>
        </Tabs>
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
      <DemoableDiv
        alignContent='center'
        code={`import { Tabs } from '@elhub/ds-components'

const Component = () => {
  return (
    <Tabs defaultValue='email' selectionFollowsFocus>
      <Tabs.List>
        <Tabs.Tab value='email' label='Emails' />
        <Tabs.Tab value='read' label='Read' />
        <Tabs.Tab value='unread' label='Unread' />
      </Tabs.List>
      <Tabs.Panel value='email'>
        Panel for Emails
      </Tabs.Panel>
      <Tabs.Panel value='read'>
        Panel for Read emails
      </Tabs.Panel>
      <Tabs.Panel value='unread'>
        Panel for Unread emails
      </Tabs.Panel>
    </Tabs>
  )
}`}
      >
        <Tabs defaultValue='email' selectionFollowsFocus>
          <Tabs.List>
            <Tabs.Tab value='email' label='Emails' />
            <Tabs.Tab value='read' label='Read' />
            <Tabs.Tab value='unread' label='Unread' />
          </Tabs.List>
          <Tabs.Panel value='email'>Panel for Emails</Tabs.Panel>
          <Tabs.Panel value='read'>Panel for Read emails</Tabs.Panel>
          <Tabs.Panel value='unread'>Panel for Unread emails</Tabs.Panel>
        </Tabs>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tabs-loop' level='2'>
        Loop
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        Set <code>loop</code> prop to false if you want the tabs to not loop around.
      </BodyText>
      <DemoableDiv
        alignContent='center'
        code={`import { Tabs } from '@elhub/ds-components'

const Component = () => {
  return (
    <Tabs defaultValue='email'>
      <Tabs.List loop={false}>
        <Tabs.Tab value='email' label='Emails' />
        <Tabs.Tab value='read' label='Read' />
        <Tabs.Tab value='unread' label='Unread' />
      </Tabs.List>
      <Tabs.Panel value='email'>
        Panel for Emails
      </Tabs.Panel>
      <Tabs.Panel value='read'>
        Panel for Read emails
      </Tabs.Panel>
      <Tabs.Panel value='unread'>
        Panel for Unread emails
      </Tabs.Panel>
    </Tabs>
  )
}`}
      >
        <Tabs defaultValue='email'>
          <Tabs.List loop={false}>
            <Tabs.Tab value='email' label='Emails' />
            <Tabs.Tab value='read' label='Read' />
            <Tabs.Tab value='unread' label='Unread' />
          </Tabs.List>
          <Tabs.Panel value='email'>Panel for Emails</Tabs.Panel>
          <Tabs.Panel value='read'>Panel for Read emails</Tabs.Panel>
          <Tabs.Panel value='unread'>Panel for Unread emails</Tabs.Panel>
        </Tabs>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='Tabs-disabled' level='2'>
        Disabled
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        Use the <code>disabled</code> prop on the tabs you want to be uninteractable.
      </BodyText>
      <DemoableDiv
        alignContent='center'
        code={`import { Tabs } from '@elhub/ds-components'

const Component = () => {
  return (
    <Tabs defaultValue='email'>
      <Tabs.List>
        <Tabs.Tab value='email' label='Emails' />
        <Tabs.Tab value='read' label='Read' disabled={true} />
        <Tabs.Tab value='unread' label='Unread' disabled={true} />
      </Tabs.List>
      <Tabs.Panel value='email'>Panel for Emails</Tabs.Panel>
      <Tabs.Panel value='read'>Panel for Read emails</Tabs.Panel>
      <Tabs.Panel value='unread'>Panel for Unread emails</Tabs.Panel>
    </Tabs>
  )
}`}
      >
        <Tabs defaultValue='email'>
          <Tabs.List>
            <Tabs.Tab value='email' label='Emails' />
            <Tabs.Tab value='read' label='Read' disabled={true} />
            <Tabs.Tab value='unread' label='Unread' disabled={true} />
          </Tabs.List>
          <Tabs.Panel value='email'>Panel for Emails</Tabs.Panel>
          <Tabs.Panel value='read'>Panel for Read emails</Tabs.Panel>
          <Tabs.Panel value='unread'>Panel for Unread emails</Tabs.Panel>
        </Tabs>
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
