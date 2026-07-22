import { Checkbox, CheckboxGroup, FlexStartDiv, FormItem, FormItemLabel } from '@elhub/ds-components'

export const CheckboxGroupSizesExample = () => {
  return (
    <>
      <FlexStartDiv style={{ gap: 24 }}>
        <FormItem size='large'>
          <FormItemLabel>Large size list</FormItemLabel>
          <CheckboxGroup>
            <Checkbox value='Eggs'>Eggs</Checkbox>
            <Checkbox value='Milk'>Milk</Checkbox>
            <Checkbox value='Coffee'>Coffee</Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem size='medium'>
          <FormItemLabel>Medium size list</FormItemLabel>
          <CheckboxGroup>
            <Checkbox value='Eggs'>Eggs</Checkbox>
            <Checkbox value='Milk'>Milk</Checkbox>
            <Checkbox value='Coffee'>Coffee</Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem size='small'>
          <FormItemLabel>Small size list</FormItemLabel>
          <CheckboxGroup>
            <Checkbox value='Eggs'>Eggs</Checkbox>
            <Checkbox value='Milk'>Milk</Checkbox>
            <Checkbox value='Coffee'>Coffee</Checkbox>
          </CheckboxGroup>
        </FormItem>
      </FlexStartDiv>
    </>
  )
}
