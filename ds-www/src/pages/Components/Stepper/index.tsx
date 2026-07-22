import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { StepperDefaultExample } from './examples/Default'
import stepperDefaultSource from './examples/Default.tsx?raw'

const ComponentsStepper: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='typography' level='1'>
        Stepper
      </Heading>
      <VerticalSpace />
      <BodyText>
        The Stepper component is used to guide users through a series of steps in a process. It is typically
        used in forms or workflows where users need to complete multiple steps to achieve a goal. The Stepper
        provides a clear visual indication of the current step and how many steps to expect in the current
        flow. Currently, the Stepper-component is not interactive and only meant as a visual presentation.
      </BodyText>
      <VerticalSpace />
      <DemoableDiv alignContent='center' code={stepperDefaultSource} codeHighlighter='shiki'>
        <StepperDefaultExample />
      </DemoableDiv>
      <Heading className='toc' size='medium' id='stepper-props' level='2'>
        Props table
      </Heading>
      <VerticalSpace />

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>steps</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>Step[]</code>
            </Table.DataCell>
            <Table.DataCell>
              Array of step objects. Each object must have <code>value</code> and <code>title</code>.
            </Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>—</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>activeStep</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>
              The currently active step’s <code>value</code>.
            </Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>—</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>orientation</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'horizontal' | 'vertical'</code>
            </Table.DataCell>
            <Table.DataCell>
              Layout direction of the stepper. <code>'horizontal'</code> renders steps in a row;{' '}
              <code>'vertical'</code> renders them in a column.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>'horizontal'</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional CSS classes to apply to the root <code>div</code>.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>—</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  )
}

export default ComponentsStepper
