import { Search } from '@elhub/ds-components'
import { useState } from 'react'

export const SearchControlledExample = () => {
  const [message, setMessage] = useState('Controlled search')

  return (
    <>
      <Search
        clearButtonLabel='Clear'
        label='Controlled search'
        hideLabel={false}
        placeholder={message}
        onSubmit={(value) => {
          if (value) {
            setMessage(`Submit: ${value}`)
          }
        }}
        onClear={() => {
          setMessage('Cleared')
        }}
        onChange={(value) => {
          if (value) {
            setMessage(`Change: ${value}`)
          }
        }}
      />
    </>
  )
}
