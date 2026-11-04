import { AdvancedTabs, Table } from '@elhub/ds-components'
import React from 'react'

const exchangeRows = [
  { meteringPointId: '111112', gridOwner: 'Power at Home AS', gridArea: 'HEIMSTROM01' },
  { meteringPointId: '111113', gridOwner: 'Power Next Door AS', gridArea: 'HEIMSTROM02' },
  { meteringPointId: '111114', gridOwner: 'Power Far Away AS', gridArea: 'HEIMSTROM04' }
]

const productionRows = [
  { meteringPointId: '111112', direction: 'In', missingIntervals: 2 },
  { meteringPointId: '111113', direction: 'In', missingIntervals: 1 },
  { meteringPointId: '111114', direction: 'Out', missingIntervals: 23 }
]

export const AdvancedTabsDefaultExample = () => {
  return (
    <AdvancedTabs defaultValue='exchange'>
      <AdvancedTabs.List>
        <AdvancedTabs.Tab
          value='exchange'
          label='Exchange'
          status='success'
          statusLabel='On target'
          heading='99.9923%'
          subheading='Metering values received'
          detail='23 metering points missing'
        />
        <AdvancedTabs.Tab
          value='production'
          label='Production'
          status='warning'
          statusLabel='Below target'
          heading='98.2268%'
          subheading='Metering values received'
          detail='143 metering points missing'
        />
        <AdvancedTabs.Tab
          value='consumption15'
          label='Consumption 15'
          status='error'
          statusLabel='Critical'
          heading='95.34%'
          subheading='Metering values received'
          detail='59 metering points missing'
        />
        <AdvancedTabs.Tab
          value='consumption'
          disabled
          label='Consumption 60'
          heading='99.9923%'
          subheading='Metering values received'
          detail='2 metering points missing'
        />
      </AdvancedTabs.List>

      <AdvancedTabs.Panel value='exchange'>
        <Table fit='container'>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader scope='col'>Metering point ID</Table.ColumnHeader>
              <Table.ColumnHeader scope='col'>Grid owner</Table.ColumnHeader>
              <Table.ColumnHeader scope='col'>Grid area</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {exchangeRows.map(({ meteringPointId, gridOwner, gridArea }) => (
              <Table.Row key={meteringPointId}>
                <Table.DataCell>{meteringPointId}</Table.DataCell>
                <Table.DataCell>{gridOwner}</Table.DataCell>
                <Table.DataCell>{gridArea}</Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </AdvancedTabs.Panel>

      <AdvancedTabs.Panel value='production'>
        <Table fit='container'>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader scope='col'>Metering point ID</Table.ColumnHeader>
              <Table.ColumnHeader scope='col'>Direction</Table.ColumnHeader>
              <Table.ColumnHeader scope='col'>Missing intervals</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {productionRows.map(({ meteringPointId, direction, missingIntervals }) => (
              <Table.Row key={meteringPointId}>
                <Table.DataCell>{meteringPointId}</Table.DataCell>
                <Table.DataCell>{direction}</Table.DataCell>
                <Table.DataCell>{missingIntervals}</Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </AdvancedTabs.Panel>

      <AdvancedTabs.Panel value='consumption15'>Panel for Consumption 15</AdvancedTabs.Panel>
      <AdvancedTabs.Panel value='consumption'>No data</AdvancedTabs.Panel>
    </AdvancedTabs>
  )
}
