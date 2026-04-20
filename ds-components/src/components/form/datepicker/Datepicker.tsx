import React, { forwardRef, useState, useEffect, useCallback, useMemo } from 'react'
import {
  default as ReactDatePicker,
  type DatePickerProps as ReactDatePickerProps,
  registerLocale,
  setDefaultLocale
} from 'react-datepicker'
import { default as TextField } from 'components/form/TextField'
import { IconCalendar, IconChevronLeft, IconChevronRight } from '@elhub/ds-icons'
import { BodyText } from 'components/typography'
import { Button } from 'components/button'
import {
  addDays,
  addMonths,
  addYears,
  isValid,
  subDays,
  subMonths,
  subYears,
  isAfter,
  isBefore
} from 'date-fns'

import nb from 'date-fns/locale/nb'
import enGb from 'date-fns/locale/en-GB'
import nn from 'date-fns/locale/nn'

import 'react-datepicker/dist/react-datepicker.min.css'

import DatepickerHeader from './DatepickerHeader'
import { DATE_FORMATS } from './constants'
import cl from 'clsx'
import { useFormItemContext } from '../form-item/useFormItemContext'
import { type FormItemSize } from '../form-item'

export type DatepickerSelectMode = 'dayWithDayname' | 'day' | 'month' | 'year'

export type DatepickerProps = Omit<
  ReactDatePickerProps,
  | 'onChange'
  | 'selectsRange'
  | 'selectsMultiple'
  | 'selected'
  | 'maxDate'
  | 'minDate'
  | 'showMonthYearDropdown'
> & {
  onChange?: (date: Date | null) => void
  locale?: string
  size?: FormItemSize
  error?: React.ReactNode
  selectMode?: DatepickerSelectMode
  selected?: Date | null
  maxDate?: Date
  minDate?: Date
  navigateButtons?: boolean
  fixedPopperPosition?: boolean
}
// Helper function to render cell content
const renderCellContent = (day: number | string): React.ReactNode => (
  <BodyText className='eds-datepicker__cell' weight='bold' size='small'>
    {day}
  </BodyText>
)

/**
 * Registers the available locales for the DatePicker.
 */
const registerLocales = (): void => {
  // @ts-expect-error typings not complete for locale
  registerLocale('nb', nb)
  // @ts-expect-error typings not complete for locale
  registerLocale('en', enGb)
  // @ts-expect-error typings not complete for locale
  registerLocale('nn', nn)
}

const getIconColor = (error: boolean, disabled: boolean): string => {
  if (error) {
    return 'var(--eds-semantic-text-error)'
  }
  return disabled ? 'var(--eds-semantic-text-disabled)' : 'inherit'
}

// function to get the x offset for the popper based on the select mode (the width of the Datepicker)
const getXOffset = (selectMode: DatepickerSelectMode, fixedPosition: boolean): number => {
  if (fixedPosition) return 0
  switch (selectMode) {
    case 'day':
      return 40
    case 'month':
      return 36
    case 'year':
      return 16
    case 'dayWithDayname':
      return 0
  }
}

/**
 * Main Datepicker component.
 * @param props - Props for the Datepicker.
 * @param ref - Ref forwarded to the TextField input.
 * @returns A React element representing the Datepicker.
 */
