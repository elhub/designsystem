import { FormItem, FormItemLabel, Select, SelectContent, SelectItem } from '@elhub/ds-components'
import { useState } from 'react'

export const SelectSizesExample = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <div style={{ display: 'flex', gap: 24 }}>
        <FormItem size='large'>
          <FormItemLabel>Select a large cake</FormItemLabel>
          <Select
            value={value}
            placeholder='Select a large cake'
            onValueChange={(selectedValue) => {
              setValue(selectedValue)
            }}
          >
            <SelectContent>
              <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
              <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
              <SelectItem value='carrotCake'>Carrot cake</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
        <FormItem size='medium'>
          <FormItemLabel>Select a medium cake</FormItemLabel>
          <Select
            value={value}
            placeholder='Select a medium cake'
            onValueChange={(selectedValue) => {
              setValue(selectedValue)
            }}
          >
            <SelectContent>
              <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
              <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
              <SelectItem value='carrotCake'>Carrot cake</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
        <FormItem size='small'>
          <FormItemLabel>Select a small cake</FormItemLabel>
          <Select
            value={value}
            placeholder='Select a small cake'
            onValueChange={(selectedValue) => {
              setValue(selectedValue)
            }}
          >
            <SelectContent>
              <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
              <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
              <SelectItem value='carrotCake'>Carrot cake</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      </div>
    </>
  )
}
