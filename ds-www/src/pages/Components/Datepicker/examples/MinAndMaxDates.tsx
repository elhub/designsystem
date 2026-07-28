import { Datepicker, FormItem, FormItemLabel } from '@elhub/ds-components'
import { useState } from 'react'

export const DatepickerMinAndMaxDatesExample = () => {
  const [selectedDate] = useState<Date | null>(new Date())

  return (
    <>
      <FormItem>
        <FormItemLabel>Cannot select dates after today, nor later than 7 days</FormItemLabel>
        <Datepicker
          minDate={new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000)}
          maxDate={new Date()}
          selected={selectedDate}
        />
      </FormItem>
    </>
  )
}
