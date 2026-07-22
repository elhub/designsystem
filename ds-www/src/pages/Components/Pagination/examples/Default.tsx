import { Pagination } from '@elhub/ds-components'
import { useState } from 'react'

export const PaginationDefaultExample = () => {
  const [page, setPage] = useState(1)

  return <Pagination count={9} page={page} onPageChange={setPage} prevText='Forrige' nextText='Neste' />
}
