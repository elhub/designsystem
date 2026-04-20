import {
  IconCheckCircle as Success,
  IconCross,
  IconInformationCircle as Info,
  IconWarningCircle as Warning,
  IconWarningTriangle as Error
} from '@elhub/ds-icons'
import cl from 'clsx'
import { PileDiv } from 'layout/grid'
import { BodyText } from 'components/typography'
import React, { forwardRef } from 'react'

export type AlertVariant = 'error' | 'warning' | 'info' | 'success'

export type AlertSize = 'medium' | 'small'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Alert content
   */
  children: React.ReactNode

  /**
   * Self-closable alert
   * @default false
   */
  onClose?: () => void

  /**
   * Changes padding and font-sizes
   * @default medium
   */
  size?: AlertSize

  /**
   * Adds a bottom margin
   * @default false
   */
  spacing?: boolean

  /**
   * Changes colors and icon usage when changed
   */
  variant?: AlertVariant
}

const Icon = ({
  variant,
  ...props
}: {
  variant: AlertVariant
  className: string
}): React.ReactNode | null => {
  switch (variant) {
    case 'error':
      return <Error title='Error' size='small' {...props} />
    case 'warning':
      return <Warning title='Warning' size='small' {...props} />
    case 'info':
      return <Info title='Information' size='small' {...props} />
    case 'success':
      return <Success title='Success' size='small' {...props} />
    default:
      return null
  }
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ children, className, variant = 'info', onClose, size = 'medium', spacing = false, ...rest }, ref) => (
    <div
      {...rest}
      ref={ref}
      className={cl(
        'eds-alert',
        `eds-alert--${variant}`,
        `eds-alert--${size}`,
        {
          'eds-alert--spacing': spacing
        },
        className
      )}
    >
      <Icon variant={variant} className='eds-alert__icon' />
      <PileDiv>
        <BodyText weight='bold' as='div' size={size} className='eds-alert__wrapper'>
          {children}
        </BodyText>
      </PileDiv>
      {!!onClose && (
        <button className='eds-alert__clear-button' onClick={onClose}>
          <IconCross size='xsmall' />
        </button>
      )}
    </div>
  )
)
Alert.displayName = 'Alert'
export default Alert
