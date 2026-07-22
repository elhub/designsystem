import { BodyText, FormItem, FormItemLabel, Select, SelectContent, SelectItem } from '@elhub/ds-components'
import { useState } from 'react'

export const SelectControlledExample = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <FormItem>
        <FormItemLabel>Select a cake</FormItemLabel>
        <Select
          value={value}
          onValueChange={(selectedValue) => {
            setValue(selectedValue)
          }}
          placeholder='Select a cake'
        >
          <SelectContent>
            <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
            <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
            <SelectItem value='carrotCake'>Carrot cake</SelectItem>
          </SelectContent>
        </Select>
        <BodyText>Selected cake: {value}</BodyText>
      </FormItem>
    </>
  )
}
