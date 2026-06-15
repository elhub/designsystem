import {
  BodyText,
  Button,
  Feedback,
  Heading,
  Loader,
  Table,
  Textarea,
  VerticalSpace
} from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'
import { IconCheckCircle } from '@elhub/ds-icons'

type ActiveState = 'idle' | 'collecting' | 'isPending' | 'submitted' | 'error'
type FeedbackType = 'happy' | 'neutral' | 'sad'

const EXAMPLE_CODE = `import React, { useState } from 'react'
import { BodyText, Button, Feedback, Heading, Loader, Textarea, VerticalSpace } from '@elhub/ds-components'
import { IconCheckCircle } from '@elhub/ds-icons'

type ActiveState = 'idle' | 'collecting' | 'isPending' | 'submitted' | 'error'
type FeedbackType = 'happy' | 'neutral' | 'sad'

const Component = () => {
  const [activeState, setActiveState] = useState<ActiveState>('idle')
  const [selectedFeedbackType, setSelectedFeedbackType] = useState<FeedbackType | null>(null)
  const [comment, setComment] = useState('')

  const submit = async () => {
    if (!selectedFeedbackType) return
    setActiveState('isPending')
    await new Promise((r) => setTimeout(r, 900)) // Used to simulate call to a backend for the example. Replace with actual call and handle state change accordingly
    // setActiveState('error') // Uncomment to simulate a backend error
    setActiveState('submitted')
  }

  return (
    <Feedback>
      {activeState === 'idle' && (
        <Feedback.Idle>
          <Heading size='small'>How was this page to use?</Heading>
          <Feedback.Idle.ButtonGroup aria-label='Rate this page'>
            <Feedback.Idle.Button size='large' type='happy' onClick={() => { setSelectedFeedbackType('happy'); setActiveState('collecting') }}>Good</Feedback.Idle.Button>
            <Feedback.Idle.Button size='large' type='neutral' onClick={() => { setSelectedFeedbackType('neutral'); setActiveState('collecting') }}>Okay</Feedback.Idle.Button>
            <Feedback.Idle.Button size='large' type='sad' onClick={() => { setSelectedFeedbackType('sad'); setActiveState('collecting') }}>Bad</Feedback.Idle.Button>
          </Feedback.Idle.ButtonGroup>
        </Feedback.Idle>
      )}

      {activeState === 'collecting' && (
        <Feedback.Collecting>
          <Heading size='small'>What made you feel this way? (Optional)</Heading>
          <BodyText>Your answer helps us improve this page.</BodyText>
          <BodyText>Do not write any personal information.</BodyText>

          <VerticalSpace size='1' />

          <Textarea
            placeholder='Do not write any personal information.'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <VerticalSpace size='2' />

          <Feedback.Collecting.ButtonGroup>
            <Button variant='primary' onClick={submit}>Send feedback</Button>
            <Button variant='tertiary' onClick={() => setActiveState('idle')}>Cancel</Button>
          </Feedback.Collecting.ButtonGroup>
        </Feedback.Collecting>
      )}

      {activeState === 'isPending' && <Loader />}

      {activeState === 'error' && (
        <Feedback.Collecting>
          <Heading size='small'>We could not submit your feedback right now.</Heading>
          <BodyText>Try again in a moment.</BodyText>

          <VerticalSpace size='2' />

          <Feedback.Collecting.ButtonGroup>
            <Button variant='primary' onClick={() => setActiveState('collecting')}>Try again</Button>
            <Button variant='tertiary' onClick={() => setActiveState('idle')}>Back</Button>
          </Feedback.Collecting.ButtonGroup>
        </Feedback.Collecting>
      )}

      {activeState === 'submitted' && (
        <Feedback.Submitted>
          <IconCheckCircle aria-hidden='true' className='eds-feedback__submitted-icon' />
          <Heading size='small'>Thanks for your feedback!</Heading>
        </Feedback.Submitted>
      )}
    </Feedback>
  )
}

export default Component`

interface FeedbackFlowProps {
  title?: string
  description?: string
  simulateBackendError?: boolean
}

