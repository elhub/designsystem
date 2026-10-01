import { AdvancedTabs, BodyText, VerticalSpace, Table } from '@elhub/ds-components'
import React from 'react'
import cl from 'clsx'

const tableData1 = [
  { measurmentId: '111112', gridArea: 'Strøm i heimen AS', gridOwner: 'Femte far i huset' },
  { measurmentId: '111113', gridArea: 'Strøm utenfor heimen AS', gridOwner: 'Sjette far i huset' },
  { measurmentId: '111114', gridArea: 'Strøm bortenfor heimen AS', gridOwner: 'Syvende far i huset' }
]

const Table1 = () => {
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
        {tableData1.map(({ measurmentId, gridArea, gridOwner }) => (
          <Table.Row key={measurmentId}>
            <Table.DataCell scope='row'>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>{measurmentId}</div>
            </Table.DataCell>
            <Table.DataCell>{gridArea}</Table.DataCell>
            <Table.DataCell> {gridOwner} </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

const tableData2 = [
  { measurmentId: '111112', direction: 'INN', missingIntervals: 2 },
  { measurmentId: '111113', direction: 'INN', missingIntervals: 1 },
  { measurmentId: '111114', direction: 'OUT', missingIntervals: 23 }
]
const Table2 = () => {
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
        {tableData2.map(({ measurmentId, direction, missingIntervals }) => (
          <Table.Row key={measurmentId}>
            <Table.DataCell scope='row'>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>{measurmentId}</div>
            </Table.DataCell>
            <Table.DataCell>{direction}</Table.DataCell>
            <Table.DataCell> {missingIntervals} </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export const AdvancedTabsGridPanelsExample = () => {
  return (
    <AdvancedTabs defaultValue='utveksling'>
      <AdvancedTabs.List>
        <AdvancedTabs.Tab value='utveksling'>
          <div>
            <BodyText as='span' size='small' className='eds-tabs__tab-inner' weight='bold'>
              Utveksling
            </BodyText>
            <VerticalSpace />
            <BodyText
              as='span'
              size='small'
              className={cl('eds-tabs__tab-inner', 'var(--eds-color-elhub-brand-green)')}
              weight='bold'
              style={{ color: 'green' }}
            >
              99,9923%
            </BodyText>
            <BodyText as='span' size='small' className='eds-tabs__tab-inner'>
              Målerverdier motatt
            </BodyText>
            <VerticalSpace />
            <BodyText
              as='span'
              color='eds-color-elhub-brand-green'
              size='small'
              className={cl('eds-tabs__tab-inner')}
            >
              23 Målepunkt mangler
            </BodyText>
          </div>
        </AdvancedTabs.Tab>
        <AdvancedTabs.Tab value='produksjon'>
          <div>
            <BodyText as='span' size='small' className='eds-tabs__tab-inner' weight='bold'>
              Produksjon
            </BodyText>
            <VerticalSpace />
            <BodyText
              as='span'
              size='small'
              className={cl('eds-tabs__tab-inner', 'var(--eds-color-elhub-brand-green)')}
              weight='bold'
              style={{ color: 'green' }}
            >
              98,2268%
            </BodyText>
            <BodyText as='span' size='small' className='eds-tabs__tab-inner'>
              Målerverdier motatt
            </BodyText>
            <VerticalSpace />
            <BodyText
              as='span'
              color='eds-color-elhub-brand-green'
              size='small'
              className={cl('eds-tabs__tab-inner')}
            >
              143 Målepunkt mangler
            </BodyText>
          </div>
        </AdvancedTabs.Tab>
        <AdvancedTabs.Tab value='other'>
          <div>
            <BodyText as='span' size='small' className='eds-tabs__tab-inner' weight='bold'>
              tabcontent2
            </BodyText>
            <VerticalSpace />
            <div>more text</div>
          </div>
        </AdvancedTabs.Tab>
      </AdvancedTabs.List>
      <AdvancedTabs.Panel value='utveksling'>
        <Table1 />
      </AdvancedTabs.Panel>
      <AdvancedTabs.Panel value='produksjon'>
        <Table2 />
      </AdvancedTabs.Panel>
      <AdvancedTabs.Panel value='other'>No data available</AdvancedTabs.Panel>
    </AdvancedTabs>
  )
}
