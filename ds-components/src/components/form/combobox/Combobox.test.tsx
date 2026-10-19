import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it } from 'vitest'
import { FormItem } from '../form-item'
import Combobox from './ComboboxProvider'

describe('Combobox', () => {
  it('applies a custom class name to the dropdown list', () => {
    render(
      <FormItem>
        <Combobox options={['Option']} listClassName='custom-list' />
      </FormItem>
    )

    const list = document.querySelector('.eds-combobox__list')

    expect(list?.classList.contains('custom-list')).toBe(true)
  })

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

  it('filters options by a controlled value that changes from outside', () => {
    const options = [
      { label: 'Acme AS', value: '123' },
      { label: 'Beta AS', value: '456' }
    ]
    const renderCombobox = (value: string) => (
      <FormItem>
        <Combobox options={options} value={value} onChange={() => {}} noResultsLabel='No results' />
      </FormItem>
    )
    const { rerender } = render(renderCombobox('123'))

    rerender(renderCombobox('Acme AS'))
    fireEvent.focus(screen.getByRole('combobox'))

    expect(screen.getAllByRole('option')).toHaveLength(1)
    expect(screen.getByRole('option', { name: 'Acme AS' })).toBeTruthy()
  })

  it('shows all options for a selected value and preserves filtering while editing and reopening', () => {
    const options = [
      { label: 'Acme AS', value: '123' },
      { label: 'Beta AS', value: '456' }
    ]
    const ControlledCombobox = () => {
      const [value, setValue] = React.useState('Acme AS')
      return (
        <FormItem>
          <Combobox
            options={options}
            selectedOptions={[options[0]]}
            value={value}
            onChange={(event) => {
              if (event) setValue(event.currentTarget.value)
            }}
            toggleListButtonLabel='Toggle options'
          />
        </FormItem>
      )
    }
    render(<ControlledCombobox />)
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.click(input)
    expect(input.getAttribute('aria-expanded')).toBe('true')
    expect(input.value).toBe('Acme AS')
    expect(screen.getAllByRole('option')).toHaveLength(2)
    expect(screen.getByRole('option', { name: 'Acme AS' }).getAttribute('aria-selected')).toBe('true')

    fireEvent.change(input, { target: { value: 'Bet' } })
    expect(screen.getAllByRole('option')).toHaveLength(1)
    expect(screen.getByRole('option', { name: 'Beta AS' })).toBeTruthy()

    fireEvent.blur(input)
    fireEvent.click(input)
    expect(input.getAttribute('aria-expanded')).toBe('true')
    expect(input.value).toBe('Bet')
    expect(screen.getAllByRole('option')).toHaveLength(1)
    expect(screen.getByRole('option', { name: 'Beta AS' })).toBeTruthy()
  })

  it('shows all options when a URL-restored selected label resolves while open', () => {
    const options = [
      { label: 'Acme AS', value: '123' },
      { label: 'Beta AS', value: '456' }
    ]
    const renderCombobox = (loaded: boolean) => (
      <FormItem>
        <Combobox
          options={loaded ? options : []}
          selectedOptions={[loaded ? options[0] : { label: '123', value: '123' }]}
          value={loaded ? 'Acme AS' : '123'}
          onChange={() => {}}
          toggleListButtonLabel='Toggle options'
        />
      </FormItem>
    )
    const { rerender } = render(renderCombobox(false))
    fireEvent.pointerUp(screen.getByRole('button', { name: 'Toggle options' }))

    rerender(renderCombobox(true))

    expect((screen.getByRole('combobox') as HTMLInputElement).value).toBe('Acme AS')
    expect(screen.getAllByRole('option')).toHaveLength(2)
    expect(screen.getByRole('option', { name: 'Acme AS' }).getAttribute('aria-selected')).toBe('true')
  })

  it('shows all options after typing and committing an uncontrolled selection', () => {
    render(
      <FormItem>
        <Combobox options={['Acme AS', 'Beta AS']} />
      </FormItem>
    )
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.click(input)
    fireEvent.change(input, { target: { value: 'Bet' } })
    expect(screen.getAllByRole('option')).toHaveLength(1)

    fireEvent.pointerUp(screen.getByRole('option', { name: 'Beta AS' }))
    fireEvent.blur(input)
    fireEvent.click(input)

    expect(input.value).toBe('Beta AS')
    expect(input.getAttribute('aria-expanded')).toBe('true')
    expect(screen.getAllByRole('option')).toHaveLength(2)
    expect(screen.getByRole('option', { name: 'Beta AS' }).getAttribute('aria-selected')).toBe('true')

    fireEvent.change(input, { target: { value: 'Acm' } })
    expect(screen.getAllByRole('option')).toHaveLength(1)
    expect(screen.getByRole('option', { name: 'Acme AS' })).toBeTruthy()
  })

  it('does not autocomplete or describe a selected label using unrelated options', () => {
    render(
      <FormItem>
        <Combobox
          options={['A much longer name', 'Beta']}
          selectedOptions={['Beta']}
          defaultValue='Beta'
          shouldAutocomplete
        />
      </FormItem>
    )

    fireEvent.click(screen.getByRole('combobox'))

    expect((screen.getByRole('combobox') as HTMLInputElement).value).toBe('Beta')
    expect(screen.getAllByRole('option')).toHaveLength(2)
    const unrelatedOption = screen.getByRole('option', { name: 'A much longer name' })
    expect(screen.getByRole('combobox').getAttribute('aria-describedby')?.split(' ') ?? []).not.toContain(
      unrelatedOption.id
    )

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'A' } })
    expect(screen.getByRole('combobox').getAttribute('aria-describedby')?.split(' ')).toContain(
      screen.getByRole('option', { name: 'A much longer name' }).id
    )
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
