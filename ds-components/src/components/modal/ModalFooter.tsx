import React from 'react'
import cl from 'clsx'

interface ModalFooterProps {
  children: React.ReactNode
  className?: string
}

export type ModalFooterType = React.ForwardRefExoticComponent<
  ModalFooterProps & React.RefAttributes<HTMLDivElement>
>

export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className }, ref) => {
    return (
      <div className={cl('eds-modal__footer', className)} ref={ref}>
        {children}
      </div>
    )
  }
)

ModalFooter.displayName = 'Modal.Footer'
