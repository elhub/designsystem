import { FilterPanel, VerticalSpace } from '@elhub/ds-components'
import { useState } from 'react'

export const FilterPanelSizesExample = () => {
  const options = [
    { label: 'Pasta', value: 'pasta' },
    { label: 'Salad', value: 'salad' },
    { label: 'Bread', value: 'bread' }
  ]
  const [selected, setSelected] = useState(['pasta'])

  return (
    <>
      <FilterPanel size='large' aria-label='large'>
        {options.map((option) => (
          <FilterPanel.Chip
            key={option.value}
            selected={selected.includes(option.value)}
            onClick={() => {
              setSelected(
                selected.includes(option.value)
                  ? selected.filter((x) => x !== option.value)
                  : [...selected, option.value]
              )
            }}
          >
            {option.label}
          </FilterPanel.Chip>
        ))}
      </FilterPanel>
      <VerticalSpace />
      <FilterPanel size='medium' aria-label='medium'>
        {options.map((option) => (
          <FilterPanel.Chip
            key={option.value}
            selected={selected.includes(option.value)}
            onClick={() => {
              setSelected(
                selected.includes(option.value)
                  ? selected.filter((x) => x !== option.value)
                  : [...selected, option.value]
              )
            }}
          >
            {option.label}
          </FilterPanel.Chip>
        ))}
      </FilterPanel>
      <VerticalSpace />
      <FilterPanel size='small' aria-label='small'>
        {options.map((option) => (
          <FilterPanel.Chip
            key={option.value}
            selected={selected.includes(option.value)}
            onClick={() => {
              setSelected(
                selected.includes(option.value)
                  ? selected.filter((x) => x !== option.value)
                  : [...selected, option.value]
              )
            }}
          >
            {option.label}
          </FilterPanel.Chip>
        ))}
      </FilterPanel>
    </>
  )
}
