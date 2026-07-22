import { FormItem, FormItemLabel, Textarea } from '@elhub/ds-components'

export const TextAreaErrorExample = () => {
  return (
    <>
      <FormItem error='You need to write something'>
        <FormItemLabel>Error</FormItemLabel>
        <Textarea />
      </FormItem>
    </>
  )
}