const FeedbackFlow: React.FC<FeedbackFlowProps> = ({ title, description, simulateBackendError = false }) => {
  const [activeState, setActiveState] = useState<ActiveState>('idle')
  const [selectedFeedbackType, setSelectedFeedbackType] = useState<FeedbackType | null>(null)
  const [comment, setComment] = useState('')

  const submit = async () => {
    if (!selectedFeedbackType) return
    setActiveState('isPending')
    await new Promise((r) => setTimeout(r, 900)) // Simulate waiting for backend to respond

    if (simulateBackendError) {
      setActiveState('error')
      return
    }

    setActiveState('submitted')
  }

  return (
    <div>
      {title && <Heading size='medium'>{title}</Heading>}
      {description && <BodyText>{description}</BodyText>}
      <VerticalSpace />

      <Feedback>
        {activeState === 'idle' && (
          <Feedback.Idle>
            <Heading size='small'>How was this page to use?</Heading>
            <Feedback.Idle.ButtonGroup aria-label='Rate this page'>
              <Feedback.Idle.Button
                size='large'
                type='happy'
                onClick={() => {
                  setSelectedFeedbackType('happy')
                  setActiveState('collecting')
                }}
              >
                Good
              </Feedback.Idle.Button>
              <Feedback.Idle.Button
                size='large'
                type='neutral'
                onClick={() => {
                  setSelectedFeedbackType('neutral')
                  setActiveState('collecting')
                }}
              >
                Okay
              </Feedback.Idle.Button>
              <Feedback.Idle.Button
                size='large'
                type='sad'
                onClick={() => {
                  setSelectedFeedbackType('sad')
                  setActiveState('collecting')
                }}
              >
                Bad
              </Feedback.Idle.Button>
            </Feedback.Idle.ButtonGroup>
          </Feedback.Idle>
        )}

        {activeState === 'collecting' && (
          <Feedback.Collecting>
            <Heading size='small'>What made you feel this way? (Optional)</Heading>
            <BodyText>Your answer helps us improve this page.</BodyText>
            <BodyText>Do not write any personal information.</BodyText>

            <VerticalSpace size='1' />

            <Textarea
              placeholder='Do not write any personal information.'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <VerticalSpace size='2' />

            <Feedback.Collecting.ButtonGroup>
              <Button variant='primary' onClick={submit}>
                Send feedback
              </Button>
              <Button variant='tertiary' onClick={() => setActiveState('idle')}>
                Cancel
              </Button>
            </Feedback.Collecting.ButtonGroup>
          </Feedback.Collecting>
        )}

        {activeState === 'isPending' && <Loader />}

        {activeState === 'error' && (
          <Feedback.Collecting>
            <Heading size='small'>We could not submit your feedback right now.</Heading>
            <BodyText>Try again in a moment.</BodyText>

            <VerticalSpace size='2' />

            <Feedback.Collecting.ButtonGroup>
              <Button variant='primary' onClick={() => setActiveState('collecting')}>
                Try again
              </Button>
              <Button variant='tertiary' onClick={() => setActiveState('idle')}>
                Back
              </Button>
            </Feedback.Collecting.ButtonGroup>
          </Feedback.Collecting>
        )}

        {activeState === 'submitted' && (
          <Feedback.Submitted>
            <IconCheckCircle aria-hidden='true' className='eds-feedback__submitted-icon' />
            <Heading size='small'>Thanks for your feedback!</Heading>
          </Feedback.Submitted>
        )}
      </Feedback>
    </div>
  )
}

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

      <DemoableDiv alignContent='center' code={EXAMPLE_CODE}>
        <FeedbackFlow />
      </DemoableDiv>

      <Heading className='toc' size='medium' id='feedback-error' level='2' spacing>
        Backend error example
      </Heading>
      <VerticalSpace />

      <BodyText>If submission fails, show an error state and let users retry.</BodyText>

      <VerticalSpace />

      <DemoableDiv alignContent='center' code={EXAMPLE_CODE}>
        <FeedbackFlow simulateBackendError />
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
