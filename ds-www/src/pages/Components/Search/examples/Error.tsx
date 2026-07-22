import { Search } from '@elhub/ds-components'

export const SearchErrorExample = () => {
  return (
    <>
      <Search
        clearButtonLabel='Clear'
        label='Error search'
        placeholder='Error search'
        error='Search box is empty'
      />
    </>
  )
}
