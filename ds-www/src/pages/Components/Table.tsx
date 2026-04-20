import { BodyText, Checkbox, Heading, SortState, Table, VerticalSpace } from '@elhub/ds-components'
import { IconBean } from '@elhub/ds-icons'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsTable = () => {
  const [size, setSize] = useState<'small' | 'medium'>('medium')
  const [sort, setSort] = useState<SortState | undefined>()
  const [selectedRows, setSelectedRows] = React.useState<
    { recipe: string; difficulty: string; time: number }[]
  >([])

  const toggleSelectedRow = (value: { recipe: string; difficulty: string; time: number }) => {
    setSelectedRows(
      selectedRows.includes(value) ? selectedRows.filter((id) => id !== value) : [...selectedRows, value]
    )
  }

  const handleSort = (sortKey: string) => {
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

  const data = [
    { recipe: 'Banana cake', difficulty: 'Beginner', time: 20 },
    { recipe: 'Chocolate cake', difficulty: 'Medium', time: 30 },
    { recipe: 'Cheesecake', difficulty: 'Expert', time: 40 }
  ]

  const sortData = data.slice().sort((a, b) => {
    if (sort) {
      const comparator = (cA: unknown, cB: unknown, orderBy: unknown) => {
        if (orderBy === 'time') {
          return a.time < b.time ? -1 : 1
        }
        // @ts-expect-error untyped sort for table
        if (cB[orderBy] < cA[orderBy] || cB[orderBy] === undefined) {
          return -1
        }
        // @ts-expect-error untyped sort for table
        if (cB[orderBy] > cA[orderBy]) {
          return 1
        }
        return 0
      }

      return sort.direction === 'ascending' ? comparator(b, a, sort.orderBy) : comparator(a, b, sort.orderBy)
    }
    return 1
  })

  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='table' level='1' spacing>
        Table
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        The <code>Table</code> component has active headers for sorting, expandable rows, and zebra stripes.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading classRecipe='toc' size='medium' id='table-default' level='2' spacing>
        Default component
      </Heading>

      <VerticalSpace />

      <BodyText>
        This is how a basic <code>Table</code> component and sub-components should be used.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Table } from '@elhub/ds-components'

const Component = () => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader scope='col'>
            Recipe
          </Table.ColumnHeader>
          <Table.ColumnHeader scope='col'>
            Difficulty
          </Table.ColumnHeader>
          <Table.ColumnHeader scope='col'>
            Time
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ recipe, difficulty, time }) => (
          <Table.Row key={recipe}>
            <Table.HeaderCell scope='row'>
            <Checkbox />
            <IconBean/>
              {recipe}
            </Table.HeaderCell>
            <Table.DataCell>
              {difficulty}
            </Table.DataCell>
            <Table.DataCell>
              {time} minutes
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}`}
      >
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader scope='col'>Recipe</Table.ColumnHeader>
              <Table.ColumnHeader scope='col'>Difficulty</Table.ColumnHeader>
              <Table.ColumnHeader scope='col'>Time</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(({ recipe, difficulty, time }) => (
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
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading classRecipe='toc' size='medium' id='table-size' level='2' spacing>
        Size
      </Heading>

      <BodyText>
        The <code>size</code> prop can be one of the following 2 strings:
      </BodyText>

      <CodeDiv expand={false} spacing>
        export type TableSize = 'medium' | 'small'
      </CodeDiv>

      <DemoableDiv
        alignContent='center'
        code={`import { Table } from '@elhub/ds-components'

