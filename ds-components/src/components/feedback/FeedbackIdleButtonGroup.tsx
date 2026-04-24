import React from 'react'
import cl from 'clsx'

export type FeedbackIdleButtonGroupProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

const FeedbackIdleButtonGroup: React.FC<FeedbackIdleButtonGroupProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div role='radiogroup' className={cl('eds-feedback-idle__button-group', className)} {...rest}>
      {children}
    </div>
  )
}

FeedbackIdleButtonGroup.displayName = 'Feedback.Idle.ButtonGroup'

export default FeedbackIdleButtonGroup
