import { FormItem, FormItemLabel, Textarea } from '@elhub/ds-components'

export const TextAreaHiddenLabelExample = () => {
  return (
    <>
      <FormItem>
        <FormItemLabel hideLabel>Hidden label</FormItemLabel>
        <Textarea />
      </FormItem>
    </>
  )
}
