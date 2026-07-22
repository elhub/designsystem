import { FormItem, FormItemLabel, Textarea } from '@elhub/ds-components'

export const TextAreaDefaultExample = () => {
  return (
    <>
      <FormItem>
        <FormItemLabel>Feedback</FormItemLabel>
        <Textarea placeholder='Placeholder text' />
      </FormItem>
    </>
  )
}
