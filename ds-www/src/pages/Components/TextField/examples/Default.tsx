import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

export const TextFieldDefaultExample = () => {
  return (
    <>
      <FormItem id='feedback'>
        <FormItemLabel>Provide some feedback</FormItemLabel>
        <TextField />
      </FormItem>
    </>
  )
}
