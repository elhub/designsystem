import { Alert, Button, VerticalSpace } from '@elhub/ds-components'
import { useState } from 'react'

export const AlertDismissibleExample = () => {
  const [showAlert, setShowAlert] = useState(true)

  return (
    <>
      <Button onClick={() => setShowAlert(true)}>Open oven</Button>
      <VerticalSpace />
      {showAlert && (
        <Alert variant='warning' onClose={() => setShowAlert(false)}>
          The cake is not baked yet
        </Alert>
      )}
    </>
  )
}
