import { Alert, VerticalSpace } from '@elhub/ds-components'

export const AlertSizesExample = () => {
  return (
    <>
      <Alert variant='info' size='medium'>
        This is a medium size recipe
      </Alert>
      <VerticalSpace />
      <Alert variant='info' size='small'>
        This is a small size recipe
      </Alert>
    </>
  )
}
