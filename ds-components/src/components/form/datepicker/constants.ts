import { type DatepickerSelectMode } from './Datepicker'

export const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const MONTHS_NORWEGIAN: string[] = [
  'Januar',
  'Februar',
  'Mars',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Desember'
]

export const DATE_FORMATS: Record<DatepickerSelectMode, string> = {
  dayWithDayname: 'EEEE, dd.MM.yyyy',
  day: 'dd.MM.yyyy',
  month: 'MMMM yyyy',
  year: 'yyyy'
}
