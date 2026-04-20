import React from 'react'
import { IconChevronLeft, IconChevronRight } from '@elhub/ds-icons'
import { BodyText } from 'components/typography'
import { Select, SelectContent, SelectItem } from 'components/form/select'
import { range } from 'lodash'
import { getMonth, getYear } from 'date-fns'
import { MONTHS, MONTHS_NORWEGIAN } from './constants'
import { getVisibleYearsPeriod } from './helpers'
import { type DatepickerSelectMode } from './Datepicker'
import { type ReactDatePickerCustomHeaderProps } from 'react-datepicker'

const getTitle = (
  date: Date,
  selectMode: DatepickerSelectMode,
  locale: string,
  startYear: number,
  endYear: number
): string => {
  if (selectMode === 'year') {
    return `${startYear} - ${endYear}`
  }

  if (selectMode === 'month') {
    return getYear(date).toString()
  }

  const localizedMonths = getLocalizedMonths(locale)
  return `${localizedMonths[getMonth(date)]} ${getYear(date)}`
}

const getLocalizedMonths = (locale: string): string[] => {
  return locale === 'nb' || locale === 'nn' ? MONTHS_NORWEGIAN : MONTHS
}

interface DatePickerHeaderProps extends ReactDatePickerCustomHeaderProps {
  selectMode: DatepickerSelectMode
  locale: string
  minDate?: Date | null
  maxDate?: Date | null
}

const DatepickerHeader: React.FC<DatePickerHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  changeMonth,
  changeYear,
  increaseYear,
  decreaseYear,
  selectMode,
  locale,
  minDate,
  maxDate
}) => {
  const isDayMode = selectMode.startsWith('day')
  const isYearMode = selectMode === 'year'
  const isMonthMode = selectMode === 'month'

  // fallback to 10 years before current year and 3 years after current year if minDate and maxDate are not provided
  const visibleYears: number[] = range(
    minDate?.getFullYear() ?? getYear(new Date()) - 10,
    (maxDate?.getFullYear() ?? getYear(new Date()) + 3) + 1
  )

  // we are showing 12 years at a time
  const yearRangeSize = 12
  const { startYear, endYear } = getVisibleYearsPeriod(getYear(date), yearRangeSize)
  const title = getTitle(date, selectMode, locale, startYear, endYear)

  const handlePrevious = (): void => {
    if (isYearMode) {
      changeYear(getYear(date) - yearRangeSize)
    } else if (isMonthMode) {
      decreaseYear()
    } else {
      decreaseMonth()
    }
  }

  const handleNext = (): void => {
    if (isYearMode) {
      changeYear(getYear(date) + yearRangeSize)
    } else if (isMonthMode) {
      increaseYear()
    } else {
      increaseMonth()
    }
  }

  const localizedMonths = getLocalizedMonths(locale)

  const handleMonthChange = (month: string): void => {
    const monthIndex = localizedMonths.indexOf(month)
    changeMonth(monthIndex)
  }

  const handleYearChange = (year: string): void => {
    changeYear(parseInt(year, 10))
  }

  return (
    <div className='eds-datepicker__header'>
      <div className='eds-datepicker__arrow-container'>
        <button
          type='button'
          className='eds-datepicker__header--arrow'
          onClick={handlePrevious}
          aria-label='Previous'
        >
          <IconChevronLeft size='xsmall' />
        </button>

        <BodyText weight='bold' size='small'>
          {title}
        </BodyText>

        <button
          type='button'
          className='eds-datepicker__header--arrow'
          onClick={handleNext}
          aria-label='Next'
        >
          <IconChevronRight size='xsmall' />
        </button>
      </div>

      {isDayMode && (
        <div className='eds-datepicker__year-month'>
          <Select
            className='eds-datepicker__select-month'
            size='medium'
            error={false}
            placeholder='Month'
            value={localizedMonths[getMonth(date)]}
            defaultValue={localizedMonths[getMonth(date)]}
            onValueChange={handleMonthChange}
          >
            <SelectContent>
              {localizedMonths.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            className='eds-datepicker__select-year'
            placeholder='Year'
            size='medium'
            error={false}
            value={getYear(date).toString()}
            defaultValue={getYear(date).toString()}
            onValueChange={handleYearChange}
          >
            <SelectContent className='eds-datepicker__year-select-content'>
              {visibleYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  )
}

DatepickerHeader.displayName = 'DatePickerHeader'
export default DatepickerHeader
