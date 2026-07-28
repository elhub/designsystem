import {
  Checkbox,
  Combobox,
  Datepicker,
  FormItem,
  FormItemLabel,
  Heading,
  Radio,
  RadioGroup,
  Select,
  SelectContent,
  SelectItem,
  Switch,
  TextField,
  type FormItemSize
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

const FormItemSizeExample = ({ size }: { size: FormItemSize }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const combobox = (
    <FormItem size={size}>
      <FormItemLabel>Combobox</FormItemLabel>
      <Combobox
        options={options}
        onToggleSelected={(option: string, isSelected: boolean) =>
          setSelectedOptions(isSelected ? [option] : [])
        }
        selectedOptions={options.filter((option) => selectedOptions.includes(option.value))}
      />
    </FormItem>
  )

  const select = (
    <FormItem size={size}>
      <FormItemLabel>Choose a cake</FormItemLabel>
      <Select placeholder='Select a cake'>
        <SelectContent>
          <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
          <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
          <SelectItem value='carrotCake'>Carrot cake</SelectItem>
        </SelectContent>
      </Select>
    </FormItem>
  )

  return (
    <div>
      <Heading size='small'>{size[0].toUpperCase() + size.slice(1)}</Heading>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
        <FormItem size={size}>
          <FormItemLabel>Provide some feedback</FormItemLabel>
          <TextField />
        </FormItem>
        {size === 'medium' ? select : combobox}
        {size === 'medium' ? combobox : select}
        <FormItem size={size} required>
          <FormItemLabel>Choose a date</FormItemLabel>
          <Datepicker />
        </FormItem>
        <div style={{ display: 'flex', gap: 16 }}>
          <FormItem size={size}>
            <FormItemLabel>Switch</FormItemLabel>
            <Switch />
          </FormItem>
          <FormItem size={size}>
            <FormItemLabel>Radio</FormItemLabel>
            <RadioGroup>
              <Radio />
            </RadioGroup>
          </FormItem>
          <FormItem size={size}>
            <FormItemLabel>Checkbox</FormItemLabel>
            <Checkbox />
          </FormItem>
        </div>
      </div>
    </div>
  )
}

export const FormItemSizesExample = () => (
  <div style={{ display: 'grid', gap: 24 }}>
    <FormItemSizeExample size='small' />
    <FormItemSizeExample size='medium' />
    <FormItemSizeExample size='large' />
  </div>
)
