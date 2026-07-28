import { FormItem, FormItemLabel, Textarea } from '@elhub/ds-components'

export const TextAreaDisabledExample = () => {
  return (
    <>
      <FormItem>
        <FormItemLabel>Disabled</FormItemLabel>
        <Textarea placeholder='This is placeholder text' disabled />
      </FormItem>
    </>
  )
}
