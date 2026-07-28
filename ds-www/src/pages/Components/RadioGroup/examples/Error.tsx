import { FormItem, FormItemLabel, Radio, RadioGroup } from '@elhub/ds-components'

export const RadioGroupErrorExample = () => {
  return (
    <>
      <FormItem error='Please select an item'>
        <FormItemLabel>Shopping list</FormItemLabel>
        <RadioGroup>
          <Radio value='Eggs'>Eggs</Radio>
          <Radio value='Milk'>Milk</Radio>
          <Radio value='Coffee'>Coffee</Radio>
        </RadioGroup>
      </FormItem>
    </>
  )
}
