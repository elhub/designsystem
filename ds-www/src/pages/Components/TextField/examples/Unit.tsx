import { FlexStartDiv, FormItem, FormItemLabel, TextField } from '@elhub/ds-components'

export const TextFieldUnitExample = () => {
  return (
    <>
      <FlexStartDiv>
        <FormItem id='unit'>
          <FormItemLabel>Large</FormItemLabel>
          <TextField unit='kWh' />
        </FormItem>
      </FlexStartDiv>
    </>
  )
}
