import { ErrorPage } from '@elhub/ds-components'

export default function ErrorPageExample() {
  return (
    <ErrorPage
      page={{
        title: 'Something went wrong',
        description: 'An unexpected error occurred.',
        illustrationTitle: 'Error illustration'
      }}
    />
  )
}