const Component = () => {
  const [size, setSize] = useState('medium')  
  return (
    <>  
    <Select value={size} onChange={(e) => setSize(e.target.value)}>
      <option>medium</option>
      <option>small</option>
    </Select>
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader scope='col'>
            Recipe
          </Table.ColumnHeader>
          <Table.ColumnHeader scope='col'>
            Difficulty
          </Table.ColumnHeader>
          <Table.ColumnHeader scope='col'>
            Time
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ recipe, difficulty, time }) => (
          <Table.Row key={recipe}>
            <Table.HeaderCell scope='row'>
              {recipe}
            </Table.HeaderCell>
            <Table.DataCell>
              {difficulty}
            </Table.DataCell>
            <Table.DataCell>
              {time} minutes
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </>
  )
}`}
      >
        <select
          value={size}
          onChange={(e) => {
            setSize(e.target.value as 'medium' | 'small')
          }}
        >
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
            {data.map(({ recipe, difficulty, time }) => (
              <Table.Row key={recipe}>
                <Table.HeaderCell scope='row'>{recipe}</Table.HeaderCell>
                <Table.DataCell>{difficulty}</Table.DataCell>
                <Table.DataCell> {time} minutes </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading classRecipe='toc' size='medium' id='table-sort' level='2' spacing>
        Sort
      </Heading>

      <VerticalSpace />

      <BodyText>
        Set the <code>sort</code> prop and <code>onSortChange</code> to handle the sort requests. You also
        have to add the <code>sortable</code> prop to the column headers you want to allow to be sorted by.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Table } from '@elhub/ds-components'

const Component = () => {
  const [sort, setSort] = useState<any>()  
  const handleSort = (sortKey: string) => 
    setSort(
      sort && sortKey === sort.orderBy &&
      sort.direction === "descending"
        ? undefined
        : {
          orderBy: sortKey,
          direction:  sort && 
            sortKey === sort.orderBy &&
            sort.direction === 'ascending'
              ? 'descending'
              : 'ascending'
        }
    )
 
  let sortData = data.slice().sort((a, b) => {
    if (sort) {
      const comparator = (a: any, b: any, orderBy: any) => {
         if (orderBy === 'time') {
          return a.time < b.time ? -1 : 1
        }
        if (b[orderBy] < a[orderBy] || b[orderBy] === undefined) {
          return -1
        }
        if (b[orderBy] > a[orderBy]) {
          return 1
        }
        return 0
      }

      return sort.direction === "ascending"
        ? comparator(b, a, sort.orderBy)
        : comparator(a, b, sort.orderBy)
    }
    return 1
  })

  return (
      <Table 
        sort={sort}
        onSortChange={handleSort}
      >
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader sortable sortKey='recipe'>
            Recipe
          </Table.ColumnHeader>
          <Table.ColumnHeader scope='col'>
            Difficulty
          </Table.ColumnHeader>
          <Table.ColumnHeader sortable sortKey='time'>
            Time
          </Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortData.map(({ recipe, difficulty, time }) => (
          <Table.Row key={recipe}>
            <Table.HeaderCell scope='row'>
              {recipe}
            </Table.HeaderCell>
            <Table.DataCell>
             {difficulty}
            </Table.DataCell>
            <Table.DataCell>
              {time} minutes
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    
  )
}`}
      >
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
            {sortData.map(({ recipe, difficulty, time }) => (
              <Table.Row key={recipe}>
                <Table.HeaderCell scope='row'>{recipe}</Table.HeaderCell>
                <Table.DataCell>{difficulty}</Table.DataCell>
                <Table.DataCell>{time} minutes</Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading classRecipe='toc' size='medium' id='table-selectable' level='2' spacing>
        Selectable
      </Heading>

      <BodyText>
        You can have selectable rows, and control the table to get/set the changes being made.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Table } from '@elhub/ds-components'

const Component = () => {
  const [selectedRows, setSelectedRows] = React.useState([])

  const toggleSelectedRow = (value) =>
    setSelectedRows((list) =>
      list.includes(value)
        ? list.filter((id) => id !== value)
        : [...list, value]
    )

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.DataCell>
            <Checkbox
              size="medium"
              checked={
                selectedRows.length === data.length
              }
              indeterminate={
                selectedRows.length &&
                selectedRows.length !== data.length
              }
              onChange={() => {
                selectedRows.length
                  ? setSelectedRows([])
                  : setSelectedRows(
                    data.map(({ difficulty }) => difficulty)
                  )
              }}
              hideLabel
            >
              {""}
            </Checkbox>
          </Table.DataCell>
          <Table.HeaderCell scope="col">
            Recipe
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            Difficulty
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            Time
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(({ recipe, difficulty, time }) => {
          return (
            <Table.Row
              key={recipe}
              selected={selectedRows.includes(difficulty)}
            >
              <Table.DataCell>
                <Checkbox
                  size={props?.size}
                  hideLabel
                  checked={selectedRows.includes(difficulty)}
                  onChange={() => {
                    toggleSelectedRow(difficulty)
                  }}
                  aria-labelledby="id{difficulty}"
                >
                  {" "}
                </Checkbox>
              </Table.DataCell>
             
                <Table.HeaderCell scope='row'>
                  {recipe}
                </Table.HeaderCell>
                <Table.DataCell>
                  {difficulty}
                </Table.DataCell>
                <Table.DataCell>
                  {time} minutes
                </Table.DataCell>
              </Table.Row>
        
          )
        })}
      </Table.Body>
    </Table>
  )
}`}
      >
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.DataCell>
                <Checkbox
                  size='small'
                  checked={selectedRows.length === data.length}
                  indeterminate={!!selectedRows.length && selectedRows.length !== data.length}
                  onChange={() => {
                    if (selectedRows.length) {
                      setSelectedRows([])
                    } else {
                      setSelectedRows(data.map(({ difficulty }) => difficulty))
                    }
                  }}
                  hideLabel
                />
              </Table.DataCell>
              <Table.HeaderCell scope='col'>Recipe</Table.HeaderCell>
              <Table.HeaderCell scope='col'>Difficulty</Table.HeaderCell>
              <Table.HeaderCell scope='col'>Time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(({ recipe, difficulty, time }) => {
              return (
                <Table.Row key={recipe} selected={selectedRows.includes(difficulty)}>
                  <Table.DataCell>
                    <Checkbox
                      hideLabel
                      checked={selectedRows.includes(difficulty)}
                      onChange={() => {
                        toggleSelectedRow(difficulty)
                      }}
                      aria-labelledby='id{difficulty}'
                    >
                      {' '}
                    </Checkbox>
                  </Table.DataCell>

                  <Table.HeaderCell scope='row'>{recipe}</Table.HeaderCell>
                  <Table.DataCell>{difficulty}</Table.DataCell>
                  <Table.DataCell>{time} minutes</Table.DataCell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading classRecipe='toc' size='medium' id='table-expandable' level='2' spacing>
        Expandable
      </Heading>

      <DemoableDiv
        alignContent='center'
        code={`import { Table } from '@elhub/ds-components'

