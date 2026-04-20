import { BodyText, Heading, Stepper, StepProps, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsStepper: React.FC = () => {
  // Sample steps for the demo
  const horizontalSteps: StepProps[] = [
    { value: 1, title: 'Cart', description: 'Review items to buy' },
    { value: 2, title: 'Shipping', description: 'Enter shipping address' },
    { value: 3, title: 'Payment', description: 'Add payment method' },
    { value: 4, title: 'Complete', description: 'Order confirmed' }
  ]

  const verticalSteps: StepProps[] = [
    { value: 1, title: 'Step One', description: 'Do the first thing' },
    { value: 2, title: 'Step Two', description: 'Do the second thing' },
    { value: 3, title: 'Step Three', description: 'Finish up' }
  ]

  const [activeHorizontal] = useState(2)
  const [activeVertical] = useState(1)

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
      <DemoableDiv
        alignContent='center'
        code={`import React, { useState } from 'react';
import { Stepper, Step } from 'components/Stepper/Stepper';

const Demo = () => {
  const steps: Step[] = [
    { value: 1, title: 'Cart', description: 'Review items to buy' },
    { value: 2, title: 'Shipping', description: 'Enter shipping address' },
    { value: 3, title: 'Payment', description: 'Add payment method' },
    { value: 4, title: 'Complete', description: 'Order confirmed' },
  ];

  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <Stepper
      steps={steps}
      activeStep={activeStep}
      orientation="horizontal"
      className="w-full max-w-lg"
    />
  );
};

export default Demo;`}
      >
        <div style={{ display: 'grid', gap: 24 }}>
          <div>
            <Heading size='medium' level='2'>
              Horizontal Stepper
            </Heading>
            <VerticalSpace />
            <Stepper
              steps={horizontalSteps}
              activeStep={activeHorizontal}
              orientation='horizontal'
              className='w-full max-w-lg'
            />
          </div>
          <div>
            <Heading size='medium' level='2'>
              Vertical Stepper
            </Heading>
            <VerticalSpace />
            <Stepper
              steps={verticalSteps}
              activeStep={activeVertical}
              orientation='vertical'
              className='h-full max-h-md'
            />
          </div>
        </div>
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
              Array of step objects. Each object must have <code>value</code>, <code>icon</code>,{' '}
              <code>title</code>, and optional <code>description</code>.
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
