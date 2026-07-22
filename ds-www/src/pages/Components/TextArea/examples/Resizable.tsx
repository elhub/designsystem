import { FormItem, FormItemLabel, Textarea } from '@elhub/ds-components'

export const TextAreaResizableExample = () => {
  return (
    <>
      <FormItem>
        <FormItemLabel>Resizable</FormItemLabel>
        <Textarea resize />
      </FormItem>
    </>
  )
}
