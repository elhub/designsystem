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

  it.each(['input click', 'toggle button', 'keyboard'])(
    'shows all options when reopening a selected value using %s and filters while editing',
    (openMethod) => {
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
      const openList = () => {
        if (openMethod === 'input click') {
          fireEvent.click(input)
        } else if (openMethod === 'toggle button') {
          fireEvent.pointerUp(screen.getByRole('button', { name: 'Toggle options' }))
        } else {
          input.setSelectionRange(input.value.length, input.value.length)
          fireEvent.keyDown(input, { key: 'ArrowDown' })
        }
      }

      openList()
      expect(input.getAttribute('aria-expanded')).toBe('true')
      expect(input.value).toBe('Acme AS')
      expect(screen.getAllByRole('option')).toHaveLength(2)
      expect(screen.getByRole('option', { name: 'Acme AS' }).getAttribute('aria-selected')).toBe('true')

      fireEvent.change(input, { target: { value: 'Bet' } })
      expect(screen.getAllByRole('option')).toHaveLength(1)
      expect(screen.getByRole('option', { name: 'Beta AS' })).toBeTruthy()

      fireEvent.blur(input)
      openList()
      expect(input.getAttribute('aria-expanded')).toBe('true')
      expect(input.value).toBe('Bet')
      expect(screen.getAllByRole('option')).toHaveLength(1)
      expect(screen.getByRole('option', { name: 'Beta AS' })).toBeTruthy()
    }
  )

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

  it('does not autocomplete a selected label using unrelated options', () => {
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
