import { FormItem, FormItemLabel, Textarea } from '@elhub/ds-components'
import { useState } from 'react'

export const TextAreaControlledExample = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <FormItem>
        <FormItemLabel>
          Feedback ({value.length} character{value.length === 1 ? '' : 's'})
        </FormItemLabel>
        <Textarea
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </FormItem>
    </>
  )
}
