import { ToggleGroup } from '@elhub/ds-components'
import { IconAlarmBell, IconCalendar, IconWarningTriangle } from '@elhub/ds-icons'

export const ToggleGroupMultipleExample = () => {
  return (
    <>
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
    </>
  )
}
