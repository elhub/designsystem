import { FormItem, FormItemLabel, Switch } from '@elhub/ds-components'

export const SwitchSizesExample = () => (
  <div style={{ display: 'flex', gap: 24 }}>
    <FormItem id='large' size='large'>
      <FormItemLabel>Large spice</FormItemLabel>
      <Switch>Se</Switch>
    </FormItem>
    <FormItem id='medium' size='medium'>
      <FormItemLabel>Medium spice</FormItemLabel>
      <Switch>Se</Switch>
    </FormItem>
    <FormItem id='small' size='small'>
      <FormItemLabel>Small spice</FormItemLabel>
      <Switch>Se</Switch>
    </FormItem>
  </div>
)
