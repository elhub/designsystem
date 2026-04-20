import cl from 'clsx'
import React, { createContext, forwardRef } from 'react'
import AccordionContent, { AccordionContentType } from './AccordionContent'
import AccordionHeader, { AccordionHeaderType } from './AccordionHeader'
import AccordionItem, { AccordionItemType } from './AccordionItem'

export type AccordionVariant = 'primary' | 'secondary' | 'tertiary'

export type AccordionSize = 'medium' | 'small' | 'xsmall'

export type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * adds an arrow
   * @default true
   */
  arrow?: boolean

  /**
   * adds a border
   * @default false
   */
  border?: boolean

  /**
   * Instances of Accordion.Item
   */
  children: React.ReactNode

  /**
   * Changes padding, height and font-size
   * @default medium
   */
  size?: AccordionSize

  /**
   * Changes design and interaction-visuals
   * @default "primary"
   */
  variant?: AccordionVariant
}

interface AccordionComponent extends React.ForwardRefExoticComponent<
  AccordionProps & React.RefAttributes<HTMLDivElement>
> {
  Item: AccordionItemType
  Header: AccordionHeaderType
  Content: AccordionContentType
}

interface AccordionContextProps {
  arrow: boolean
  border: boolean
  size?: AccordionSize
}

export const AccordionContext = createContext<AccordionContextProps | null>(null)

const Accordion: AccordionComponent = forwardRef<HTMLDivElement, AccordionProps>(
  ({ arrow = true, border = false, className, variant = 'primary', size = 'medium', ...rest }, ref) => {
    return (
      <AccordionContext.Provider
        value={{
          arrow,
          border,
          size
        }}
      >
        <div
          {...rest}
          ref={ref}
          className={cl(
            'eds-accordion',
            `eds-accordion--${variant}`,
            `eds-accordion--${size}`,
            {
              'eds-accordion--border': border,
              'eds-accordion--arrow': arrow
            },
            className
          )}
        />
      </AccordionContext.Provider>
    )
  }
) as AccordionComponent

Accordion.Header = AccordionHeader
Accordion.Content = AccordionContent
Accordion.Item = AccordionItem
Accordion.displayName = 'Accordion'
export default Accordion
