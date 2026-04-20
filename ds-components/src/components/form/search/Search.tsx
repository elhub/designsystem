import { IconCross as Close, IconSearch as SearchIcon } from '@elhub/ds-icons'
import cl from 'clsx'
import { BodyText } from 'components/typography'
import { Popover } from 'components/popover'
import React, { forwardRef, type InputHTMLAttributes, useCallback, useId, useRef, useState } from 'react'
import { omit, useEventListener } from 'util/index'
import { Loader } from 'components/loader'
import { FormItem, FormItemLabel, type FormItemProps } from '../form-item'

type SearchClearEvent =
  | {
      trigger: 'Click'
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    }
  | { trigger: 'Escape'; event: React.KeyboardEvent<HTMLElement> }

export interface SearchProps
  extends FormItemProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'onSubmit'> {
  children?: React.ReactNode

  /**
   * aria-label on clear button
   */
  clearButtonLabel: string

  /**
   * Search error
   */
  error?: string

  /**
   * Shows label and description for screenreaders-only
   * @default true
   */
  hideLabel?: boolean

  /**
   * Search label
   * @note Will be hidden by default, is required for accessibility reasons.
   */
  label: React.ReactNode

  /**
   * Callback for value-change in input
   */
  onChange?: (value: string) => void

  /**
   * Callback for click on clear-button or Escape keydown
   */
  onClear?: (e: SearchClearEvent) => void

  /**
   * Callback for click on submit
   */
  onSubmit?: (value: string) => void

  /**
   * Loading suggestions
   */
  loading?: boolean

  /**
   * Loading suggestions text
   */
  loadingText?: string
}

interface SearchContextProps {
  onSubmit?: (value: string) => void
  disabled?: boolean
  popoverOpen: boolean
  setPopoverOpen: (open: boolean) => void
}

const SearchContext = React.createContext<SearchContextProps>({
  onSubmit: () => {},
  popoverOpen: false,
  setPopoverOpen: () => {}
})

export const useSearchContext: () => SearchContextProps = () => {
  const context = React.useContext(SearchContext)
  if (!context) {
    throw new Error('SearchContext must be used within a Search')
  }
  return context
}

