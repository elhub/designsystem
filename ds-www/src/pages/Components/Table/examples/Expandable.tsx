import { Table } from '@elhub/ds-components'

const recipes = [
  { recipe: 'Banana cake', difficulty: 'Beginner', time: 20 },
  { recipe: 'Chocolate cake', difficulty: 'Medium', time: 30 },
  { recipe: 'Cheesecake', difficulty: 'Expert', time: 40 }
]

export const TableExpandableExample = () => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell scope='col'>Recipe</Table.HeaderCell>
          <Table.HeaderCell scope='col'>Difficulty</Table.HeaderCell>
          <Table.HeaderCell scope='col'>Time</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {recipes.map(({ recipe, difficulty, time }) => (
          <Table.ExpandableRow key={recipe} content='Content for the expandable row'>
            <Table.HeaderCell scope='row'>{recipe}</Table.HeaderCell>
            <Table.DataCell>{difficulty}</Table.DataCell>
            <Table.DataCell>{time} minutes</Table.DataCell>
          </Table.ExpandableRow>
        ))}
      </Table.Body>
    </Table>
  )
}
