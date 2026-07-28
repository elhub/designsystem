import { ToggleGroup, VerticalSpace } from '@elhub/ds-components'

export const ToggleGroupSizesExample = () => {
  return (
    <>
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
    </>
  )
}
