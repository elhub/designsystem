import cl from 'clsx'
import React, { useRef, useState } from 'react'

interface ComboboxWrapperProps {
  children: React.ReactNode
  className?: string
  hasError: boolean
  inputProps: {
    disabled?: boolean
  }
  inputSize: string
  toggleIsListOpen: (isListOpen: boolean) => void
  toggleListButtonRef: React.RefObject<HTMLButtonElement | null>
}

const ComboboxWrapper: React.FC<ComboboxWrapperProps> = ({
  children,
  className,
  hasError,
  inputProps,
  inputSize,
  toggleIsListOpen,
  toggleListButtonRef
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [hasFocusWithin, setHasFocusWithin] = useState(false)

  function onFocusInsideWrapper(e: React.FocusEvent<HTMLDivElement>): void {
    if (!wrapperRef.current?.contains(e.relatedTarget) && toggleListButtonRef?.current?.id !== e.target.id) {
      toggleIsListOpen(true)
      setHasFocusWithin(true)
    }
  }

  function onBlurWrapper(e: React.FocusEvent<HTMLDivElement>): void {
    if (!wrapperRef.current?.contains(e.relatedTarget)) {
      toggleIsListOpen(false)
      setHasFocusWithin(false)
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={cl(className, 'eds-form-item', `eds-form-item--${inputSize}`, {
        'eds-combobox--error': hasError,
        'eds-combobox--disabled': !!inputProps.disabled,
        'eds-combobox--focused': hasFocusWithin
      })}
      onFocus={onFocusInsideWrapper}
      onBlur={onBlurWrapper}
    >
      {children}
    </div>
  )
}

export default ComboboxWrapper
