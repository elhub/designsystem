import { Checkbox, Table } from '@elhub/ds-components'
import { useState } from 'react'

const recipes = [
  { recipe: 'Banana cake', difficulty: 'Beginner', time: 20 },
  { recipe: 'Chocolate cake', difficulty: 'Medium', time: 30 },
  { recipe: 'Cheesecake', difficulty: 'Expert', time: 40 }
]

export const TableSelectableExample = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const toggleSelectedRow = (difficulty: string) => {
    setSelectedRows((currentRows) =>
      currentRows.includes(difficulty)
        ? currentRows.filter((selectedDifficulty) => selectedDifficulty !== difficulty)
        : [...currentRows, difficulty]
    )
  }

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.DataCell>
            <Checkbox
              size='small'
              checked={selectedRows.length === recipes.length}
              indeterminate={!!selectedRows.length && selectedRows.length !== recipes.length}
              onChange={() =>
                setSelectedRows(selectedRows.length ? [] : recipes.map(({ difficulty }) => difficulty))
              }
              hideLabel
            />
          </Table.DataCell>
          <Table.HeaderCell scope='col'>Recipe</Table.HeaderCell>
          <Table.HeaderCell scope='col'>Difficulty</Table.HeaderCell>
          <Table.HeaderCell scope='col'>Time</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {recipes.map(({ recipe, difficulty, time }) => (
          <Table.Row key={recipe} selected={selectedRows.includes(difficulty)}>
            <Table.DataCell>
              <Checkbox
                hideLabel
                checked={selectedRows.includes(difficulty)}
                onChange={() => toggleSelectedRow(difficulty)}
                aria-labelledby='id{difficulty}'
              >
                {' '}
              </Checkbox>
            </Table.DataCell>
            <Table.HeaderCell scope='row'>{recipe}</Table.HeaderCell>
            <Table.DataCell>{difficulty}</Table.DataCell>
            <Table.DataCell>{time} minutes</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