const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>((props, ref) => {
  const {
    locale = 'en',
    size,
    error,
    disabled,
    popperPlacement,
    maxDate,
    onChange,
    minDate,
    selected,
    selectMode = 'day',
    navigateButtons = true,
    onSelect,
    fixedPopperPosition = false,
    ...rest
  } = props

  // Register locales once when the component mounts or locale changes
  useEffect((): void => {
    registerLocales()
    setDefaultLocale(locale)
  }, [locale])

  const [selectedDate, setSelectedDate] = useState<Date | null | undefined>(selected)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setSelectedDate(selected)
  }, [selected])

  const {
    size: formItemSize,
    error: { hasError: formItemError } = {},
    inputProps: { disabled: formItemDisabled } = {}
  } = useFormItemContext()

  const dateFormat: string = DATE_FORMATS[selectMode]

  /**
   * Handles date selection from the DatePicker.
   * @param date - The newly selected date.
   * @param event - The event that triggered the selection.
   */
  const handleDateSelected = (
    date: Date | null,
    event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement> | undefined
  ): void => {
    setSelectedDate(date)
    if (onSelect && date !== null) {
      onSelect(date, event)
    }
    setIsOpen(false)
  }

  /**
   * Navigates the date forward or backward based on the direction.
   * @param direction - The direction to navigate ('prev' or 'next').
   */
  const navigateDate = useCallback(
    (direction: 'prev' | 'next', event: React.MouseEvent<HTMLButtonElement>): void => {
      if (!selectedDate || !selectMode) return
      const newDate = generateNewDate(selectedDate, direction, selectMode)
      handleDateSelected(newDate, event)
    },
    [selectedDate, selectMode]
  )

  const generateNewDate = (newDate: Date, direction: 'prev' | 'next', mode: DatepickerSelectMode): Date => {
    switch (mode) {
      case 'day':
      case 'dayWithDayname':
        return direction === 'prev' ? subDays(newDate, 1) : addDays(newDate, 1)
      case 'month':
        return direction === 'prev' ? subMonths(newDate, 1) : addMonths(newDate, 1)
      case 'year':
        return direction === 'prev' ? subYears(newDate, 1) : addYears(newDate, 1)
    }
  }

  const disableForwardButton = useMemo(
    () =>
      maxDate && selectedDate ? isAfter(generateNewDate(selectedDate, 'next', selectMode), maxDate) : false,
    [selectedDate, selectMode, maxDate]
  )

  const disableBackButton = useMemo(
    () =>
      minDate && selectedDate ? isBefore(generateNewDate(selectedDate, 'prev', selectMode), minDate) : false,
    [selectedDate, minDate]
  )

  const _size = size ?? formItemSize
  const _disabled = disabled || formItemDisabled
  const _error = error || formItemError

  return (
    <div className={cl('eds-datepicker', `eds-datepicker--${_size}`)}>
      <div className={cl('eds-datepicker__container', `eds-datepicker__container--${selectMode}`)}>
        {navigateButtons && (
          <Button
            type='button'
            className={cl(
              'eds-datepicker__chevron-button',
              'eds-datepicker__chevron-button--left',
              `eds-datepicker__chevron-button--${_size}`,
              _error && 'eds-datepicker__chevron-button--error'
            )}
            icon={IconChevronLeft}
            variant='tertiary'
            disabled={_disabled || disableBackButton}
            size={_size}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              navigateDate('prev', event)
            }}
            aria-label='Previous'
          />
        )}
        <ReactDatePicker
          selected={selectedDate}
          onSelect={handleDateSelected}
          onChange={(
            date: Date | Date[] | null,
            event?: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>
          ) => {
            const actualDate = Array.isArray(date) ? date[0] : date
            if (isValid(date)) {
              handleDateSelected(actualDate, event)
            }
            onChange?.(actualDate)
          }}
          dateFormat={dateFormat}
          showPopperArrow={false}
          disabled={_disabled}
          popperProps={
            fixedPopperPosition
              ? {
                  strategy: 'fixed',
                  placement: 'bottom-start'
                }
              : undefined
          }
          popperModifiers={[
            {
              name: 'changeOffset',
              fn: (state) => {
                return {
                  ...state,
                  x: state.x + getXOffset(selectMode, fixedPopperPosition),
                  // Move the popper up if there is an error-label, otherwise move it up slightly
                  y: _error ? state.y - 32 : state.y - 4
                }
              }
            }
          ]}
          onCalendarOpen={() => {
            setIsOpen(true)
          }}
          onCalendarClose={() => {
            setIsOpen(false)
          }}
          onClickOutside={() => setIsOpen(false)}
          open={isOpen}
          customInput={
            <TextField
              ref={ref}
              disabled={_disabled}
              size={_size}
              unit={
                <IconCalendar
                  size={_size === 'small' ? 'xsmall' : 'small'}
                  className='eds-datepicker__calendar-icon'
                  color={getIconColor(!!_error, !!_disabled)}
                  onClick={() => {
                    setIsOpen(!isOpen)
                  }}
                />
              }
            />
          }
          showMonthYearPicker={selectMode === 'month'}
          showYearPicker={selectMode === 'year'}
          renderCustomHeader={(headerProps) => (
            <DatepickerHeader
              {...headerProps}
              selectMode={selectMode}
              locale={locale}
              minDate={minDate}
              maxDate={maxDate}
            />
          )}
          renderDayContents={renderCellContent}
          renderMonthContent={(_monthIndex, _shortMonthText, fullMonthText) => {
            return renderCellContent(fullMonthText)
          }}
          renderYearContent={renderCellContent}
          popperPlacement={popperPlacement}
          minDate={minDate}
          maxDate={maxDate}
          {...rest}
        />
        {navigateButtons && (
          <Button
            type='button'
            className={cl(
              'eds-datepicker__chevron-button',
              'eds-datepicker__chevron-button--right',
              `eds-datepicker__chevron-button--${_size}`,
              _error && 'eds-datepicker__chevron-button--error'
            )}
            icon={IconChevronRight}
            variant='tertiary'
            size={_size}
            disabled={_disabled || disableForwardButton}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              navigateDate('next', event)
            }}
            aria-label='Next'
          />
        )}
      </div>
    </div>
  )
})

Datepicker.displayName = 'Datepicker'
export default Datepicker
