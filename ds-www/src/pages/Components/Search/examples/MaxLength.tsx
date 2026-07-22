import { Search } from '@elhub/ds-components'

export const SearchMaxLengthExample = () => {
  return (
    <>
      <Search
        clearButtonLabel='Clear'
        label='no more than 5 chars'
        placeholder='only 5'
        hideLabel={false}
        inputProps={{ maxLength: 5 }}
      />
    </>
  )
}
