import { FormItem, FormItemLabel, TextField } from '@elhub/ds-components'
import { useState } from 'react'

export const TextFieldControlledExample = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <FormItem id='feedback-car'>
        <FormItemLabel>
          Feedback ({value.length} character{value.length === 1 ? '' : 's'})
        </FormItemLabel>
        <TextField
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </FormItem>
    </>
  )
}
