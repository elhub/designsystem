import { ToggleGroup, VerticalSpace } from '@elhub/ds-components'
import { IconAlarmBell, IconCalendar, IconWarningTriangle } from '@elhub/ds-icons'

export const ToggleGroupIconsExample = () => {
  return (
    <>
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
    </>
  )
}
