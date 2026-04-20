import cl from 'clsx'
import { AccordionContext } from 'components/accordion/Accordion'
import React, { forwardRef, useContext } from 'react'
import AnimateHeight from 'util/AnimateHeight'
import { AccordionItemContext } from './AccordionItem'

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content inside Accordion.Content
   */
  children: React.ReactNode
}

export type AccordionContentType = React.ForwardRefExoticComponent<
  AccordionContentProps & React.RefAttributes<HTMLDivElement>
>

const AccordionContent: AccordionContentType = forwardRef(({ children, className, ...rest }, ref) => {
  const context = useContext(AccordionItemContext)

  const mainContext = useContext(AccordionContext)

  if (context === null) {
    console.error('<Accordion.Content> has to be used within an <Accordion.Item>')
    return null
  }

  return (
    <AnimateHeight height={context.open ? 'auto' : 0} duration={250}>
      <div
        {...rest}
        ref={ref}
        className={cl(
          'eds-accordion__content',
          {
            'eds-accordion__content--border': mainContext?.border
          },
          className
        )}
      >
        {children}
      </div>
    </AnimateHeight>
  )
})
AccordionContent.displayName = 'Accordion.Content'
export default AccordionContent
