import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

export const TextFieldErrorExample = () => {
  return (
    <>
      <FormItem id='error' error='You need to write something'>
        <FormItemLabel>Error</FormItemLabel>
        <TextField />
      </FormItem>
    </>
  )
}
