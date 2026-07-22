import { BodyText, FormItem, FormItemLabel, Switch } from '@elhub/ds-components'
import { useState } from 'react'

export const SwitchControlledExample = () => {
  const [spicy, setSpicy] = useState(false)

  return (
    <FormItem id='spicy'>
      <FormItemLabel>Add spicy sauce</FormItemLabel>
      <Switch checked={spicy} onChange={(event) => setSpicy(event.target.checked)} />
      <BodyText>Your taco will have {spicy ? 'spicy' : 'mild'} sauce</BodyText>
    </FormItem>
  )
}
