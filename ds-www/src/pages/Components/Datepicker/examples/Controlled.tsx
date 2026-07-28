import { Datepicker, FormItem, FormItemLabel } from '@elhub/ds-components'
import { useState } from 'react'

export const DatepickerControlledExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  return (
    <>
      <FormItem error={!selectedDate ? 'Please select a date' : undefined}>
        <FormItemLabel>Select a Date</FormItemLabel>
        <Datepicker selected={selectedDate} onChange={setSelectedDate} />
      </FormItem>
    </>
  )
}
