import { FormItem, FormItemLabel, Select, SelectContent, SelectItem } from '@elhub/ds-components'

export const SelectDisabledExample = () => {
  return (
    <>
      <FormItem inputProps={{ disabled: true }}>
        <FormItemLabel>Disabled select</FormItemLabel>
        <Select placeholder='This is disabled'>
          <SelectContent>
            <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
            <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
            <SelectItem value='carrotCake'>Carrot cake</SelectItem>
          </SelectContent>
        </Select>
      </FormItem>
    </>
  )
}
