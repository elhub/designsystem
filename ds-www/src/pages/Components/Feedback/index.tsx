import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { FeedbackBackendErrorExample } from './examples/BackendError'
import feedbackBackendErrorSource from './examples/BackendError.tsx?raw'
import { FeedbackSuccessExample } from './examples/Success'
import feedbackSuccessSource from './examples/Success.tsx?raw'

const ComponentsFeedback: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='feedback' level='1' spacing>
        Feedback
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>Feedback</code> component lets users rate a page and optionally add a comment. Use{' '}
        <code>Feedback.Idle</code>, <code>Feedback.Collecting</code>, and <code>Feedback.Submitted</code> to
        build the flow. Control flow state in your consumer code.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='feedback-success' level='2' spacing>
        Success example
      </Heading>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={feedbackSuccessSource} codeHighlighter='shiki'>
        <FeedbackSuccessExample />
      </DemoableDiv>

      <Heading className='toc' size='medium' id='feedback-error' level='2' spacing>
        Backend error example
      </Heading>
      <VerticalSpace />

      <BodyText>If submission fails, show an error state and let users retry.</BodyText>

      <VerticalSpace />

      <DemoableDiv alignContent='center' code={feedbackBackendErrorSource} codeHighlighter='shiki'>
        <FeedbackBackendErrorExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='feedback-properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace size='1' />

      <BodyText size='large'>
        <code>Feedback</code>
      </BodyText>
      <VerticalSpace size='1' />
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
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>
              Composition of <code>Feedback.Idle</code>, <code>Feedback.Collecting</code>, and{' '}
              <code>Feedback.Submitted</code>.
            </Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>error</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Applies error styling to child components.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Custom CSS class for the root container.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <BodyText size='large'>
        <code>Feedback.Idle</code>
      </BodyText>
      <VerticalSpace size='1' />
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
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>
              Content for the idle state. Typically includes <code>Feedback.Idle.ButtonGroup</code> and{' '}
              <code>Feedback.Idle.Button</code>.
            </Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Custom CSS class for the container.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <BodyText size='large'>
        <code>Feedback.Idle.Button</code>
      </BodyText>
      <VerticalSpace size='1' />
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
              <code>type</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'happy' | 'neutral' | 'sad'</code>
            </Table.DataCell>
            <Table.DataCell>Visual sentiment for the button.</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'small' | 'medium' | 'large'</code>
            </Table.DataCell>
            <Table.DataCell>Button size.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>'medium'</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>Button label text.</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>...rest</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ButtonHTMLAttributes&lt;HTMLButtonElement&gt;</code>
            </Table.DataCell>
            <Table.DataCell>
              Native button element attributes (e.g., <code>onClick</code>).
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <BodyText size='large'>
        <code>Feedback.Collecting</code>
      </BodyText>
      <VerticalSpace size='1' />
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
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>
              Content for the collecting state. Typically includes <code>Textarea</code> and{' '}
              <code>Feedback.Collecting.ButtonGroup</code>.
            </Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Custom CSS class for the container.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <BodyText size='large'>
        <code>Feedback.Submitted</code>
      </BodyText>
      <VerticalSpace size='1' />
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
              <code>children</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>Content for the submitted state. Typically a success message.</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Custom CSS class for the container.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>-</Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsFeedback
