import { type SortState, Table } from '@elhub/ds-components'
import { useState } from 'react'

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
  const [sort, setSort] = useState<SortState>()

  const handleSort = (sortKey?: string) => {
    if (!sortKey) return

    setSort(
      sort && sortKey === sort.orderBy && sort.direction === 'descending'
        ? undefined
        : {
            orderBy: sortKey,
            direction:
              sort && sortKey === sort.orderBy && sort.direction === 'ascending' ? 'descending' : 'ascending'
          }
    )
  }

  const sortedRecipes = recipes.slice().sort((firstRecipe, secondRecipe) => {
    if (!sort) return 1

    const orderBy = sort.orderBy as keyof Recipe
    const firstValue = firstRecipe[orderBy]
    const secondValue = secondRecipe[orderBy]
    let comparison = 0
    if (firstValue < secondValue) comparison = -1
    if (firstValue > secondValue) comparison = 1

    return sort.direction === 'ascending' ? comparison : -comparison
  })

  return (
    <Table sort={sort} onSortChange={handleSort}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader sortable sortKey='recipe'>
            Recipe
          </Table.ColumnHeader>
          <Table.ColumnHeader>Difficulty</Table.ColumnHeader>
          <Table.ColumnHeader sortable sortKey='time'>
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
  )
}
