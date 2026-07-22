import { FormItem, FormItemLabel, Radio, RadioGroup } from '@elhub/ds-components'

export const RadioGroupDefaultExample = () => {
  return (
    <>
      <FormItem>
        <FormItemLabel>Shopping list</FormItemLabel>
        <RadioGroup>
          <Radio value='eggs'>Eggs</Radio>
          <Radio value='milk'>Milk</Radio>
          <Radio value='coffee'>Coffee</Radio>
        </RadioGroup>
      </FormItem>
    </>
  )
}
