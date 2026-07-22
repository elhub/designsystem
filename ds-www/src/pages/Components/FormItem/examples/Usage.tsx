import {
  Checkbox,
  Combobox,
  Datepicker,
  FormItem,
  FormItemLabel,
  Radio,
  RadioGroup,
  Select,
  SelectContent,
  SelectItem,
  Switch,
  TextField
} from '@elhub/ds-components'
import { useState } from 'react'

const options = [
  { label: 'Bicycle', value: 'bicycle' },
  { label: 'Car', value: 'car' },
  { label: 'Motorcycle', value: 'motorcycle' },
  { label: 'Truck', value: 'truck' },
  { label: 'Boat', value: 'boat' },
  { label: 'Airplane', value: 'airplane' },
  { label: 'Helicopter', value: 'helicopter' },
  { label: 'Submarine', value: 'submarine' }
]

export const FormItemUsageExample = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  return (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
      <FormItem>
        <FormItemLabel>Textfield</FormItemLabel>
        <TextField />
      </FormItem>
      <FormItem>
        <FormItemLabel>Combobox</FormItemLabel>
        <Combobox
          options={options}
          onToggleSelected={(option: string, isSelected: boolean) =>
            setSelectedOptions(isSelected ? [option] : [])
          }
          selectedOptions={options.filter((option) => selectedOptions.includes(option.value))}
        />
      </FormItem>
      <FormItem>
        <FormItemLabel>Select</FormItemLabel>
        <Select placeholder='Select a cake'>
          <SelectContent>
            <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
            <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
            <SelectItem value='carrotCake'>Carrot cake</SelectItem>
          </SelectContent>
        </Select>
      </FormItem>
      <FormItem required>
        <FormItemLabel>Datepicker</FormItemLabel>
        <Datepicker />
      </FormItem>
      <div style={{ display: 'flex', gap: 16 }}>
        <FormItem>
          <FormItemLabel>Switch</FormItemLabel>
          <Switch />
        </FormItem>
        <FormItem>
          <FormItemLabel>Radio</FormItemLabel>
          <RadioGroup>
            <Radio />
          </RadioGroup>
        </FormItem>
        <FormItem>
          <FormItemLabel>Checkbox</FormItemLabel>
          <Checkbox />
        </FormItem>
      </div>
    </div>
  )
}
