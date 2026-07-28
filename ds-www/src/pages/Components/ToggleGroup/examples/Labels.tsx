import { ToggleGroup, VerticalSpace } from '@elhub/ds-components'
import { IconAlarmBell, IconCalendar, IconWarningTriangle } from '@elhub/ds-icons'

export const ToggleGroupLabelsExample = () => {
  return (
    <>
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
    </>
  )
}
