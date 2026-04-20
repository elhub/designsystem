import { TabsList } from '@radix-ui/react-tabs'
import cl from 'clsx'
import React, { forwardRef, useRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * <Tabs.Tab /> elements
   */
  children: React.ReactNode
  /**
   * Loops back to start when navigating past last item
   */
  loop?: boolean
}

export type TabListType = React.ForwardRefExoticComponent<TabListProps & React.RefAttributes<HTMLDivElement>>

const TabList = forwardRef<HTMLDivElement, TabListProps>(({ className, ...rest }, ref) => {
  const listRef = useRef<HTMLDivElement | null>(null)
  const mergedRef = mergeRefs([listRef, ref])

  return <TabsList {...rest} ref={mergedRef} className={cl('eds-tabs__tablist', className)} />
}) as TabListType

TabList.displayName = 'Tab.List'
export default TabList
