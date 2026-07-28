import {
  Checkbox,
  CheckboxGroup,
  FlexEndDiv,
  FormItem,
  FormItemLabel,
  HorizontalSpace
} from '@elhub/ds-components'

export const CheckboxGroupDisabledExample = () => {
  return (
    <>
      <FlexEndDiv>
        <FormItem inputProps={{ disabled: true }}>
          <FormItemLabel>Disabled group</FormItemLabel>
          <CheckboxGroup>
            <Checkbox value='Eggs'>Eggs</Checkbox>
            <Checkbox value='Milk'>Milk</Checkbox>
            <Checkbox value='Coffee'>Coffee</Checkbox>
          </CheckboxGroup>
        </FormItem>
        <HorizontalSpace size='2' />
        <FormItem>
          <FormItemLabel>Partially disabled</FormItemLabel>
          <CheckboxGroup>
            <Checkbox value='Eggs'>Eggs</Checkbox>
            <Checkbox value='Milk' disabled>
              No more milk
            </Checkbox>
            <Checkbox value='Coffee'>Coffee</Checkbox>
          </CheckboxGroup>
        </FormItem>
      </FlexEndDiv>
    </>
  )
}
