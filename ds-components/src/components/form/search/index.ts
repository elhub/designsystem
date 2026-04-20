import { Search as SearchComp, type SearchProps } from './Search'
import { SearchSuggestionSection } from './SearchSuggestionSection'
import { SearchSuggestionItem } from './SearchSuggestionItem'
import { NoResults } from './NoResults'
import type React from 'react'
export { type SearchProps } from './Search'

interface SearchType {
  (props: SearchProps): React.ReactNode
  SuggestionSection: typeof SearchSuggestionSection
  SuggestionItem: typeof SearchSuggestionItem
  NoResults: typeof NoResults
}

const BaseSearch: SearchType = Object.assign(SearchComp, {
  SuggestionSection: SearchSuggestionSection,
  SuggestionItem: SearchSuggestionItem,
  NoResults
})

export const Search = BaseSearch
