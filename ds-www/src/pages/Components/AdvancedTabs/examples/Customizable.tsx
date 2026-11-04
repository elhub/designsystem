import { AdvancedTabs, BodyText } from '@elhub/ds-components'
import { IconChartsColumns, IconClockCircle } from '@elhub/ds-icons'

export const AdvancedTabsCustomizableExample = () => {
  return (
    <AdvancedTabs defaultValue='minimal'>
      <AdvancedTabs.List>
        {/* 1. Only some summary props */}
        <AdvancedTabs.Tab value='minimal' label='Exchange' heading='99.9923%' />

        {/* 2. Summary props with a status */}
        <AdvancedTabs.Tab
          value='status'
          label='Production'
          status='warning'
          statusLabel='Below target'
          heading='98.2268%'
        />

        {/* 3. Summary props combined with custom content below */}
        <AdvancedTabs.Tab value='combined' label='Consumption 15' heading='95.34%'>
          <BodyText as='span' size='small' style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <IconClockCircle aria-hidden='true' /> Updated 07:15
          </BodyText>
        </AdvancedTabs.Tab>

        {/* 4. Fully custom content */}
        <AdvancedTabs.Tab value='custom'>
          <BodyText as='span' weight='bold' style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <IconChartsColumns aria-hidden='true' /> All categories
          </BodyText>
        </AdvancedTabs.Tab>
      </AdvancedTabs.List>

      <AdvancedTabs.Panel value='minimal'>Panel for Exchange</AdvancedTabs.Panel>
      <AdvancedTabs.Panel value='status'>Panel for Production</AdvancedTabs.Panel>
      <AdvancedTabs.Panel value='combined'>Panel for Consumption 15</AdvancedTabs.Panel>
      <AdvancedTabs.Panel value='custom'>Panel for all categories</AdvancedTabs.Panel>
    </AdvancedTabs>
  )
}
