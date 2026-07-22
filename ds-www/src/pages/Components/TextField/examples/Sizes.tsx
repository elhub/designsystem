import { FlexStartDiv, FormItem, FormItemLabel, HorizontalSpace, TextField } from '@elhub/ds-components'

export const TextFieldSizesExample = () => {
  return (
    <>
      <FlexStartDiv>
        <FormItem id='small' size='small'>
          <FormItemLabel>Small</FormItemLabel>
          <TextField placeholder='Small' />
        </FormItem>
        <HorizontalSpace />
        <FormItem id='medium' size='medium'>
          <FormItemLabel>Medium</FormItemLabel>
          <TextField placeholder='Medium' />
        </FormItem>
        <HorizontalSpace />
        <FormItem id='large' size='large'>
          <FormItemLabel>Large</FormItemLabel>
          <TextField placeholder='Large' />
        </FormItem>
      </FlexStartDiv>
    </>
  )
}
