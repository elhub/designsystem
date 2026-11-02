import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import AdvancedTabs from './AdvancedTabs'

// Radix activates a tab on mouse down with the main button, not on click
const selectTab = (name: RegExp) => fireEvent.mouseDown(screen.getByRole('tab', { name }), { button: 0 })

describe('AdvancedTabs', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the summary props in order and uses them as the accessible name', () => {
    render(
      <AdvancedTabs defaultValue='exchange'>
        <AdvancedTabs.List>
          <AdvancedTabs.Tab
            value='exchange'
            label='Exchange'
            status='success'
            statusLabel='On target'
            heading='99.99%'
            subheading='Metering values received'
            detail='23 metering points missing'
          />
        </AdvancedTabs.List>
        <AdvancedTabs.Panel value='exchange'>Panel</AdvancedTabs.Panel>
      </AdvancedTabs>
    )

    expect(
      screen.getByRole('tab', {
        name: 'Exchange On target 99.99% Metering values received 23 metering points missing'
      })
    ).toBeTruthy()
  })

  it('shows a colour-coded tag only when status is set', () => {
    render(
      <AdvancedTabs defaultValue='exchange'>
        <AdvancedTabs.List>
          <AdvancedTabs.Tab value='exchange' label='Exchange' status='warning' statusLabel='Below target' />
          <AdvancedTabs.Tab value='production' label='Production' />
        </AdvancedTabs.List>
      </AdvancedTabs>
    )

    const tag = screen.getByText('Below target')
    expect([...tag.classList]).toEqual(
      expect.arrayContaining(['eds-tag', 'eds-tag--warning', 'eds-advanced-tabs__summary-status'])
    )
    expect(screen.getByRole('tab', { name: 'Production' }).querySelector('.eds-tag')).toBeNull()
  })

  it('logs an error when status is set without statusLabel', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(
      <AdvancedTabs defaultValue='exchange'>
        <AdvancedTabs.List>
          <AdvancedTabs.Tab value='exchange' label='Exchange' status='error' />
        </AdvancedTabs.List>
      </AdvancedTabs>
    )

    expect(error).toHaveBeenCalledWith('<AdvancedTabs.Tab/> needs statusLabel when status is set')
  })

  it('logs an error when a tab has no content', () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    render(
      <AdvancedTabs defaultValue='empty'>
        <AdvancedTabs.List>
          <AdvancedTabs.Tab value='empty' />
        </AdvancedTabs.List>
      </AdvancedTabs>
    )

    expect(error).toHaveBeenCalledWith(
      '<AdvancedTabs.Tab/> needs label, status, heading, subheading, detail or children'
    )
  })

  it('renders children after the summary when both are used', () => {
    render(
      <AdvancedTabs defaultValue='combined'>
        <AdvancedTabs.List>
          <AdvancedTabs.Tab value='combined' label='Consumption' heading='95%'>
            <span>Updated 07:15</span>
          </AdvancedTabs.Tab>
        </AdvancedTabs.List>
      </AdvancedTabs>
    )

    const tab = screen.getByRole('tab')
    expect(tab.firstElementChild?.classList.contains('eds-advanced-tabs__summary')).toBe(true)
    expect(tab.lastElementChild?.textContent).toBe('Updated 07:15')
  })

  it('switches panels and does not select disabled tabs', () => {
    render(
      <AdvancedTabs defaultValue='exchange'>
        <AdvancedTabs.List>
          <AdvancedTabs.Tab value='exchange' label='Exchange' />
          <AdvancedTabs.Tab value='production' label='Production' />
          <AdvancedTabs.Tab value='consumption' label='Consumption' disabled />
        </AdvancedTabs.List>
        <AdvancedTabs.Panel value='exchange'>Exchange panel</AdvancedTabs.Panel>
        <AdvancedTabs.Panel value='production'>Production panel</AdvancedTabs.Panel>
        <AdvancedTabs.Panel value='consumption'>Consumption panel</AdvancedTabs.Panel>
      </AdvancedTabs>
    )

    selectTab(/Production/)
    expect(screen.getByRole('tabpanel').textContent).toBe('Production panel')

    expect(screen.getByRole('tab', { name: /Consumption/ }).hasAttribute('disabled')).toBe(true)
    selectTab(/Consumption/)
    expect(screen.getByRole('tabpanel').textContent).toBe('Production panel')
  })

  it('reports tab changes in controlled mode without changing the selected tab', () => {
    const onChange = vi.fn()
    render(
      <AdvancedTabs value='exchange' onChange={onChange}>
        <AdvancedTabs.List>
          <AdvancedTabs.Tab value='exchange' label='Exchange' />
          <AdvancedTabs.Tab value='production' label='Production' />
        </AdvancedTabs.List>
        <AdvancedTabs.Panel value='exchange'>Exchange panel</AdvancedTabs.Panel>
        <AdvancedTabs.Panel value='production'>Production panel</AdvancedTabs.Panel>
      </AdvancedTabs>
    )

    selectTab(/Production/)
    expect(onChange).toHaveBeenCalledWith('production')
    expect(screen.getByRole('tabpanel').textContent).toBe('Exchange panel')
  })

  it.each([
    [true, 'Production panel'],
    [false, 'Exchange panel']
  ])(
    'selects a tab on focus only when selectionFollowsFocus is %s',
    (selectionFollowsFocus, expectedPanel) => {
      render(
        <AdvancedTabs defaultValue='exchange' selectionFollowsFocus={selectionFollowsFocus}>
          <AdvancedTabs.List>
            <AdvancedTabs.Tab value='exchange' label='Exchange' />
            <AdvancedTabs.Tab value='production' label='Production' />
          </AdvancedTabs.List>
          <AdvancedTabs.Panel value='exchange'>Exchange panel</AdvancedTabs.Panel>
          <AdvancedTabs.Panel value='production'>Production panel</AdvancedTabs.Panel>
        </AdvancedTabs>
      )

      fireEvent.focus(screen.getByRole('tab', { name: 'Production' }))
      expect(screen.getByRole('tabpanel').textContent).toBe(expectedPanel)
    }
  )

  it('applies className to the panel element', () => {
    render(
      <AdvancedTabs defaultValue='exchange'>
        <AdvancedTabs.List>
          <AdvancedTabs.Tab value='exchange' label='Exchange' />
        </AdvancedTabs.List>
        <AdvancedTabs.Panel value='exchange' className='my-panel'>
          Panel
        </AdvancedTabs.Panel>
      </AdvancedTabs>
    )

    const panel = screen.getByRole('tabpanel')
    expect(panel.classList.contains('eds-advanced-tabs__panel')).toBe(true)
    expect(panel.classList.contains('my-panel')).toBe(true)
  })
})
