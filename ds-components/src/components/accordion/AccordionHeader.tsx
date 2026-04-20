import { IconChevronDown } from '@elhub/ds-icons'
import cl from 'clsx'
import { AccordionContext } from 'components/accordion/Accordion'
import React, { forwardRef, useContext } from 'react'
import { AccordionItemContext } from './AccordionItem'

interface AccordionHeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Text inside Accordion.Header
   */
  children: React.ReactNode
}

export type AccordionHeaderType = React.ForwardRefExoticComponent<
  AccordionHeaderProps & React.RefAttributes<HTMLButtonElement>
>

const AccordionHeader: AccordionHeaderType = forwardRef(({ children, className, onClick, ...rest }, ref) => {
  const context = useContext(AccordionItemContext)

  const mainContext = useContext(AccordionContext)

  if (context === null) {
    console.error('<Accordion.Header> has to be used within an <Accordion.Item>')
    return null
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    context.toggleOpen()
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button
      {...rest}
      ref={ref}
      className={cl(
        'eds-accordion__header',
        {
          'eds-accordion__header--border': mainContext?.border
        },
        className
      )}
      type='button'
      onClick={handleClick}
      aria-expanded={context.open}
    >
      <span className='eds-accordion__header-content'>{children}</span>
      {mainContext?.arrow && <IconChevronDown aria-hidden className='eds-accordion__expand-icon' />}
    </button>
  )
})
AccordionHeader.displayName = 'Accordion.Header'
export default AccordionHeader
