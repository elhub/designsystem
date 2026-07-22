import { FormItem, FormItemDescription, FormItemLabel, TextField } from '@elhub/ds-components'

export const FormItemRequiredExample = () => (
  <div>
    <FormItem inputProps={{ required: true }}>
      <FormItemLabel>Provide some feedback</FormItemLabel>
      <FormItemDescription>Feedback is required</FormItemDescription>
      <TextField />
    </FormItem>
  </div>
)