const Component = () => {

  return (
     <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell scope='col'>
              Recipe
            </Table.HeaderCell>
            <Table.HeaderCell scope='col'>
              Difficulty
            </Table.HeaderCell>
            <Table.HeaderCell scope='col'>
              Time
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(({ recipe, difficulty, time }) => {
            return (
              <Table.ExpandableRow
                key={recipe}
                content='Content for the expandable row'
              >
                <Table.HeaderCell scope='row'>
                  {recipe}
                </Table.HeaderCell>
                <Table.DataCell>
                  {difficulty}
                </Table.DataCell>
                <Table.DataCell>
                  {time} minutes
                </Table.DataCell>
              </Table.ExpandableRow>
            )
          })}
        </Table.Body>
      </Table>
  )
}`}
      >
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
            {data.map(({ recipe, difficulty, time }) => {
              return (
                <Table.ExpandableRow key={recipe} content='Content for the expandable row'>
                  <Table.HeaderCell scope='row'>{recipe}</Table.HeaderCell>
                  <Table.DataCell>{difficulty}</Table.DataCell>
                  <Table.DataCell>{time} minutes</Table.DataCell>
                </Table.ExpandableRow>
              )
            })}
          </Table.Body>
        </Table>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading classRecipe='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>
      <VerticalSpace size='2' />

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Recipe</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets table size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>sort</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>SortState</code>
            </Table.DataCell>
            <Table.DataCell>Sets search sort</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsTable
