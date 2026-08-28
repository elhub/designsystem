import { ErrorPage } from '@elhub/ds-components'
import { useLocation } from 'react-router-dom'

export default function ErrorPageExample() {
  const location = useLocation()

  return (
    <ErrorPage
      document={{ title: 'doc.title', description: 'doc.desc' }}
      page={{
        title: 'Something went wrong',
        description: 'An unexpected error occurred.',
        illustrationTitle: 'Error illustration'
      }}
      error={new Error('Example error')}
      location={location}
    />
  )
}
