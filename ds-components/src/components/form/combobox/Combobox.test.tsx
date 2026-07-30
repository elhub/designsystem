import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'
import { FormItem } from '../form-item'
import Combobox from './ComboboxProvider'

describe('Combobox', () => {
  it('only renders options near the visible viewport', () => {
    render(
      <FormItem>
        <Combobox
          options={Array.from({ length: 1000 }, (_, index) => `Option ${index}`)}
          noResultsLabel='No results'
        />
      </FormItem>
    )

    fireEvent.focus(screen.getByRole('combobox'))

    expect(screen.getAllByRole('option')).toHaveLength(10)
    expect(screen.getAllByRole('option')[0].getAttribute('aria-setsize')).toBe('1000')
    expect(screen.getAllByRole('option')[0].getAttribute('aria-posinset')).toBe('1')
  })

  it('keeps duplicate options uniquely focused', () => {
    render(
      <FormItem>
        <Combobox
          options={[
            { label: 'Duplicate', value: 'same' },
            { label: 'Duplicate', value: 'same' }
          ]}
          noResultsLabel='No results'
        />
      </FormItem>
    )

    fireEvent.focus(screen.getByRole('combobox'))
    const options = screen.getAllByRole('option')
    fireEvent.mouseMove(options[0])

    expect(options[0].classList.contains('eds-combobox__list-item--focus')).toBe(true)
    expect(options[1].classList.contains('eds-combobox__list-item--focus')).toBe(false)
    expect(options[0].id).not.toBe(options[1].id)
  })

  it('supports keyboard navigation to virtualized options', () => {
    render(
      <FormItem>
        <Combobox
          options={Array.from({ length: 1000 }, (_, index) => `Option ${index}`)}
          noResultsLabel='No results'
        />
      </FormItem>
    )

    const input = screen.getByRole('combobox')
    fireEvent.focus(input)
    fireEvent.keyUp(input, { key: 'End' })

    expect(input.getAttribute('aria-activedescendant')).toContain('option-999')
    expect(document.body.contains(screen.getByText('Option 999'))).toBe(true)
  })
})
