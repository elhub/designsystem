import cl from 'clsx'
import React, { useState, useCallback } from 'react'
import FeedbackIdle, { type FeedbackIdleType } from './FeedbackIdle'
import FeedbackCollecting, { type FeedbackCollectingType } from './FeedbackCollecting'
import FeedbackSubmitted, { type FeedbackSubmittedType } from './FeedbackSubmitted'
import { FeedbackContext, type FeedbackVariant } from './useFeedbackContext'
import { useFormItemContext } from '../form/form-item/useFormItemContext'
import { type FormItemProps } from '../form/form-item'

interface FeedbackProps
  extends React.HTMLAttributes<HTMLDivElement>, Omit<FormItemProps, 'error' | 'children'> {
  children: React.ReactNode
  variant?: FeedbackVariant
  defaultVariant?: FeedbackVariant
  onVariantChange?: (variant: FeedbackVariant) => void
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
  variant,
  defaultVariant,
  onVariantChange,
  error,
  ...rest
}) => {
  const { error: { hasError } = {}, size: formItemSize } = useFormItemContext()
  const [internalVariant, setInternalVariant] = useState<FeedbackVariant | undefined>(defaultVariant)

  const isParentControlled = variant !== undefined
  const resolvedVariant = isParentControlled ? variant : internalVariant

  const handleVariantChange = useCallback(
    (nextVariant: FeedbackVariant) => {
      if (!isParentControlled) {
        setInternalVariant(nextVariant)
      }
      onVariantChange?.(nextVariant)
    },
    [isParentControlled, onVariantChange]
  )

  const _size = size ?? formItemSize ?? 'medium'
  const _error = error || hasError

  return (
    <FeedbackContext.Provider
      value={{
        size: _size,
        hasError: _error,
        variant: resolvedVariant,
        onVariantChange: handleVariantChange
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
