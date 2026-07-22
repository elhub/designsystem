import { Checkbox, FormItem, VerticalSpace } from '@elhub/ds-components'

export const CheckboxSizesExample = () => {
  return (
    <>
      <FormItem size='large'>
        <Checkbox>Large cake</Checkbox>
      </FormItem>

      <VerticalSpace size='0.5' />
      <FormItem size='medium'>
        <Checkbox>Medium cake</Checkbox>
      </FormItem>

      <VerticalSpace size='0.5' />
      <FormItem size='small'>
        <Checkbox>Small cake</Checkbox>
      </FormItem>
    </>
  )
}
