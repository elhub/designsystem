import { Combobox, type ComboboxOption, FormItem, FormItemLabel } from '@elhub/ds-components'
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

export const ComboboxErrorMessageExample = () => {
  const [selectedOptions, setSelectedOptions] = useState<ComboboxOption[]>([options[0]])

  const toggleSelected = (option: string, isSelected: boolean) => {
    setSelectedOptions((currentOptions) =>
      isSelected
        ? [...currentOptions, ...options.filter(({ value }) => value === option)]
        : currentOptions.filter(({ value }) => value !== option)
    )
  }

  return (
    <FormItem error='You must select 3'>
      <FormItemLabel>Error message</FormItemLabel>
      <Combobox
        options={options}
        isMultiSelect
        placeholder='Select an option'
        maxSelected={{ limit: 3 }}
        noResultsLabel='No results'
        selectedOptions={selectedOptions}
        onToggleSelected={toggleSelected}
      />
    </FormItem>
  )
}
