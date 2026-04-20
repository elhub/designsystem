import React, { forwardRef, useState } from 'react'
import { BodyText } from '../../typography'
import { type OverridableComponent } from '../../../util'

interface SuggestionSectionProps {
  title: string
  children: React.ReactNode
  initialItemsToShow?: number
  expandLabel: string
  collapseLabel: string
}

export const SearchSuggestionSection: OverridableComponent<SuggestionSectionProps> = forwardRef(
  (
    { as: Component = 'div', title, children, expandLabel, collapseLabel, initialItemsToShow = 3, ...props },
    ref
  ) => {
    const [isExpanded, setIsExpanded] = useState(false)

    // Only show expand/collapse button if expandable and there are more items than the initial limit
    const isShowMoreVisible = React.Children.count(children) > initialItemsToShow

    const displayedChildren = isExpanded
      ? children
      : React.Children.toArray(children).slice(0, initialItemsToShow)

    return (
      <Component className='eds-search__results-section' ref={ref} {...props}>
        <BodyText size='small' weight='bold' className='eds-search__results-title'>
          {title}
        </BodyText>
        <ul className='eds-search__results-list'>{displayedChildren}</ul>
        {isShowMoreVisible && (
          <button
            className='eds-search__results-expand-button'
            onClick={() => {
              setIsExpanded((prev) => !prev)
            }}
          >
            <BodyText size='small' weight='bold'>
              {isExpanded ? collapseLabel : expandLabel}
            </BodyText>
          </button>
        )}
      </Component>
    )
  }
)

SearchSuggestionSection.displayName = 'Search.SuggestionSection'
