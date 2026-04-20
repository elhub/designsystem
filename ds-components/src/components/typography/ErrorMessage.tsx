import cl from 'clsx'
import React from 'react'
import { IconWarningTriangle } from '@elhub/ds-icons'
import BodyText from './BodyText'

export interface ErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Sets font-size
   * @default "small"
   */
  size?: 'large' | 'medium' | 'small'
  /**
   * Error text
   */
  children: React.ReactNode
}

const ErrorMessage: React.FC<ErrorMessageProps> = (props) => (
  <div className={cl('eds-error-message', props.className)}>
    <IconWarningTriangle className='eds-error-message__icon' />
    <BodyText {...props} as='div' />
  </div>
)

ErrorMessage.displayName = 'ErrorMessage'
export default ErrorMessage
