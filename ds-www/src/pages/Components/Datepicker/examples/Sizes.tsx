import { Datepicker, FormItem, FormItemLabel } from '@elhub/ds-components'
import { useState } from 'react'

export const DatepickerSizesExample = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  return (
    <>
      <div style={{ display: 'flex', gap: '16px' }}>
        <FormItem size='small'>
          <FormItemLabel>Small</FormItemLabel>
          <Datepicker selected={selectedDate} onSelect={setSelectedDate} />
        </FormItem>
        <FormItem size='medium'>
          <FormItemLabel>Medium</FormItemLabel>
          <Datepicker selected={selectedDate} onSelect={setSelectedDate} />
        </FormItem>
        <FormItem size='large'>
          <FormItemLabel>Large</FormItemLabel>
          <Datepicker selected={selectedDate} onSelect={setSelectedDate} />
        </FormItem>
      </div>
    </>
  )
}