export const Search = forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  const {
    className,
    hideLabel = true,
    label,
    value,
    clearButtonLabel,
    disabled,
    onClear,
    onSubmit,
    defaultValue,
    onChange,
    error,
    loading,
    loadingText,
    children,
    inputProps,
    ...rest
  } = props

  const id = useId()
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const popoverRef = useRef<HTMLDivElement | null>(null)

  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const [popoverOpen, setPopoverOpen] = useState(false)

  const handleChange = useCallback(
    (v: string) => {
      if (value === undefined) {
        setInternalValue(v)
      }
      onChange?.(v)
    },
    [onChange, value]
  )

  const handleClear = useCallback(
    (event: SearchClearEvent) => {
      onClear?.(event)
      handleChange('')
      if (ref && 'current' in ref) {
        ref?.current?.focus?.()
      }
    },
    [ref, handleChange, onClear]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      const isEnterKey = e.key === 'Enter'
      const isArrowDownKey = e.key === 'ArrowDown'
      const isArrowUpKey = e.key === 'ArrowUp'
      const isEscapeKey = e.key === 'Escape'

      if (isEscapeKey) {
        onClear?.({ trigger: 'Escape', event: e })
        handleChange('')
        if (ref && 'current' in ref) {
          ref?.current?.focus?.()
        }
        handleClear({ trigger: 'Escape', event: e })
        return
      }

      const focusNextElement = (direction: 1 | -1): void => {
        const activeElement = document.activeElement as HTMLElement
        const tabbableItems = popoverRef?.current?.querySelectorAll(
          '.eds-search__results-item, .eds-search__results-expand-button'
        ) as NodeListOf<HTMLElement> | null

        if (tabbableItems && activeElement) {
          const activeIndex = Array.from(tabbableItems).indexOf(activeElement)
          const nextIndex = activeIndex + direction

          if (nextIndex >= 0 && nextIndex < tabbableItems.length) {
            tabbableItems[nextIndex]?.focus()
          }
        }
      }
      if (isEnterKey) {
        const { activeElement } = document
        if (activeElement?.classList.contains('eds-search__results-item')) {
          // it is handled on the SearchSuggestionItem
          return
        }
        if (activeElement?.classList.contains('eds-search__results-expand-button')) {
          ;(activeElement as HTMLElement).click()
          return
        }
        onSubmit?.(internalValue.toString())
        return
      }

      if (isArrowDownKey) {
        if (!popoverOpen) {
          setPopoverOpen(true)
        }

        const activeElement = document.activeElement as HTMLElement
        const isWrapperElement = activeElement === wrapperRef?.current

        if (popoverRef?.current && (!activeElement || isWrapperElement)) {
          const firstTabbableItem = popoverRef.current.querySelector<HTMLElement>(
            '.eds-search__results-item, .eds-search__results-expand-button'
          )
          firstTabbableItem?.focus()
        } else {
          focusNextElement(1)
        }
      }

      if (isArrowUpKey) {
        focusNextElement(-1)
      }
    },
    [internalValue, wrapperRef, popoverRef, onSubmit, ref, handleChange, onClear]
  )

  useEventListener('keydown', handleKeyDown)

  return (
    <SearchContext.Provider value={{ popoverOpen, setPopoverOpen, onSubmit, disabled }}>
      <FormItem
        size='small'
        ref={wrapperRef}
        error={error}
        className={cl(
          'eds-search',
          {
            'eds-search--error': !!error,
            'eds-search--disabled': !!disabled
          },
          className
        )}
        inputProps={inputProps}
      >
        <FormItemLabel hideLabel={hideLabel}>{label}</FormItemLabel>
        <div className='eds-search__wrapper'>
          <div className='eds-search__wrapper-inner'>
            <button
              type='submit'
              className={cl('eds-button', 'eds-search__button-search', 'eds-search__search-icon')}
              disabled={!!disabled}
              onClick={() => {
                onSubmit?.(internalValue.toString())
              }}
            >
              <SearchIcon size='small' aria-hidden />
            </button>
            <input
              ref={ref}
              {...omit(rest, ['error', 'errorId', 'size'])}
              {...inputProps}
              value={value ?? internalValue}
              onChange={(e) => {
                setPopoverOpen(true)
                handleChange(e.target.value)
              }}
              onFocus={() => {
                if (internalValue) {
                  setPopoverOpen(true)
                }
              }}
              id={id}
              type='search'
              role='searchbox'
              disabled={disabled}
              className={cl('eds-search__input', 'eds-text-field__input', 'eds-body-text', className)}
            />
            {(value ?? internalValue) && (
              <button
                type='button'
                onClick={(e) => {
                  handleClear({ trigger: 'Click', event: e })
                }}
                className='eds-search__button-clear'
              >
                {clearButtonLabel && <span className='eds-sr-only'>{clearButtonLabel}</span>}
                <Close aria-hidden size='xsmall' />
              </button>
            )}
          </div>
        </div>
        {wrapperRef && (loading || children) && (
          <Popover
            ref={popoverRef}
            anchorEl={wrapperRef?.current}
            style={{
              width: wrapperRef?.current?.clientWidth
            }}
            variant='secondary'
            arrow={false}
            strategy='fixed'
            placement='bottom'
            open={popoverOpen}
            onClose={() => {
              setPopoverOpen(false)
            }}
            className='eds-search__popover'
          >
            {loading && (
              <div className='eds-search__loading'>
                <Loader size='small' />
                {loadingText && <BodyText>{loadingText}</BodyText>}
              </div>
            )}
            {!loading && children}
          </Popover>
        )}
      </FormItem>
    </SearchContext.Provider>
  )
})

Search.displayName = 'Search'
