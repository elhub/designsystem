import React from 'react'
import cl from 'clsx'
import { IconSmileyHappy, IconSmileyNeutral, IconSmileySad } from '@elhub/ds-icons'
import { useFeedbackContext, type FeedbackType } from './useFeedbackContext'

export type FeedbackIdleButtonType = FeedbackType
export type FeedbackIdleButtonSize = 'small' | 'medium' | 'large'

export interface FeedbackIdleButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type: FeedbackIdleButtonType
  size?: FeedbackIdleButtonSize
}

const FeedbackIdleButton: React.FC<FeedbackIdleButtonProps> = ({
  type,
  size,
  className,
  children,
  onClick,
  ...rest
}) => {
  const { size: contextSize, feedbackType: contextFeedbackType, onFeedbackTypeChange } = useFeedbackContext()

  const _size = size ?? contextSize
  const selected = contextFeedbackType === type

  const buttonClass = cl(
    'eds-feedback-button',
    `eds-feedback-button--${type}`,
    `eds-feedback-button--${_size}`,
    selected && 'eds-feedback-button--selected',
    className
  )

  const renderIcon = () => {
    switch (type) {
      case 'happy':
        return <IconSmileyHappy className='eds-feedback-button__icon' />
      case 'neutral':
        return <IconSmileyNeutral className='eds-feedback-button__icon' />
      case 'sad':
        return <IconSmileySad className='eds-feedback-button__icon' />
    }
  }

  return (
    <button
      type='button'
      role='radio'
      aria-checked={selected}
      className={buttonClass}
      onClick={(event) => {
        onFeedbackTypeChange?.(type)
        onClick?.(event)
      }}
      {...rest}
    >
      {renderIcon()}
      <span className='eds-feedback-button__label'>{children}</span>
    </button>
  )
}

export default FeedbackIdleButton
