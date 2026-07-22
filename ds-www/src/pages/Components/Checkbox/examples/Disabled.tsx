import { Checkbox, FormItem } from '@elhub/ds-components'

export const CheckboxDisabledExample = () => {
  return (
    <>
      <FormItem>
        <Checkbox checked disabled>
          You can't check me
        </Checkbox>
      </FormItem>
    </>
  )
}
