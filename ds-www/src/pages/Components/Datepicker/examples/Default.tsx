import { Datepicker, FormItem, FormItemLabel } from '@elhub/ds-components'
import { useState } from 'react'

export const DatepickerDefaultExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  return (
    <>
      <FormItem>
        <FormItemLabel>Select Date</FormItemLabel>
        <Datepicker selected={selectedDate} onSelect={setSelectedDate} />
      </FormItem>
    </>
  )
}
