import { Search, VerticalSpace } from '@elhub/ds-components'

export const SearchSuggestionsExample = () => {
  const suggestionsSection1 = [
    { href: '/link1', label: 'Suggestion 1' },
    { href: '/link2', label: 'Suggestion 2' },
    { href: '/link3', label: 'Suggestion 3' },
    { href: '/link4', label: 'Suggestion 4' }
  ]
  const suggestionsSection2 = [
    { href: '/link1', label: 'Suggestion 5' },
    { href: '/link2', label: 'Suggestion 6' },
    { href: '/link3', label: 'Suggestion 7' },
    { href: '/link4', label: 'Suggestion 8' }
  ]
  const suggestionsSection3 = [
    { href: '/link1', label: 'Suggestion 9' },
    { href: '/link2', label: 'Suggestion 10' },
    { href: '/link3', label: 'Suggestion 11' }
  ]
  const handleSelectedSuggestion = (value: string) => {
    console.log('Selected:', value)
  }

  return (
    <>
      <Search
        loading={false}
        clearButtonLabel='Clear'
        label='Search for something'
        placeholder='Search for something'
      >
        <Search.SuggestionSection
          title='Section 1'
          expandLabel='Show more results'
          collapseLabel='Show fewer results'
        >
          {suggestionsSection1.map((suggestion) => (
            <Search.SuggestionItem
              key={suggestion.href}
              href={suggestion.href}
              label={suggestion.label}
              onSelectedItem={handleSelectedSuggestion}
            />
          ))}
          {/* Handling no results case */}
          {suggestionsSection1.length === 0 && <Search.NoResults text='No results found' />}
        </Search.SuggestionSection>
        <Search.SuggestionSection
          title='Section 2'
          expandLabel='Show more results' // Custom text for expand button
          collapseLabel='Show fewer results' // Custom text for collapse button
        >
          {suggestionsSection2.map((suggestion) => (
            <Search.SuggestionItem
              key={suggestion.href}
              href={suggestion.href}
              label={suggestion.label}
              onSelectedItem={handleSelectedSuggestion}
            />
          ))}
          {/* Handling no results case */}
          {suggestionsSection3.length === 0 && <Search.NoResults text='No results found' />}
        </Search.SuggestionSection>
        <Search.SuggestionSection
          title='Section 3'
          expandLabel='Show more results' // Custom text for expand button
          collapseLabel='Show fewer results' // Custom text for collapse button
        >
          {suggestionsSection3.map((suggestion) => (
            <Search.SuggestionItem
              key={suggestion.href}
              href={suggestion.href}
              label={suggestion.label}
              onSelectedItem={handleSelectedSuggestion}
            />
          ))}
          {/* Handling no results case */}
          {suggestionsSection3.length === 0 && <Search.NoResults text='No results found' />}
        </Search.SuggestionSection>
      </Search>
      <VerticalSpace />
      <Search
        label='Loading state'
        placeholder='Loading state'
        loading
        loadingText='Loading'
        clearButtonLabel='Clear'
      />
    </>
  )
}
