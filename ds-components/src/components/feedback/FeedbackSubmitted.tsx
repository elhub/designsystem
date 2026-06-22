import cl from 'clsx'
import React from 'react'

export interface FeedbackSubmittedProps {
  children: React.ReactNode
  className?: string
}

export type FeedbackSubmittedType = React.FC<FeedbackSubmittedProps>

const FeedbackSubmitted: FeedbackSubmittedType = ({ children, className }) => {
  return <div className={cl('eds-feedback__submitted', className)}>{children}</div>
}

FeedbackSubmitted.displayName = 'Feedback.Submitted'
export default FeedbackSubmitted
