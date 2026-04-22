import cl from 'clsx'
import React from 'react'
import { Textarea } from '../form'
import FeedbackCollectingButtonGroup, {
  type FeedbackCollectingButtonGroupProps
} from './FeedbackCollectingButtonGroup'

export type FeedbackCollectingProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

export type FeedbackCollectingType = React.FC<FeedbackCollectingProps> & {
  ButtonGroup: React.FC<FeedbackCollectingButtonGroupProps>
  Textarea: typeof Textarea
}

const FeedbackCollecting: FeedbackCollectingType = ({ children, className, ...rest }) => {
  return (
    <div className={cl('eds-feedback__collecting', className)} {...rest}>
      {children}
    </div>
  )
}

FeedbackCollecting.ButtonGroup = FeedbackCollectingButtonGroup
FeedbackCollecting.Textarea = Textarea

FeedbackCollecting.displayName = 'Feedback.Collecting'

export default FeedbackCollecting
