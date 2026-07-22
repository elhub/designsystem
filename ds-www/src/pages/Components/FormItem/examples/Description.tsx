import {
  Checkbox,
  Combobox,
  Datepicker,
  FormItem,
  FormItemDescription,
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

export const FormItemDescriptionExample = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <FormItem>
        <FormItemLabel>Provide some feedback</FormItemLabel>
        <FormItemDescription>Feedback is valuable</FormItemDescription>
        <TextField />
      </FormItem>
      <FormItem>
        <FormItemLabel>Choose a cake</FormItemLabel>
        <FormItemDescription>Do you like cake?</FormItemDescription>
        <Select placeholder='Select a cake'>
          <SelectContent>
            <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
            <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
            <SelectItem value='carrotCake'>Carrot cake</SelectItem>
          </SelectContent>
        </Select>
      </FormItem>
      <FormItem>
        <FormItemLabel>Choose a cake</FormItemLabel>
        <FormItemDescription>Do you like cake?</FormItemDescription>
        <Combobox
          options={options}
          onToggleSelected={(option: string, isSelected: boolean) =>
            setSelectedOptions(isSelected ? [option] : [])
          }
          selectedOptions={options.filter((option) => selectedOptions.includes(option.value))}
        />
      </FormItem>
      <FormItem>
        <FormItemLabel>Choose a date</FormItemLabel>
        <FormItemDescription>When is the event?</FormItemDescription>
        <Datepicker />
      </FormItem>
      <FormItem>
        <FormItemLabel>Switch</FormItemLabel>
        <FormItemDescription>Enable it?</FormItemDescription>
        <Switch />
      </FormItem>
      <FormItem>
        <FormItemLabel>Radio</FormItemLabel>
        <FormItemDescription>Check me</FormItemDescription>
        <RadioGroup>
          <Radio />
        </RadioGroup>
      </FormItem>
      <FormItem>
        <FormItemLabel>Checkbox</FormItemLabel>
        <FormItemDescription>Check me </FormItemDescription>
        <Checkbox />
      </FormItem>
    </div>
  )
}
