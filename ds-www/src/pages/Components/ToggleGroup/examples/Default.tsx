import { ToggleGroup } from '@elhub/ds-components'

export const ToggleGroupDefaultExample = () => {
  return (
    <>
      <ToggleGroup type='single' value='' defaultValue='notifications' onChange={() => {}}>
        <ToggleGroup.Item value='notifications'>Notifications</ToggleGroup.Item>
        <ToggleGroup.Item value='logs'>Logs</ToggleGroup.Item>
        <ToggleGroup.Item value='calendar'>Calendar</ToggleGroup.Item>
      </ToggleGroup>
    </>
  )
}
