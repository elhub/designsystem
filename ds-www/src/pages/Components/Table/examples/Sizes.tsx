import { Table } from '@elhub/ds-components'
import { useState } from 'react'

const recipes = [
  { recipe: 'Banana cake', difficulty: 'Beginner', time: 20 },
  { recipe: 'Chocolate cake', difficulty: 'Medium', time: 30 },
  { recipe: 'Cheesecake', difficulty: 'Expert', time: 40 }
]

export const TableSizesExample = () => {
  const [size, setSize] = useState<'small' | 'medium'>('medium')

  return (
    <>
      <select value={size} onChange={(event) => setSize(event.target.value as 'medium' | 'small')}>
        <option>medium</option>
        <option>small</option>
      </select>
      <Table size={size}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader scope='col'>Recipe</Table.ColumnHeader>
            <Table.ColumnHeader scope='col'>Difficulty</Table.ColumnHeader>
            <Table.ColumnHeader scope='col'>Time</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {recipes.map(({ recipe, difficulty, time }) => (
            <Table.Row key={recipe}>
              <Table.HeaderCell scope='row'>{recipe}</Table.HeaderCell>
              <Table.DataCell>{difficulty}</Table.DataCell>
              <Table.DataCell> {time} minutes </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}
