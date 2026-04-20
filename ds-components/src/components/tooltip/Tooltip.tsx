import { arrow as flArrow, autoUpdate, flip, hide, shift, useFloating } from '@floating-ui/react-dom'
import cl from 'clsx'
import React, {
  cloneElement,
  forwardRef,
  type HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { mergeRefs } from 'react-merge-refs'
import { composeEventHandlers, useEventListener, useId } from 'util/index'
import Portal from './portal'

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left'

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Element tooltip anchors to
   * @note Needs to be React.ReactElement, does not support multiple children/react fragment
   */
  children: React.ReactElement<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>
  /**
   * Open state for contolled tooltip
   */
  open?: boolean
  /**
   * Tells tooltip to start in open state.
   * Use sparingly synce hover/focus on other elements will close it
   * @note "open"-prop overwrites this
   */
  defaultOpen?: boolean
  /**
   * Orientation for tooltip
   * @default "top"
   */
  placement?: TooltipPlacement
  /**
   * Toggles rendering of arrow
   * @default true
   */
  arrow?: boolean
  /**
   * Distance from anchor to tooltip
   * @default 10px with arrow, 2px without arrow
   */
  offset?: number
  /**
   * Text-content inside tooltip
   */
  content: React.ReactNode

  /**
   * Adds a delay in milliseconds before opening tooltip
   * @default 150
   */
  delay?: number
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      className,
      arrow: _arrow = true,
      placement: _placement = 'top',
      open,
      defaultOpen = false,
      offset: _offset,
      content,
      delay = 150,
      id,
      ...rest
    },
    ref
  ) => {
    const arrowRef = useRef<HTMLDivElement | null>(null)
    const mainRef = useRef<HTMLDivElement | null>(null)
    const [isOpen, setIsOpen] = useState(defaultOpen)
    const openTimerRef = useRef(0)
    const leaveTimerRef = useRef(0)
    const isMouseDownRef = useRef(false)

    const ariaId = useId(id)

    const {
      x,
      y,
      update,
      placement,
      refs,
      middlewareData: { arrow: { x: arrowX, y: arrowY } = {}, hide: { referenceHidden } = {} }
    } = useFloating({
      placement: _placement,
      middleware: [
        shift(),
        flip({ padding: 5, fallbackPlacements: ['bottom', 'top'] }),
        flArrow({ element: arrowRef, padding: 5 }),
        hide()
      ]
    })

    /* https://floating-ui.com/docs/react-dom#updating */
    useEffect(() => {
      if (!refs.reference.current || !refs.floating.current) {
        return
      }

      // Only call this when the floating element is rendered
      return autoUpdate(refs.reference.current, refs.floating.current, update)
    }, [refs.reference, refs.floating, update, open, isOpen])

    const handleOpen = useCallback(() => {
      window.clearTimeout(openTimerRef.current)
      window.clearTimeout(leaveTimerRef.current)
      setIsOpen(true)
    }, [setIsOpen])

    const handleDelayedOpen = useCallback(() => {
      window.clearTimeout(openTimerRef.current)
      window.clearTimeout(leaveTimerRef.current)
      openTimerRef.current = window.setTimeout(() => {
        setIsOpen(true)
      }, delay)
    }, [delay, setIsOpen])

    const handleClose = useCallback(() => {
      window.clearTimeout(openTimerRef.current)
      leaveTimerRef.current = window.setTimeout(() => {
        setIsOpen(false)
      }, 50)
    }, [setIsOpen])

    const handleMouseUp = useCallback(() => (isMouseDownRef.current = false), [])

    useEffect(() => {
      return () => {
        window.clearTimeout(openTimerRef.current)
      }
    }, [])

    useEffect(() => {
      return () => {
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }, [handleMouseUp])

    useEventListener(
      'keydown',
      useCallback((e: KeyboardEvent) => e.key === 'Escape' && handleClose(), [handleClose])
    )

    /* https://floating-ui.com/docs/react-dom#stable-ref-prop */

    const stableRef = useMemo(() => mergeRefs([ref, refs.floating]), [ref, refs.floating])

    if (!children || children?.type === React.Fragment || (children as unknown) === React.Fragment) {
      console.error('<Tooltip> children needs to be a single ReactElement and not <React.Fragment/>/<></>')
      return null
    }

    return (
      <div className='eds-tooltip-wrapper' ref={mainRef}>
        {cloneElement(children, {
          ...children.props,
          'aria-describedby':
            (open ?? isOpen)
              ? cl(ariaId, children?.props['aria-describedby'])
              : children?.props['aria-describedby'],
          ref: mergeRefs([children.props.ref, refs.reference]),
          onMouseEnter: composeEventHandlers(children.props.onMouseEnter, handleDelayedOpen),
          onMouseLeave: composeEventHandlers(children.props.onMouseLeave, handleClose),
          onMouseDown: composeEventHandlers(children.props.onMouseDown, () => {
            isMouseDownRef.current = true
            return (
              document &&
              document.addEventListener('mouseup', handleMouseUp, {
                once: true
              })
            )
          }),
          onFocus: composeEventHandlers(
            children.props.onFocus,
            () => !isMouseDownRef.current && handleOpen()
          ),
          onBlur: composeEventHandlers(children.props.onBlur, handleClose)
        })}
        {(open ?? isOpen) && (
          <Portal anchorEl={mainRef.current}>
            <div
              ref={stableRef}
              {...rest}
              className={cl('eds-tooltip', 'eds-body-text eds-body-text--small', className)}
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
              role='tooltip'
              id={ariaId}
              style={{
                position: 'absolute',
                top: y ?? '',
                left: x ?? '',
                visibility: referenceHidden ? 'hidden' : 'visible'
              }}
              data-side={placement}
            >
              <div
                className='eds-tooltip__inner'
                style={{
                  // @ts-expect-error - placement is always a valid value
                  [{
                    top: 'marginBottom',
                    right: 'marginLeft',
                    bottom: 'marginTop',
                    left: 'marginRight'
                  }[placement]]: _offset || (_arrow ? 6 : 2)
                }}
              >
                {content}
                {_arrow && (
                  <div
                    ref={(node) => {
                      arrowRef.current = node
                    }}
                    className='eds-tooltip__arrow'
                    style={{
                      left: arrowX != null ? `${arrowX}px` : '',
                      top: arrowY != null ? `${arrowY}px` : '',
                      right: '',
                      bottom: '',
                      // @ts-expect-error - placement is always a valid value
                      [{
                        top: 'bottom',
                        right: 'left',
                        bottom: 'top',
                        left: 'right'
                      }[placement]]: '-3.5px'
                    }}
                  />
                )}
              </div>
            </div>
          </Portal>
        )}
      </div>
    )
  }
)

Tooltip.displayName = 'Tooltip'
export default Tooltip
