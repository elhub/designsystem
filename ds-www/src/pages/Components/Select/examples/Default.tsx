import { FormItem, FormItemLabel, Select, SelectContent, SelectItem } from '@elhub/ds-components'

export const SelectDefaultExample = () => {
  return (
    <>
      <FormItem>
        <FormItemLabel>Select a cake</FormItemLabel>
        <Select placeholder='Select a cake'>
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
