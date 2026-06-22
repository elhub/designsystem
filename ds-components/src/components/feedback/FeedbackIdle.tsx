import cl from 'clsx'
import React from 'react'
import FeedbackIdleButton, { type FeedbackIdleButtonProps } from './FeedbackIdleButton'
import FeedbackIdleButtonGroup, { type FeedbackIdleButtonGroupProps } from './FeedbackIdleButtonGroup'
import { useFeedbackContext } from './useFeedbackContext'

export type FeedbackIdleProps = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
export type { FeedbackIdleButtonGroupProps }

export type FeedbackIdleType = React.FC<FeedbackIdleProps> & {
  ButtonGroup: React.FC<FeedbackIdleButtonGroupProps>
  Button: React.FC<FeedbackIdleButtonProps>
}

const FeedbackIdle: FeedbackIdleType = ({ children, className, ...rest }) => {
  const { hasError } = useFeedbackContext()

  return (
    <div className={cl('eds-feedback__idle', hasError && 'eds-feedback__idle--error', className)} {...rest}>
      {children}
    </div>
  )
}

FeedbackIdle.ButtonGroup = FeedbackIdleButtonGroup
FeedbackIdle.Button = FeedbackIdleButton

FeedbackIdle.displayName = 'Feedback.Idle'

export default FeedbackIdle
