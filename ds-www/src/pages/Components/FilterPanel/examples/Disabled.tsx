import { FilterPanel } from '@elhub/ds-components'
import { IconCheckCircle, IconWarningCircle, IconWarningTriangle } from '@elhub/ds-icons'

export const FilterPanelDisabledExample = () => {
  const options = [
    { value: 'warning', icon: IconWarningTriangle, iconColor: 'orange' as const },
    { value: 'error', icon: IconWarningCircle, iconColor: 'red' as const },
    { value: 'success', icon: IconCheckCircle, iconColor: 'green' as const }
  ]

  return (
    <>
      <FilterPanel aria-label='disabled'>
        {options.map((option) => (
          <FilterPanel.Chip key={option.value} disabled icon={option.icon}>
            {option.value}
          </FilterPanel.Chip>
        ))}
      </FilterPanel>
    </>
  )
}
