import cl from 'clsx'
import { AccordionContext } from 'components/accordion/Accordion'
import React, { createContext, forwardRef, useContext, useState } from 'react'

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content in Accordion.Item
   * Should include one Accordion.Header and one Accordion.Content
   */
  children: React.ReactNode
  /**
   * Controlled open-state
   * Using this removes automatic control of open-state
   */
  open?: boolean
  /**
   * Defaults the accordion to open if not controlled
   * @default false
   */
  defaultOpen?: boolean
}

export type AccordionItemType = React.ForwardRefExoticComponent<
  AccordionItemProps & React.RefAttributes<HTMLDivElement>
>

interface AccordionItemContextProps {
  open: boolean
  toggleOpen: () => void
}

export const AccordionItemContext = createContext<AccordionItemContextProps | null>(null)

const AccordionItem: AccordionItemType = forwardRef(
  ({ children, className, open, defaultOpen = false, ...rest }, ref) => {
    const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen)

    const mainContext = useContext(AccordionContext)

    if (mainContext === null) {
      console.error('<Accordion.Item> has to be used within an <Accordion>')
      return null
    }

    return (
      <div
        {...rest}
        ref={ref}
        className={cl(
          'eds-accordion__item',
          {
            'eds-accordion__item--open': open ?? internalOpen
          },
          className
        )}
      >
        <AccordionItemContext.Provider
          value={{
            open: open ?? internalOpen,
            toggleOpen: () => {
              if (open === undefined) {
                setInternalOpen((iOpen) => !iOpen)
              }
            }
          }}
        >
          {children}
        </AccordionItemContext.Provider>
      </div>
    )
  }
)
AccordionItem.displayName = 'Accordion.Item'
export default AccordionItem
