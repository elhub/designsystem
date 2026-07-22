import { FormItem, FormItemLabel, Switch } from '@elhub/ds-components'

export const SwitchLoadingExample = () => (
  <FormItem id='adding'>
    <FormItemLabel>Adding sauce...</FormItemLabel>
    <Switch loading />
  </FormItem>
)
