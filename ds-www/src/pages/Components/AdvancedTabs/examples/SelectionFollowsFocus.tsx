import { AdvancedTabs } from '@elhub/ds-components'

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

export const TabsSelectionFollowsFocusExample = () => {
  return (
    <AdvancedTabs defaultValue='exchange' selectionFollowsFocus>
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
  )
}
