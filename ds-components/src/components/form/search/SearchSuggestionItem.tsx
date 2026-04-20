import React, { type ForwardedRef, forwardRef } from 'react'
import { BodyText } from '../../typography'
import { type OverridableComponent } from '../../../util'
import cl from 'clsx'
import { useSearchContext } from './Search'

interface SearchSuggestionItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
  onSelectedItem?: (value: string) => void
}

export const SearchSuggestionItem: OverridableComponent<SearchSuggestionItemProps> = forwardRef(
  (
    { as: Component = 'a', href, label, onSelectedItem, className, ...props },
    ref: ForwardedRef<HTMLLIElement>
  ) => {
    const { setPopoverOpen } = useSearchContext()
    return (
      <li ref={ref}>
        <Component
          href={href}
          onClick={() => {
            if (href) {
              onSelectedItem?.(href)
            }
            setPopoverOpen(false)
          }}
          className={cl('eds-search__results-item', className)}
          {...props}
        >
          <BodyText size='small'>{label}</BodyText>
        </Component>
      </li>
    )
  }
)

SearchSuggestionItem.displayName = 'Search.SuggestionItem'
