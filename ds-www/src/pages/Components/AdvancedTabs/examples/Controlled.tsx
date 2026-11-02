import { AdvancedTabs, Button, FlexDiv, VerticalSpace } from '@elhub/ds-components'
import { useState } from 'react'

const tabs = [
  {
    value: 'exchange',
    label: 'Exchange',
    status: 'success',
    statusLabel: 'On target',
    heading: '99.9923%',
    detail: '23 metering points missing'
  },
  {
    value: 'production',
    label: 'Production',
    status: 'warning',
    statusLabel: 'Below target',
    heading: '98.2268%',
    detail: '143 metering points missing'
  },
  {
    value: 'consumption15',
    label: 'Consumption 15',
    status: 'error',
    statusLabel: 'Critical',
    heading: '95.34%',
    detail: '59 metering points missing'
  },
  {
    value: 'consumption60',
    label: 'Consumption 60',
    heading: '99.9923%',
    detail: '2 metering points missing'
  }
] as const

export const AdvancedTabsControlledExample = () => {
  const [tabValue, setTabValue] = useState<string>('exchange')

  return (
    <div>
      <FlexDiv style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            size='small'
            variant={tabValue === tab.value ? 'primary' : 'secondary'}
            onClick={() => setTabValue(tab.value)}
          >
            Show {tab.label}
          </Button>
        ))}
      </FlexDiv>
      <VerticalSpace />

      <AdvancedTabs value={tabValue} onChange={setTabValue}>
        <AdvancedTabs.List>
          {tabs.map((tab) => (
            <AdvancedTabs.Tab key={tab.value} {...tab} subheading='Metering values received' />
          ))}
        </AdvancedTabs.List>
        {tabs.map((tab) => (
          <AdvancedTabs.Panel key={tab.value} value={tab.value}>
            Panel for {tab.label}
          </AdvancedTabs.Panel>
        ))}
      </AdvancedTabs>
    </div>
  )
}
