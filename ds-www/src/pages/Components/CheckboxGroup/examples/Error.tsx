import { Checkbox, CheckboxGroup, FormItem, FormItemLabel } from '@elhub/ds-components'

export const CheckboxGroupErrorExample = () => {
  return (
    <>
      <FormItem error='You have to check at least one item'>
        <FormItemLabel>Shopping list</FormItemLabel>
        <CheckboxGroup>
          <Checkbox value='Eggs'>Eggs</Checkbox>
          <Checkbox value='Milk'>Milk</Checkbox>
          <Checkbox value='Coffee'>Coffee</Checkbox>
        </CheckboxGroup>
      </FormItem>
    </>
  )
}
