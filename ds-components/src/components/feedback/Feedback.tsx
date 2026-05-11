import cl from 'clsx'
import React, { useState } from 'react'
import FeedbackIdle, { type FeedbackIdleType } from './FeedbackIdle'
import FeedbackCollecting, { type FeedbackCollectingType } from './FeedbackCollecting'
import FeedbackSubmitted, { type FeedbackSubmittedType } from './FeedbackSubmitted'
import { FeedbackContext, type FeedbackType } from './useFeedbackContext'
import { useFormItemContext } from '../form/form-item/useFormItemContext'
import { type FormItemProps } from '../form/form-item'

interface FeedbackProps
  extends React.HTMLAttributes<HTMLDivElement>, Omit<FormItemProps, 'error' | 'children'> {
  children: React.ReactNode
  error?: boolean
}

interface FeedbackComponent extends React.FC<FeedbackProps> {
  Idle: FeedbackIdleType
  Collecting: FeedbackCollectingType
  Submitted: FeedbackSubmittedType
}

const Feedback: FeedbackComponent = ({ children, className, size, error, ...rest }) => {
  const { error: { hasError } = {}, size: formItemSize } = useFormItemContext()
  const [selectedFeedbackType, setSelectedFeedbackType] = useState<FeedbackType | null>(null)

  const _size = size ?? formItemSize ?? 'medium'
  const _error = error || hasError

  return (
    <FeedbackContext.Provider
      value={{
        size: _size,
        hasError: _error,
        feedbackType: selectedFeedbackType ?? undefined,
        onFeedbackTypeChange: setSelectedFeedbackType
      }}
    >
      <div className={cl('eds-feedback', className)} {...rest}>
        {children}
      </div>
    </FeedbackContext.Provider>
  )
}

Feedback.Idle = FeedbackIdle
Feedback.Collecting = FeedbackCollecting
Feedback.Submitted = FeedbackSubmitted

Feedback.displayName = 'Feedback'
export default Feedback
