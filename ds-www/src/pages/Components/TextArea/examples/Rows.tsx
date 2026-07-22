import { FormItem, FormItemLabel, Textarea } from '@elhub/ds-components'

export const TextAreaRowsExample = () => {
  return (
    <>
      <FormItem>
        <FormItemLabel>Shows 10 rows</FormItemLabel>
        <Textarea rows={10} value={[...new Array(20).keys()].map((i) => `Row ${i + 1}`).join('\n')} />
      </FormItem>
    </>
  )
}
