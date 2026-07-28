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

export const FormItemDisabledExample = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const inputProps = { disabled: true }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <FormItem inputProps={inputProps}>
        <FormItemLabel>Provide some feedback</FormItemLabel>
        <TextField />
      </FormItem>
      <FormItem inputProps={inputProps}>
        <FormItemLabel>Combobox</FormItemLabel>
        <Combobox
          options={options}
          onToggleSelected={(option: string, isSelected: boolean) =>
            setSelectedOptions(isSelected ? [option] : [])
          }
          selectedOptions={options.filter((option) => selectedOptions.includes(option.value))}
        />
      </FormItem>
      <FormItem inputProps={inputProps}>
        <FormItemLabel>Provide some feedback</FormItemLabel>
        <Select placeholder='Select a cake'>
          <SelectContent>
            <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
            <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
            <SelectItem value='carrotCake'>Carrot cake</SelectItem>
          </SelectContent>
        </Select>
      </FormItem>
      <FormItem inputProps={inputProps}>
        <FormItemLabel>Provide some feedback</FormItemLabel>
        <Datepicker />
      </FormItem>
      <FormItem inputProps={inputProps}>
        <FormItemLabel>Provide some feedback</FormItemLabel>
        <Switch />
      </FormItem>
      <FormItem inputProps={inputProps}>
        <FormItemLabel>Provide some feedback</FormItemLabel>
        <RadioGroup>
          <Radio />
        </RadioGroup>
      </FormItem>
      <FormItem inputProps={inputProps}>
        <FormItemLabel>Provide some feedback</FormItemLabel>
        <Checkbox />
      </FormItem>
    </div>
  )
}
