import { FilterPanel } from '@elhub/ds-components'
import { IconCheckCircle, IconWarningCircle, IconWarningTriangle } from '@elhub/ds-icons'
import { useState } from 'react'

export const FilterPanelReadOnlyExample = () => {
  const options = [
    { value: 'warning', icon: IconWarningTriangle, iconColor: 'orange' as const },
    { value: 'error', icon: IconWarningCircle, iconColor: 'red' as const },
    { value: 'success', icon: IconCheckCircle, iconColor: 'green' as const }
  ]
  const [selected] = useState(['warning'])

  return (
    <>
      <FilterPanel aria-label='disabled'>
        {options.map((option) => (
          <FilterPanel.Chip
            key={option.value}
            selected={selected.includes(option.value)}
            readOnly
            iconColor={option.iconColor}
            icon={option.icon}
          >
            {option.value}
          </FilterPanel.Chip>
        ))}
      </FilterPanel>
    </>
  )
}
