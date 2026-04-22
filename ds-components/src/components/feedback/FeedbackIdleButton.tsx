import React from 'react'
import cl from 'clsx'
import { IconSmileyHappy, IconSmileyNeutral, IconSmileySad } from '@elhub/ds-icons'
import { useFeedbackContext, type FeedbackVariant } from './useFeedbackContext'

export type FeedbackIdleButtonVariant = FeedbackVariant
export type FeedbackIdleButtonSize = 'small' | 'medium' | 'large'

export interface FeedbackIdleButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant: FeedbackIdleButtonVariant
  size?: FeedbackIdleButtonSize
}

const FeedbackIdleButton: React.FC<FeedbackIdleButtonProps> = ({
  variant,
  size,
  className,
  children,
  onClick,
  ...rest
}) => {
  const { size: contextSize, value, onValueChange } = useFeedbackContext()

  const _size = size ?? contextSize
  const selected = value === variant

  const buttonClass = cl(
    'eds-feedback-button',
    `eds-feedback-button--${variant}`,
    `eds-feedback-button--${_size}`,
    selected && 'eds-feedback-button--selected',
    className
  )

  const renderIcon = () => {
    switch (variant) {
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
        onValueChange?.(variant)
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
