import { Combobox, FormItem, FormItemLabel } from '@elhub/ds-components'

const options = Array.from({ length: 10_000 }, (_, index) => `Option ${index + 1}`)

export const ComboboxVirtualizationExample = () => (
  <FormItem>
    <FormItemLabel>10,000 options</FormItemLabel>
    <Combobox options={options} placeholder='Search options' noResultsLabel='No results' />
  </FormItem>
)
