import { Combobox, type ComboboxOption, FormItem, FormItemLabel, VerticalSpace } from '@elhub/ds-components'
import { useState } from 'react'

const options: ComboboxOption[] = [
  { label: 'Bicycle', value: 'bicycle' },
  { label: 'Car', value: 'car' },
  { label: 'Motorcycle', value: 'motorcycle' },
  { label: 'Truck', value: 'truck' },
  { label: 'Boat', value: 'boat' },
  { label: 'Airplane', value: 'airplane' },
  { label: 'Helicopter', value: 'helicopter' },
  { label: 'Submarine', value: 'submarine' }
]

const updateSelection = (
  currentOptions: ComboboxOption[],
  option: string,
  isSelected: boolean
): ComboboxOption[] => {
  return isSelected
    ? [...currentOptions, ...options.filter(({ value }) => value === option)]
    : currentOptions.filter(({ value }) => value !== option)
}

export const ComboboxLimitsExample = () => {
  const [limitedSelections, setLimitedSelections] = useState<ComboboxOption[]>([options[0]])
  const [limitedVisibleOptions, setLimitedVisibleOptions] = useState<ComboboxOption[]>([options[0]])

  return (
    <>
      <FormItem>
        <FormItemLabel>Max of 3 selections</FormItemLabel>
        <Combobox
          options={options}
          isMultiSelect
          maxSelected={{ limit: 3 }}
          noResultsLabel='No results'
          placeholder='Select an option'
          selectedOptions={limitedSelections}
          onToggleSelected={(option, isSelected) =>
            setLimitedSelections((selectedOptions) => updateSelection(selectedOptions, option, isSelected))
          }
        />
      </FormItem>
      <VerticalSpace />
      <FormItem>
        <FormItemLabel>Max 3 options shown</FormItemLabel>
        <Combobox
          options={options}
          isMultiSelect
          maxShown={3}
          noResultsLabel='No results'
          placeholder='Select an option'
          selectedOptions={limitedVisibleOptions}
          onToggleSelected={(option, isSelected) =>
            setLimitedVisibleOptions((selectedOptions) =>
              updateSelection(selectedOptions, option, isSelected)
            )
          }
        />
      </FormItem>
    </>
  )
}
