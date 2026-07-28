import { Datepicker, FormItem, FormItemLabel, VerticalSpace } from '@elhub/ds-components'
import { useState } from 'react'

export const DatepickerDisabledAndErrorExample = () => {
  const [selectedDate] = useState<Date | null>(new Date())

  return (
    <>
      <FormItem inputProps={{ disabled: true }}>
        <FormItemLabel>Disabled Datepicker</FormItemLabel>
        <Datepicker selected={selectedDate} />
      </FormItem>
      <VerticalSpace size='1' />
      <FormItem error='Invalid date'>
        <FormItemLabel>Error Datepicker</FormItemLabel>
        <Datepicker selected={selectedDate} />
      </FormItem>
    </>
  )
}
