import { FilterPanel, VerticalSpace } from '@elhub/ds-components'
import { IconCheckCircle, IconWarningCircle, IconWarningTriangle } from '@elhub/ds-icons'
import { useState } from 'react'

export const FilterPanelTextAndIconsExample = () => {
  const options = [
    { value: 'warning', icon: IconWarningTriangle, iconColor: 'orange' as const },
    { value: 'error', icon: IconWarningCircle, iconColor: 'red' as const },
    { value: 'success', icon: IconCheckCircle, iconColor: 'green' as const }
  ]
  const [selected, setSelected] = useState(['warning'])

  return (
    <>
      <FilterPanel size='large' aria-label='large text and icons'>
        {options.map((option) => (
          <FilterPanel.Chip
            key={option.value}
            icon={option.icon}
            iconColor={option.iconColor}
            selected={selected.includes(option.value)}
            onClick={() => {
              setSelected(
                selected.includes(option.value)
                  ? selected.filter((x) => x !== option.value)
                  : [...selected, option.value]
              )
            }}
          >
            {option.value}
          </FilterPanel.Chip>
        ))}
      </FilterPanel>
      <VerticalSpace />
      <FilterPanel size='medium' aria-label='medium text and icons'>
        {options.map((option) => (
          <FilterPanel.Chip
            key={option.value}
            icon={option.icon}
            iconColor={option.iconColor}
            selected={selected.includes(option.value)}
            onClick={() => {
              setSelected(
                selected.includes(option.value)
                  ? selected.filter((x) => x !== option.value)
                  : [...selected, option.value]
              )
            }}
          >
            {option.value}
          </FilterPanel.Chip>
        ))}
      </FilterPanel>
      <VerticalSpace />
      <FilterPanel size='small' aria-label='small, text and icons'>
        {options.map((option) => (
          <FilterPanel.Chip
            key={option.value}
            icon={option.icon}
            iconColor={option.iconColor}
            selected={selected.includes(option.value)}
            onClick={() =>
              setSelected(
                selected.includes(option.value)
                  ? selected.filter((x) => x !== option.value)
                  : [...selected, option.value]
              )
            }
          >
            {option.value}
          </FilterPanel.Chip>
        ))}
      </FilterPanel>
    </>
  )
}
