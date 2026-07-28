import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

export const TextFieldDisabledExample = () => {
  return (
    <>
      <FormItem id='disabled' inputProps={{ disabled: true }}>
        <FormItemLabel>Disabled</FormItemLabel>
        <TextField />
      </FormItem>
    </>
  )
}
