import { FlexStartDiv, FormItem, FormItemLabel, TextField } from '@elhub/ds-components'
import { IconSearch } from '@elhub/ds-icons'

export const TextFieldIconExample = () => {
  return (
    <>
      <FlexStartDiv>
        <FormItem id='icon'>
          <FormItemLabel>Icon</FormItemLabel>
          <TextField icon={IconSearch} />
        </FormItem>
      </FlexStartDiv>
    </>
  )
}
