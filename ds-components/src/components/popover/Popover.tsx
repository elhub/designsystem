import { type Placement } from '@popperjs/core'
import cl from 'clsx'
import React, { forwardRef, type HTMLAttributes, useCallback, useEffect, useRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { usePopper } from 'react-popper'
import { useClientLayoutEffect } from 'util/index'
import PopoverContent, { type PopoverContentType } from './PopoverContent'

export type PopoverVariant = 'primary' | 'secondary'

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Element popover anchors to
   */
  anchorEl: Element | null

  /**
   * Adds an arrow from dialog to anchor when true
   * @default true
   */
  arrow?: boolean

  /**
   * Popover content
   */
  children: React.ReactNode

  /**
   * Distance from anchor to popover
   * @default 16 w/arrow, 4 w/no-arrow
   */
  offset?: number

  /**
   * onClose callback
   */
  onClose: () => void

  /**
   * Open state
   */
  open: boolean

  /**
   * Orientation for popover
   * @note Try to keep general usage to "top", "bottom", "left", "right"
   * @default "right"
   */
  placement?: Placement

  /**
   * Changes what CSS position property to use
   * You want to use "fixed" if reference element is inside a fixed container, but popover is not
   * @default "absolute"
   */
  strategy?: 'absolute' | 'fixed'

  /**
   * Popover variant
   * @default "primary"
   */
  variant?: PopoverVariant
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useEventLister = (event: string, callback: any) => {
  useEffect(() => {
    document.addEventListener(event, callback)
    return () => {
      document.removeEventListener(event, callback)
    }
  }, [event, callback])
}

interface PopoverComponent extends React.ForwardRefExoticComponent<
  PopoverProps & React.RefAttributes<HTMLDivElement>
> {
  Content: PopoverContentType
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      className,
      children,
      anchorEl,
      arrow = true,
      open,
      onClose,
      placement = 'right',
      offset,
      strategy = 'absolute',
      variant = 'primary',
      style,
      ...rest
    },
    ref
  ) => {
    const popoverRef = useRef<HTMLDivElement | null>(null)
    const mergedRef = mergeRefs([popoverRef, ref])

    const close = useCallback(() => {
      if (open) {
        onClose()
      }
    }, [open, onClose])

    useEventLister(
      'click',
      useCallback(
        (e: MouseEvent) => {
          if (![anchorEl, popoverRef.current].some((element) => element?.contains(e.target as Node))) {
            close()
          }
        },
        [anchorEl, close]
      )
    )

    useEventLister(
      'keydown',
      useCallback(
        (e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            close()
          }
        },
        [close]
      )
    )

    useEventLister(
      'focusin',
      useCallback(
        (e: FocusEvent) => {
          if (![anchorEl, popoverRef.current].some((element) => element?.contains(e.target as Node))) {
            close()
          }
        },
        [anchorEl, close]
      )
    )

    const { styles, attributes, update } = usePopper(anchorEl, popoverRef.current, {
      placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, offset ?? (arrow ? 12 : 4)]
          }
        },
        {
          name: 'arrow',
          options: {
            padding: 16
          }
        }
      ],
      strategy
    })

    useClientLayoutEffect(() => {
      if (open) {
        update?.()
      }
    }, [open, update])

    return (
      <div
        {...rest}
        ref={mergedRef}
        className={cl(
          'eds-popover',
          `eds-popover--${variant}`,
          {
            'eds-popover--hidden': !open || !anchorEl
          },
          className
        )}
        aria-hidden={!open || !anchorEl}
        tabIndex={-1}
        {...attributes.popper}
        style={{ ...style, ...styles.popper }}
      >
        {children}
        {arrow && <div data-popper-arrow style={styles.arrow} className='eds-popover__arrow' />}
      </div>
    )
  }
) as PopoverComponent

Popover.Content = PopoverContent
Popover.displayName = 'Popover'
export default Popover
