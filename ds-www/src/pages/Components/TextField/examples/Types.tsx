import { Column, FormItem, FormItemLabel, Row, TextField, VerticalSpace } from '@elhub/ds-components'

export const TextFieldTypesExample = () => {
  return (
    <>
      <Row>
        <Column>
          <FormItem id='email'>
            <FormItemLabel>Email</FormItemLabel>
            <TextField type='email' />
          </FormItem>
          <VerticalSpace />
          <FormItem id='number'>
            <FormItemLabel>Number</FormItemLabel>
            <TextField type='number' />
          </FormItem>
          <VerticalSpace />
          <FormItem id='password'>
            <FormItemLabel>Password</FormItemLabel>
            <TextField type='password' />
          </FormItem>
        </Column>
        <Column>
          <FormItem id='tel'>
            <FormItemLabel>Telephone</FormItemLabel>
            <TextField type='tel' />
          </FormItem>
          <VerticalSpace />
          <FormItem id='text'>
            <FormItemLabel>Text</FormItemLabel>
            <TextField type='text' />
          </FormItem>
          <VerticalSpace />
          <FormItem id='url'>
            <FormItemLabel>URL</FormItemLabel>
            <TextField type='url' />
          </FormItem>
        </Column>
      </Row>
    </>
  )
}
