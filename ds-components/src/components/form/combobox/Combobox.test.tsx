import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { describe, expect, it, vi } from 'vitest'
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

    fireEvent.change(input, { target: { value: 'Acme A' } })
    fireEvent.change(input, { target: { value: 'Acme AS' } })
    expect(screen.getAllByRole('option')).toHaveLength(1)
    expect(screen.getByRole('option', { name: 'Acme AS' })).toBeTruthy()
  })

  it('shows all options when an externally updated selected label resolves while open', () => {
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

  it('keeps filtering a partial query when autocomplete displays the selected label', () => {
    render(
      <FormItem>
        <Combobox options={['Acme AS', 'Beta AS']} selectedOptions={['Beta AS']} shouldAutocomplete />
      </FormItem>
    )
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.click(input)
    expect(screen.getAllByRole('option')).toHaveLength(2)

    fireEvent.change(input, { target: { value: 'Bet' } })

    expect(input.value).toBe('Beta AS')
    expect(input.selectionStart).toBe(3)
    expect(input.selectionEnd).toBe(7)
    expect(screen.getAllByRole('option')).toHaveLength(1)
    const matchingOption = screen.getByRole('option', { name: 'Beta AS' })
    expect(input.getAttribute('aria-describedby')?.split(' ')).toContain(matchingOption.id)

    fireEvent.blur(input)
    fireEvent.click(input)

    expect(input.value).toBe('Beta AS')
    expect(input.getAttribute('aria-expanded')).toBe('true')
    expect(screen.getAllByRole('option')).toHaveLength(1)
    expect(screen.queryByRole('option', { name: 'Acme AS' })).toBeNull()
  })

  it('restores default text after typing or selecting an option and supports repeated form resets', async () => {
    render(
      <form aria-label='Example'>
        <FormItem>
          <Combobox options={['Acme', 'Beta']} defaultValue='Ac' />
        </FormItem>
        <button type='reset'>Reset</button>
      </form>
    )
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Bet' } })
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(input.value).toBe('Ac'))

    fireEvent.change(input, { target: { value: 'Bet' } })
    fireEvent.pointerUp(screen.getByRole('option', { name: 'Beta' }))
    expect(input.value).toBe('Beta')
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(input.value).toBe('Ac'))
    fireEvent.click(input)
    expect(screen.getByRole('option', { name: 'Beta' }).getAttribute('aria-selected')).toBe('false')

    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(input.value).toBe('Ac'))
  })

  it('restores a supplied default selection and discards typing on native form reset', async () => {
    const Example = () => {
      const [selection, setSelection] = React.useState(['Acme'])
      return (
        <form onReset={() => setSelection(['Acme'])}>
          <FormItem>
            <Combobox
              options={['Acme', 'Beta']}
              selectedOptions={selection}
              onToggleSelected={(value, selected) => setSelection(selected ? [value] : [])}
            />
          </FormItem>
          <button type='reset'>Reset</button>
        </form>
      )
    }
    render(<Example />)
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Bet' } })
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(input.value).toBe('Acme'))
    fireEvent.click(input)
    expect(screen.getAllByRole('option')).toHaveLength(2)
    fireEvent.pointerUp(screen.getByRole('option', { name: 'Beta' }))
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(input.value).toBe('Acme'))
  })

  it('preserves input text and selection when form reset is cancelled', async () => {
    render(
      <form onReset={(event) => event.preventDefault()}>
        <FormItem>
          <Combobox options={['Acme', 'Beta']} defaultValue='Ac' />
        </FormItem>
        <button type='reset'>Reset</button>
      </form>
    )
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.click(input)
    fireEvent.change(input, { target: { value: 'Bet' } })
    fireEvent.pointerUp(screen.getByRole('option', { name: 'Beta' }))
    fireEvent.change(input, { target: { value: 'Bet' } })
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    await waitFor(() => expect(input.value).toBe('Bet'))
    expect(screen.getByRole('option', { name: 'Beta' }).getAttribute('aria-selected')).toBe('true')
  })

  it('synchronizes selection-only updates without overwriting edits on ordinary rerenders', () => {
    const options = [
      { label: '123', value: '123' },
      { label: 'Beta AS', value: '456' }
    ]
    const renderCombobox = (selectedOptions: typeof options) => (
      <FormItem>
        <Combobox options={['Acme AS', 'Beta AS']} selectedOptions={selectedOptions} />
      </FormItem>
    )
    const { rerender } = render(renderCombobox([options[0]]))
    const input = screen.getByRole('combobox') as HTMLInputElement

    rerender(renderCombobox([{ label: 'Acme AS', value: '123' }]))
    expect(input.value).toBe('Acme AS')
    fireEvent.click(input)
    expect(screen.getAllByRole('option')).toHaveLength(2)

    fireEvent.change(input, { target: { value: 'Acm' } })
    rerender(renderCombobox([{ label: 'Acme AS', value: '123' }]))
    expect(input.value).toBe('Acm')
    expect(screen.getAllByRole('option')).toHaveLength(1)

    rerender(renderCombobox([options[1]]))
    expect(input.value).toBe('Beta AS')
    expect(screen.getAllByRole('option')).toHaveLength(2)

    rerender(renderCombobox([]))
    expect(input.value).toBe('')
    expect(screen.getAllByRole('option')).toHaveLength(2)
  })

  it('confirms an already-selected autocomplete label on Enter without clearing it', () => {
    const onToggleSelected = vi.fn()
    const onClear = vi.fn()
    render(
      <FormItem>
        <Combobox
          options={['Acme', 'Beta']}
          selectedOptions={['Beta']}
          shouldAutocomplete
          onToggleSelected={onToggleSelected}
          onClear={onClear}
        />
      </FormItem>
    )
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.click(input)
    fireEvent.change(input, { target: { value: 'Bet' } })
    expect(input.value).toBe('Beta')
    fireEvent.keyUp(input, { key: 'Enter' })

    expect(input.value).toBe('Beta')
    expect(input.getAttribute('aria-expanded')).toBe('false')
    expect(onClear).not.toHaveBeenCalled()
    expect(onToggleSelected).not.toHaveBeenCalled()

    fireEvent.click(input)
    expect(screen.getAllByRole('option')).toHaveLength(2)
    expect(screen.getByRole('option', { name: 'Beta' }).getAttribute('aria-selected')).toBe('true')
  })

  it('commits the autocomplete candidate on Enter when controlled text is still a partial query', () => {
    const onToggleSelected = vi.fn()
    const Example = () => {
      const [value, setValue] = React.useState('')
      return (
        <FormItem>
          <Combobox
            options={['Acme', 'Beta']}
            shouldAutocomplete
            value={value}
            onChange={(event) => {
              if (event) setValue(event.currentTarget.value)
            }}
            onToggleSelected={onToggleSelected}
          />
        </FormItem>
      )
    }
    render(<Example />)
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.click(input)
    fireEvent.change(input, { target: { value: 'Bet' } })
    expect(input.value).toBe('Bet')
    expect(screen.getAllByRole('option')).toHaveLength(1)

    fireEvent.keyUp(input, { key: 'Enter' })

    expect(onToggleSelected).toHaveBeenCalledExactlyOnceWith('Beta', true, false)
    expect(input.getAttribute('aria-expanded')).toBe('false')
  })

  it.each([false, true])(
    'clears stale keyboard focus after an external selection update (controlled input: %s)',
    (controlledInput) => {
      const onToggleSelected = vi.fn()
      const Example = ({ selected }: { selected: boolean }) => {
        const [value, setValue] = React.useState('')
        const displayedValue = selected ? 'Beta' : value
        return (
          <FormItem>
            <Combobox
              options={['Acme', 'Beta']}
              selectedOptions={selected ? ['Beta'] : []}
              shouldAutocomplete
              value={controlledInput ? displayedValue : undefined}
              onChange={(event) => {
                if (event) setValue(event.currentTarget.value)
              }}
              onToggleSelected={onToggleSelected}
            />
          </FormItem>
        )
      }
      const { rerender } = render(<Example selected={false} />)
      const input = screen.getByRole('combobox') as HTMLInputElement
      fireEvent.click(input)
      fireEvent.change(input, { target: { value: 'Bet' } })
      input.setSelectionRange(input.value.length, input.value.length)
      fireEvent.keyDown(input, { key: 'ArrowDown' })
      expect(input.getAttribute('aria-activedescendant')).toBe(
        screen.getByRole('option', { name: 'Beta' }).id
      )

      rerender(<Example selected />)

      expect(input.value).toBe('Beta')
      expect(screen.getAllByRole('option')).toHaveLength(2)
      expect(input.getAttribute('aria-activedescendant')).toBeNull()
      fireEvent.keyUp(input, { key: 'Enter' })
      expect(onToggleSelected).not.toHaveBeenCalled()
      expect(input.value).toBe('Beta')
      expect(input.getAttribute('aria-expanded')).toBe('false')
    }
  )

  it('resolves Enter by the displayed label rather than the first unfiltered option', () => {
    const onToggleSelected = vi.fn()
    render(
      <FormItem>
        <Combobox options={['Acme', 'Beta']} allowNewValues onToggleSelected={onToggleSelected} />
      </FormItem>
    )
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.click(input)
    fireEvent.pointerUp(screen.getByRole('option', { name: 'Beta' }))
    onToggleSelected.mockClear()
    fireEvent.blur(input)
    fireEvent.click(input)
    fireEvent.keyUp(input, { key: 'Enter' })

    expect(onToggleSelected).not.toHaveBeenCalledWith('Acme', expect.anything(), expect.anything())
    expect(onToggleSelected).toHaveBeenCalledWith('Beta', false, false)
  })

  it('keeps multi-select input text as a query even when it matches a selected chip', () => {
    render(
      <FormItem>
        <Combobox options={['Acme', 'Beta']} selectedOptions={['Beta']} isMultiSelect />
      </FormItem>
    )
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Beta' } })

    expect(input.value).toBe('Beta')
    expect(screen.getAllByRole('option')).toHaveLength(1)
    expect(screen.getByRole('option', { name: 'Beta' })).toBeTruthy()
  })

  it('reports empty text on deselection without passing an option pointer event as an input change', () => {
    const onChange = vi.fn()
    render(
      <FormItem>
        <Combobox options={['Beta']} onChange={onChange} />
      </FormItem>
    )
    const input = screen.getByRole('combobox') as HTMLInputElement
    fireEvent.click(input)
    fireEvent.pointerUp(screen.getByRole('option', { name: 'Beta' }))
    fireEvent.click(input)
    fireEvent.pointerUp(screen.getByRole('option', { name: 'Beta' }))

    expect(input.value).toBe('')
    expect(onChange).toHaveBeenLastCalledWith(null, '')
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
