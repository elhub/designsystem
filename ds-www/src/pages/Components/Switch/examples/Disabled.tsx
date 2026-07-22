import { FormItem, FormItemLabel, Switch } from '@elhub/ds-components'

export const SwitchDisabledExample = () => (
  <FormItem inputProps={{ disabled: true }}>
    <FormItemLabel>No spicy sauce for you</FormItemLabel>
    <Switch />
  </FormItem>
)
