import { useCallback, useEffect, useMemo, useState } from 'react'

export interface VirtualFocusType {
  activeId?: string
  isFocusOnTheTop: () => boolean
  isFocusOnTheBottom: () => boolean
  moveFocusUp: () => void
  moveFocusDown: () => void
  moveFocusToElement: (id: string) => void
  moveFocusToTop: () => void
  moveFocusToBottom: () => void
}

const useVirtualFocus = (optionIds: string[], disabledIds: Set<string>): VirtualFocusType => {
  const [activeId, setActiveId] = useState<string>()
  const focusableIds = useMemo(() => optionIds.filter((id) => !disabledIds.has(id)), [disabledIds, optionIds])

  useEffect(() => {
    if (activeId && !focusableIds.includes(activeId)) {
      setActiveId(undefined)
    }
  }, [activeId, focusableIds])

  const activeIndex = activeId ? focusableIds.indexOf(activeId) : -1
  const isFocusOnTheTop = () => activeIndex === 0
  const isFocusOnTheBottom = () => Boolean(activeId) && activeIndex === focusableIds.length - 1

  const moveFocusUp = () => {
    if (!activeId) {
      return
    }
    if (activeIndex === 0) {
      setActiveId(undefined)
    } else {
      setActiveId(focusableIds[activeIndex - 1])
    }
  }

  const moveFocusDown = () => {
    if (!activeId) {
      setActiveId(focusableIds[0])
      return
    }
    if (activeIndex !== focusableIds.length - 1) {
      setActiveId(focusableIds[activeIndex + 1])
    }
  }

  const moveFocusToTop = useCallback(() => setActiveId(undefined), [])
  const moveFocusToBottom = () => {
    setActiveId(focusableIds[focusableIds.length - 1])
  }
  const moveFocusToElement = (id: string) => {
    if (focusableIds.includes(id)) {
      setActiveId(id)
    }
  }

  return {
    activeId,
    isFocusOnTheTop,
    isFocusOnTheBottom,
    moveFocusUp,
    moveFocusDown,
    moveFocusToElement,
    moveFocusToTop,
    moveFocusToBottom
  }
}

export default useVirtualFocus
