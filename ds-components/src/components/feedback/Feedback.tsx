import cl from 'clsx'
import React from 'react'
import FeedbackIdle, { type FeedbackIdleType } from './FeedbackIdle'
import FeedbackCollecting, { type FeedbackCollectingType } from './FeedbackCollecting'
import FeedbackSubmitted, { type FeedbackSubmittedType } from './FeedbackSubmitted'
import { FeedbackContext, type FeedbackVariant } from './useFeedbackContext'
import { useFormItemContext } from '../form/form-item/useFormItemContext'
import { type FormItemProps } from '../form/form-item'

interface FeedbackProps
  extends React.HTMLAttributes<HTMLDivElement>, Omit<FormItemProps, 'error' | 'children'> {
  children: React.ReactNode
  value?: FeedbackVariant
  defaultValue?: FeedbackVariant
  onValueChange?: (value: FeedbackVariant) => void
  error?: boolean
}

interface FeedbackComponent extends React.FC<FeedbackProps> {
  Idle: FeedbackIdleType
  Collecting: FeedbackCollectingType
  Submitted: FeedbackSubmittedType
}

const Feedback: FeedbackComponent = ({
  children,
  className,
  size,
  value,
  defaultValue,
  onValueChange,
  error,
  ...rest
}) => {
  const { error: { hasError } = {}, size: formItemSize } = useFormItemContext()
  const [internalValue, setInternalValue] = React.useState<FeedbackVariant | undefined>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleValueChange = React.useCallback(
    (nextValue: FeedbackVariant) => {
      if (!isControlled) {
        setInternalValue(nextValue)
      }
      onValueChange?.(nextValue)
    },
    [isControlled, onValueChange]
  )

  const _size = size ?? formItemSize ?? 'medium'
  const _error = error || hasError

  return (
    <FeedbackContext.Provider
      value={{
        size: _size,
        hasError: _error,
        value: currentValue,
        onValueChange: handleValueChange
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
