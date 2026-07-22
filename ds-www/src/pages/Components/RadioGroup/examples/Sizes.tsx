import { FormItem, FormItemLabel, Radio, RadioGroup } from '@elhub/ds-components'

export const RadioGroupSizesExample = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: 16 }}>
        <FormItem size='large'>
          <FormItemLabel>Large shopping list</FormItemLabel>
          <RadioGroup>
            <Radio value='Eggs'>Eggs</Radio>
            <Radio value='Milk'>Milk</Radio>
            <Radio value='Coffee'>Coffee</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem size='medium'>
          <FormItemLabel>Medium shopping list</FormItemLabel>
          <RadioGroup>
            <Radio value='Eggs'>Eggs</Radio>
            <Radio value='Milk'>Milk</Radio>
            <Radio value='Coffee'>Coffee</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem size='small'>
          <FormItemLabel>Small shopping list</FormItemLabel>
          <RadioGroup>
            <Radio value='Eggs'>Eggs</Radio>
            <Radio value='Milk'>Milk</Radio>
            <Radio value='Coffee'>Coffee</Radio>
          </RadioGroup>
        </FormItem>
      </div>
    </>
  )
}
