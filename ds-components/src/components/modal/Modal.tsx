import { IconCross } from '@elhub/ds-icons'
import cl from 'clsx'
import { Button } from 'components/button'
import React, { forwardRef, useRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import ReactModal from 'react-modal'
import ModalContent from './ModalContent'
import { ModalHeader, type ModalHeaderType } from './ModalHeader'
import { ModalFooter, type ModalFooterType } from './ModalFooter'

export interface ModalProps {
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-modal'?: boolean
  /**
   * Sets aria-label on modal
   * @warning This should be set if not using 'aria-labelledby' or 'aria-describedby'
   */
  'aria-label'?: string

  /**
   * Modal content
   */
  children: React.ReactNode

  /**
   * User defined classname for modal
   */
  className?: string

  /**
   * Removes close-button(X) when false
   * @default true
   */
  closeButton?: boolean

  /**
   * Callback for modal wanting to close
   */
  onClose: () => void

  /**
   * Open state for modal
   */
  open: boolean

  /**
   * Callback for setting parent element modal will attach to
   */
  parentSelector?: () => HTMLElement

  /**
   * If modal should close on overlay click (click outside Modal)
   * @default true
   */
  shouldCloseOnOverlayClick?: boolean
}

interface ModalComponent
  extends ModalLifecycle, React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<ReactModal>> {
  Content: React.FC<React.HTMLAttributes<HTMLDivElement>>
  Header: ModalHeaderType
  Footer: ModalFooterType
}

interface ModalLifecycle {
  setAppElement?: (element: HTMLElement | string) => void
}

const Modal = forwardRef<ReactModal, ModalProps>(
  (
    {
      children,
      open,
      onClose,
      className,
      shouldCloseOnOverlayClick = true,
      closeButton = true,
      'aria-describedby': ariaDescribedBy,
      'aria-labelledby': ariaLabelledBy,
      'aria-modal': ariaModal,
      'aria-label': contentLabel,
      ...rest
    },
    ref
  ) => {
    const modalRef = useRef<ReactModal | null>(null)
    const mergedRef = mergeRefs([modalRef, ref])
    const buttonRef = useRef<HTMLButtonElement>(null)

    const onModalCloseRequest = (e: React.MouseEvent | React.KeyboardEvent): void => {
      if (shouldCloseOnOverlayClick || e.type === 'keydown') {
        onClose()
      } else if (buttonRef.current) {
        buttonRef.current.focus()
      }
    }

    return (
      <ReactModal
        {...rest}
        ref={mergedRef}
        className={cl('eds-modal', className)}
        isOpen={open}
        overlayClassName='eds-modal__overlay'
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        onRequestClose={(e) => {
          onModalCloseRequest(e)
        }}
        aria={{
          describedby: ariaDescribedBy,
          labelledby: ariaLabelledBy,
          modal: ariaModal
        }}
        contentLabel={contentLabel}
      >
        {children}
        {closeButton && (
          <Button
            className={cl('eds-modal__button', {
              'eds-modal__button--shake': shouldCloseOnOverlayClick
            })}
            size='small'
            variant='invisible'
            ref={buttonRef}
            onClick={onClose}
          >
            <IconCross size='small' color='inherit' />
          </Button>
        )}
      </ReactModal>
    )
  }
) as ModalComponent

Modal.setAppElement = (element) => {
  ReactModal.setAppElement(element)
}
Modal.Content = ModalContent
Modal.Header = ModalHeader
Modal.Footer = ModalFooter

Modal.displayName = 'Modal'
export default Modal
