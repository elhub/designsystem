import { Checkbox, FormItem } from '@elhub/ds-components'

export const CheckboxErrorExample = () => {
  return (
    <>
      <FormItem error='You need to check it'>
        <Checkbox>Bake a cake today</Checkbox>
      </FormItem>
    </>
  )
}
