import { BodyText, Button, Feedback, Heading, Loader, Textarea, VerticalSpace } from '@elhub/ds-components'
import { IconCheckCircle } from '@elhub/ds-icons'
import React, { useState } from 'react'

type ActiveState = 'idle' | 'collecting' | 'isPending' | 'submitted' | 'error'
type FeedbackType = 'happy' | 'neutral' | 'sad'

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

export const FeedbackBackendErrorExample = () => <FeedbackFlow simulateBackendError />
