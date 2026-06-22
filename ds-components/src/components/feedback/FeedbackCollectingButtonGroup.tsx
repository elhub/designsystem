import React from 'react'
import cl from 'clsx'

export type FeedbackCollectingButtonGroupProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

const FeedbackCollectingButtonGroup: React.FC<FeedbackCollectingButtonGroupProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cl('eds-feedback-collecting__actions', className)} {...rest}>
      {children}
    </div>
  )
}

FeedbackCollectingButtonGroup.displayName = 'Feedback.Collecting.ButtonGroup'

export default FeedbackCollectingButtonGroup
