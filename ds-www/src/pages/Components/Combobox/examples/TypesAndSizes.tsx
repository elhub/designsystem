import { Combobox, type ComboboxOption, FormItem, FormItemLabel, VerticalSpace } from '@elhub/ds-components'
import { Fragment, useState } from 'react'

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

export const ComboboxTypesAndSizesExample = () => {
  const [selectedSingleOptions, setSelectedSingleOptions] = useState<string[]>([])
  const [selectedMultipleOptions, setSelectedMultipleOptions] = useState<ComboboxOption[]>([options[0]])

  const toggleSingle = (option: string, isSelected: boolean) => {
    setSelectedSingleOptions(isSelected ? [option] : [])
  }

  const toggleMultiple = (option: string, isSelected: boolean) => {
    setSelectedMultipleOptions((selectedOptions) =>
      isSelected
        ? [...selectedOptions, ...options.filter(({ value }) => value === option)]
        : selectedOptions.filter(({ value }) => value !== option)
    )
  }

  return (
    <>
      {(['large', 'medium', 'small'] as const).map((size) => (
        <Fragment key={size}>
          <FormItem>
            <FormItemLabel>Single, {size}</FormItemLabel>
            <Combobox
              size={size}
              options={options}
              placeholder='Select an option'
              noResultsLabel='No results'
              onToggleSelected={toggleSingle}
              selectedOptions={options.filter(({ value }) => selectedSingleOptions.includes(value))}
            />
          </FormItem>
          <VerticalSpace />
          <FormItem>
            <FormItemLabel>multiple, {size}</FormItemLabel>
            <Combobox
              size={size}
              options={options}
              isMultiSelect
              placeholder='Select an option'
              noResultsLabel='No results'
              selectedOptions={selectedMultipleOptions}
              onToggleSelected={toggleMultiple}
            />
          </FormItem>
          {size !== 'small' && <VerticalSpace />}
        </Fragment>
      ))}
    </>
  )
}
