import React, { forwardRef } from 'react'
import { IconChevronDown, IconChevronUp } from '@elhub/ds-icons'
import { useFilteredOptionsContext } from './FilteredOptions/filteredOptionsContext'

interface ToggleListButtonProps {
  toggleListButtonLabel?: string
}

const ToggleListButton = forwardRef<HTMLButtonElement, ToggleListButtonProps>(
  ({ toggleListButtonLabel }, ref) => {
    const { isListOpen, toggleIsListOpen } = useFilteredOptionsContext()
    return (
      <button
        type='button'
        onPointerUp={() => {
          toggleIsListOpen()
        }}
        onKeyDown={({ key }) => {
          if (key === 'Enter') {
            toggleIsListOpen()
          }
        }}
        className='eds-combobox__button-toggle-list'
        aria-expanded={isListOpen}
        tabIndex={-1}
        ref={ref}
      >
        <span className='eds-sr-only'>{toggleListButtonLabel}</span>
        {isListOpen ? (
          <IconChevronUp size='xsmall' aria-hidden />
        ) : (
          <IconChevronDown size='xsmall' aria-hidden />
        )}
      </button>
    )
  }
)

ToggleListButton.displayName = 'Combobox.ToggleListButton'
export default ToggleListButton
