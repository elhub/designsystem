import { Checkbox, Table } from '@elhub/ds-components'
import { IconBean } from '@elhub/ds-icons'

const recipes = [
  { recipe: 'Banana cake', difficulty: 'Beginner', time: 20 },
  { recipe: 'Chocolate cake', difficulty: 'Medium', time: 30 },
  { recipe: 'Cheesecake', difficulty: 'Expert', time: 40 }
]

export const TableDefaultExample = () => {
  return (
    <Table>
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
            <Table.DataCell scope='row'>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <Checkbox />
                <IconBean />
                {recipe}
              </div>
            </Table.DataCell>
            <Table.DataCell>{difficulty}</Table.DataCell>
            <Table.DataCell> {time} minutes </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
