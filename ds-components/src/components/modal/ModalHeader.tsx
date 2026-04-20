import React from 'react'
import { Heading } from '../typography'
import cl from 'clsx'

interface ModalHeaderProps {
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}

export type ModalHeaderType = React.ForwardRefExoticComponent<
  ModalHeaderProps & React.RefAttributes<HTMLDivElement>
>

export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ title, description, className }, ref) => {
    return (
      <div className={cl('eds-modal__header', className)} ref={ref}>
        <Heading level='2' size='medium'>
          {title}
        </Heading>
        {description && (
          <Heading level='3' size='xsmall'>
            {description}
          </Heading>
        )}
      </div>
    )
  }
)

ModalHeader.displayName = 'Modal.Header'
