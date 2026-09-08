import { Combobox, type ComboboxOption, FormItem, FormItemLabel } from '@elhub/ds-components'
import { useState } from 'react'
import styled from 'styled-components'

const StyledCombobox = styled(Combobox)`
  max-width: 400px;

  .wide-options {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    width: min(600px, calc(100vw - var(--eds-size-8)));
    min-width: 100%;
  }
`

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

export const ComboboxWidthLimitExample = () => {
  const [selectedOptions, setSelectedOptions] = useState<ComboboxOption[]>([options[0]])

  return (
    <FormItem>
      <FormItemLabel>400px combobox with a wider dropdown list</FormItemLabel>
      <StyledCombobox
        size='medium'
        options={options}
        listClassName='wide-options'
        isMultiSelect
        placeholder='Select an option'
        noResultsLabel='No results'
        selectedOptions={selectedOptions}
        onToggleSelected={(option, isSelected) =>
          setSelectedOptions((currentOptions) =>
            isSelected
              ? [...currentOptions, ...options.filter(({ value }) => value === option)]
              : currentOptions.filter(({ value }) => value !== option)
          )
        }
      />
    </FormItem>
  )
}
