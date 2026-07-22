import { BodyText, Checkbox, FormItem } from '@elhub/ds-components'
import { useState, type ChangeEvent } from 'react'

export const CheckboxControlledExample = () => {
  const [baked, setBaked] = useState(false)

  return (
    <>
      <FormItem>
        <Checkbox
          checked={baked}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setBaked(e.target.checked)
          }}
        >
          Bake a cake today
        </Checkbox>
      </FormItem>
      <BodyText>You {!baked && 'do not'} have a cake</BodyText>
    </>
  )
}
