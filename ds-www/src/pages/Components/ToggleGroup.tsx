import { BodyText, Heading, Table, ToggleGroup, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import { IconAlarmBell, IconCalendar, IconWarningTriangle } from '@elhub/ds-icons'
import React from 'react'

const ComponentsToggleGroup = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='togglegroup' level='1' spacing>
        ToggleGroup
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        The <code>ToggleGroup</code> component is a radio-group style component that asks user to choose one
        option, but in a more horizontal style with no need for big labels. Just like the <code>Tabs</code>{' '}
        component, but without the purpose of changing page content.
      </BodyText>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='togglegroup-default' level='2' spacing>
        Default component
      </Heading>

      <BodyText>The default toggle group has a small size</BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { ToggleGroup } from '@elhub/ds-components'

const Component = () => {
  return (
    <ToggleGroup onChange={() => {}}>
      <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
      <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
      <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
    </ToggleGroup>
  )
}`}
      >
        <ToggleGroup type='single' value='' defaultValue='notifications' onChange={() => {}}>
          <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
          <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
          <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
        </ToggleGroup>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='togglegroup-size' level='2' spacing>
        Size
      </Heading>
      <BodyText>
        The size prop can be one of the following 3 strings: <code>small, medium, large</code>
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { ToggleGroup } from '@elhub/ds-components'

const Component = () => {
  return (
    <>
    <ToggleGroup size='large'>
       <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
          <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
          <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
    </ToggleGroup>
    <VerticalSpace/>
     <ToggleGroup size='medium'>
       <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
          <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
          <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
    </ToggleGroup>
    <VerticalSpace/>
    <ToggleGroup size='small'>
         <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
          <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
          <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
    </ToggleGroup>
    </>
  )
}`}
      >
        <ToggleGroup type='single' value='' defaultValue='notifications' onChange={() => {}} size='large'>
          <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
          <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
          <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace />
        <ToggleGroup type='single' value='' defaultValue='notifications' onChange={() => {}} size='medium'>
          <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
          <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
          <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace />
        <ToggleGroup type='single' value='' defaultValue='notifications' onChange={() => {}} size='small'>
          <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
          <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
          <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
        </ToggleGroup>
      </DemoableDiv>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='togglegroup-icons' level='2' spacing>
        Icons
      </Heading>
      <VerticalSpace size='2' />
      <DemoableDiv
        alignContent='center'
        code={`import { ToggleGroup } from '@elhub/ds-components'

const Component = () => {
  return (
    <>
      <ToggleGroup size='large'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar />
          </ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace/>
        <ToggleGroup size='medium'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar />
          </ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace/>
        <ToggleGroup size='small'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar />
          </ToggleGroup.Item>
        </ToggleGroup>
      </>  
  )
}`}
      >
        <ToggleGroup type='single' value='' defaultValue='unread' onChange={() => {}} size='large'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar />
          </ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace />
        <ToggleGroup type='single' value='' defaultValue='unread' onChange={() => {}} size='medium'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar />
          </ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace />
        <ToggleGroup type='single' value='' defaultValue='unread' onChange={() => {}} size='small'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle />
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar />
          </ToggleGroup.Item>
        </ToggleGroup>
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='togglegroup-icons-labels' level='2' spacing>
        Icons and labels
      </Heading>
      <VerticalSpace size='2' />
      <DemoableDiv
        alignContent='center'
        code={`import { ToggleGroup } from '@elhub/ds-components'

const Component = () => {
  return (
    <>
    <ToggleGroup size='large'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell /> Notifications
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle /> Logs
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar /> Calendar
          </ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace/>
        <ToggleGroup size='medium'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell /> Notifications
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle /> Logs
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar /> Calendar
          </ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace/>
        <ToggleGroup size='small'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell /> Notifications
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle /> Logs
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar /> Calendar
          </ToggleGroup.Item>
        </ToggleGroup>
    </>
  )
}`}
      >
        <ToggleGroup type='single' value='' defaultValue='unread' onChange={() => {}} size='large'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell /> Notifications
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle /> Logs
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar /> Calendar
          </ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace />
        <ToggleGroup type='single' value='' defaultValue='unread' onChange={() => {}} size='medium'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell /> Notifications
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle /> Logs
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar /> Calendar
          </ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace />
        <ToggleGroup type='single' value='' defaultValue='unread' onChange={() => {}} size='small'>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell /> Notifications
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle /> Logs
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar /> Calendar
          </ToggleGroup.Item>
        </ToggleGroup>
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='togglegroup-label' level='2' spacing>
        Label
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        Use the <code>label</code> prop to provide a descriptive label for the toggle group. The label is
        displayed above the toggle group and is properly associated with it for accessibility.
      </BodyText>
      <DemoableDiv
        alignContent='center'
        code={`import { ToggleGroup } from '@elhub/ds-components'

const Component = () => {
  return (
    <>
      <ToggleGroup label="View type" size='large'>
        <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
        <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
        <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
      </ToggleGroup>
      <VerticalSpace/>
      <ToggleGroup label="Choose a category" size='medium'>
        <ToggleGroup.Item value='unread'>
          <IconAlarmBell /> Notifications
        </ToggleGroup.Item>
        <ToggleGroup.Item value='read'>
          <IconWarningTriangle /> Logs
        </ToggleGroup.Item>
        <ToggleGroup.Item value='sent'>
          <IconCalendar /> Calendar
        </ToggleGroup.Item>
      </ToggleGroup>
    </>
  )
}`}
      >
        <ToggleGroup
          type='single'
          value=''
          defaultValue='notifications'
          onChange={() => {}}
          label='View type'
          size='large'
        >
          <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
          <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
          <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
        </ToggleGroup>
        <VerticalSpace />
        <ToggleGroup
          type='single'
          value=''
          defaultValue='unread'
          onChange={() => {}}
          label='Choose a category'
          size='medium'
        >
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell /> Notifications
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle /> Logs
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar /> Calendar
          </ToggleGroup.Item>
        </ToggleGroup>
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='togglegroup-multiple' level='2' spacing>
        Multiple
      </Heading>
      <VerticalSpace size='2' />
      <DemoableDiv
        alignContent='center'
        code={`import { ToggleGroup } from '@elhub/ds-components'

const Component = () => {
  return (
    <ToggleGroup type='multiple'>
      <ToggleGroup.Item value='unread'>
          <IconAlarmBell /> Notifications
      </ToggleGroup.Item>
      <ToggleGroup.Item value='read'>
          <IconWarningTriangle/> Logs
      </ToggleGroup.Item>
      <ToggleGroup.Item value='sent'>
        <IconCalendar/> Calendar
      </ToggleGroup.Item>
    </ToggleGroup>
  )
}`}
      >
        <ToggleGroup type='multiple' value={[]} defaultValue={[]} onChange={() => {}}>
          <ToggleGroup.Item value='unread'>
            <IconAlarmBell /> Notifications
          </ToggleGroup.Item>
          <ToggleGroup.Item value='read'>
            <IconWarningTriangle /> Logs
          </ToggleGroup.Item>
          <ToggleGroup.Item value='sent'>
            <IconCalendar /> Calendar
          </ToggleGroup.Item>
        </ToggleGroup>
      </DemoableDiv>
      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='properties-togglegroup' level='2' spacing>
        ToggleGroup
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
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'small' | 'medium' | 'large'</code>
            </Table.DataCell>
            <Table.DataCell>Sets toggle group size</Table.DataCell>
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
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets toggle group value</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
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
            <Table.DataCell>Sets toggle group default value</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>label</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>React.ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>Label describing the toggle group, displayed above the options</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>type</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'single' | 'multiple'</code>
            </Table.DataCell>
            <Table.DataCell>Allow multiple group label selections</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onChange</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(value: string) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback for selected toggle</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='properties-togglegroup-item' level='2' spacing>
        ToggleGroup.Item
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
            <Table.DataCell>Sets toggle group item value</Table.DataCell>
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

export default ComponentsToggleGroup
