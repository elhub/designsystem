import { FormItem, FormItemLabel, Select, SelectContent, SelectItem } from '@elhub/ds-components'

export const SelectErrorExample = () => {
  return (
    <>
      <FormItem error='This field is required'>
        <FormItemLabel>Error state</FormItemLabel>
        <Select placeholder='You must select a cake'>
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
