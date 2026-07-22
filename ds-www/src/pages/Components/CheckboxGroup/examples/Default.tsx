import { Checkbox, CheckboxGroup, FormItem, FormItemLabel } from '@elhub/ds-components'

export const CheckboxGroupDefaultExample = () => {
  return (
    <>
      <FormItem>
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
