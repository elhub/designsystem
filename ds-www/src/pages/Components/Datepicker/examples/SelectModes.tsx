import { BodyText, Datepicker, VerticalSpace } from '@elhub/ds-components'
import { useState } from 'react'

export const DatepickerSelectModesExample = () => {
  const [selectedDayDate, setSelectedDayDate] = useState<Date | null>(new Date())
  const [selectedMonthDate, setSelectedMonthDate] = useState<Date | null>(new Date())
  const [selectedYearDate, setSelectedYearDate] = useState<Date | null>(new Date())

  return (
    <>
      <div>
        {/* Day Mode */}
        <Datepicker selected={selectedDayDate} onSelect={setSelectedDayDate} selectMode='day' />
        <BodyText>Selected date: {selectedDayDate?.toLocaleString()}</BodyText>
        <VerticalSpace size='1' />

        {/* Month Mode */}
        <Datepicker selected={selectedMonthDate} onSelect={setSelectedMonthDate} selectMode='month' />
        <BodyText>
          Selected month: {selectedMonthDate?.toLocaleString('default', { month: 'long' })},{' '}
          {selectedMonthDate?.getFullYear()}
        </BodyText>
        <VerticalSpace size='1' />

        {/* Year Mode */}
        <Datepicker selected={selectedYearDate} onSelect={setSelectedYearDate} selectMode='year' />
        <BodyText>Selected year: {selectedYearDate?.getFullYear()}</BodyText>
        <VerticalSpace size='1' />
      </div>
    </>
  )
}
