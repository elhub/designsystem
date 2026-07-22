import { FormItem, FormItemLabel, Radio, RadioGroup } from '@elhub/ds-components'

export const RadioGroupDisabledExample = () => {
  return (
    <>
      <div style={{ display: 'flex', gap: 24 }}>
        <FormItem inputProps={{ disabled: true }}>
          <FormItemLabel>Disabled group</FormItemLabel>
          <RadioGroup>
            <Radio value='Eggs'>Eggs</Radio>
            <Radio value='Milk'>Milk</Radio>
            <Radio value='Coffee'>Coffee</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <FormItemLabel>Partially disabled</FormItemLabel>
          <RadioGroup>
            <Radio value='Eggs'>Eggs</Radio>
            <Radio value='Milk' disabled>
              No more milk
            </Radio>
            <Radio value='Coffee'>Coffee</Radio>
          </RadioGroup>
        </FormItem>
      </div>
    </>
  )
}
