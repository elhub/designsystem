import { BodyText, type SortState, Table } from '@elhub/ds-components'
import { useEffect, useState } from 'react'

interface Recipe {
  recipe: string
  difficulty: string
  time: number
}

const recipes: Recipe[] = [
  { recipe: 'Banana cake', difficulty: 'Beginner', time: 20 },
  { recipe: 'Chocolate cake', difficulty: 'Medium', time: 30 },
  { recipe: 'Cheesecake', difficulty: 'Expert', time: 40 }
]

export const TableSortableExample = () => {
  const [requestedSort, setRequestedSort] = useState<SortState>()
  const [appliedSort, setAppliedSort] = useState<SortState>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const isApplied =
      requestedSort?.orderBy === appliedSort?.orderBy && requestedSort?.direction === appliedSort?.direction

    if (isApplied) {
      return
    }

    setIsLoading(true)
    const timeout = window.setTimeout(() => {
      setAppliedSort(requestedSort)
      setIsLoading(false)
    }, 800)

    return () => window.clearTimeout(timeout)
  }, [appliedSort, requestedSort])

  const sortedRecipes = recipes.slice().sort((firstRecipe, secondRecipe) => {
    if (!appliedSort) return 0

    const orderBy = appliedSort.orderBy as keyof Recipe
    const firstValue = firstRecipe[orderBy]
    const secondValue = secondRecipe[orderBy]
    let comparison = 0
    if (firstValue < secondValue) comparison = -1
    if (firstValue > secondValue) comparison = 1

    return appliedSort.direction === 'ascending' ? comparison : -comparison
  })

  return (
    <>
      <BodyText aria-live='polite'>{isLoading ? 'Fetching sorted rows...' : 'Rows loaded'}</BodyText>
      <Table sort={requestedSort} onSortChange={setRequestedSort} aria-busy={isLoading}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader sortable sortKey='recipe'>
              Recipe
            </Table.ColumnHeader>
            <Table.ColumnHeader>Difficulty</Table.ColumnHeader>
            <Table.ColumnHeader sortable sortKey='time' sortType='number'>
              Time
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedRecipes.map(({ recipe, difficulty, time }) => (
            <Table.Row key={recipe}>
              <Table.HeaderCell scope='row'>{recipe}</Table.HeaderCell>
              <Table.DataCell>{difficulty}</Table.DataCell>
              <Table.DataCell>{time} minutes</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}
