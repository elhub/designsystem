import { BodyText, Heading, Search, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsSearch: React.FC = () => {
  const [message, setMessage] = useState<string>('Controlled search')
  // Example data for search suggestions
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

  // Example handler for when a search suggestion is selected
  const handleSelectedSuggestion = (value: string): void => {
    console.log('Selected:', value)
  }

  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='search' level='1' spacing>
        Search
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>Search</code> component attaches a text field with a submit button, and some utilities like
        a clear button and/or a suggestion menu.
      </BodyText>
      <VerticalSpace />

      <Heading className='toc' size='medium' id='search-suggestions' level='2' spacing>
        Composability
      </Heading>
      <VerticalSpace />
      <BodyText>
        The Search component is composable. You can pass children to it, and it will render them inside a
        popover, yielding the results of the search. The component is built based on the following components:
      </BodyText>
      <VerticalSpace />
      <ul>
        <li>
          <code>Search.SuggestionSection</code>: A section of suggestions.
        </li>
        <li>
          <code>Search.SuggestionItem</code>: A suggestion item. A li-tag with an OverridableComponent inside
          so you can render your own custom link or button.
        </li>
        <li>
          <code>Search.NoResults</code>: A no results message.
        </li>
      </ul>
      <VerticalSpace />
      <BodyText>This setup allows for a flexible and customizable search experience.</BodyText>

      <BodyText>
        You can also pass a <code>loading</code> prop to show a spinner while the suggestions are loading
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Search } from '@elhub/ds-components'
    
    const Component = () => {
      return (
        <>
         <Search loading={false} clearButtonLabel='Clear' placeholder='Search for something'>
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
          <VerticalSpace/>
          <Search 
            placeholder='Loading state'
            loading
            loadingText='Loading'
            clearButtonLabel='Clear'
          />
        </>
      )
   )
  }`}
      >
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
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='search-controlled' level='2' spacing>
        Controlled
      </Heading>
      <VerticalSpace />
      <BodyText>
        You can pass <code>onClear</code>, <code>onChange</code> and <code>onSubmit</code> callback functions
        ot the Search component, to handle those events.
      </BodyText>

      <BodyText>
        Note that the ESC key also triggers the <code>onClear</code> callback, and the ENTER key will trigger
        the <code>onSubmit</code> callback.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Search } from '@elhub/ds-components'
    
    const [message, setMessage] = useState<string>('Controlled search')
    const Component = () => {
      return (
       <Search
         hideLabel={false}
         placeholder={message}
         onSubmit={(e: string) => {
           if (!!e) {
             setMessage('Submit: ' + e)
           }
         }}
         onClear={() => setMessage('Cleared')}
         onChange={(e: string) => {
           if (!!e) {
             setMessage('Change: ' + e)
           }
         }}
       />
      )
   )
  }`}
      >
        <Search
          clearButtonLabel='Clear'
          hideLabel={false}
          placeholder={message}
          onSubmit={(value) => {
            if (value) {
              setMessage(`Submit: ${value}`)
            }
          }}
          onClear={() => {
            setMessage('Cleared')
          }}
          onChange={(value) => {
            if (value) {
              setMessage(`Change: ${value}`)
            }
          }}
        />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='search-error' level='2' spacing>
        Error
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>error</code> prop sets the text field with a error border.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Search } from '@elhub/ds-components'
    
    const Component = () => {
      return (
        <Search 
          placeholder='Error search' 
          error='Search box is empty' 
        />
      )
   )
  }`}
      >
        <Search clearButtonLabel='Clear' placeholder='Error search' error='Search box is empty' />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='search-disabled' level='2' spacing>
        Disabled
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>disabled</code> prop deactivates the component.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Search } from '@elhub/ds-components'
    
    const Component = () => {
      return (
        <Search placeholder='Search' disabled />
      )
   )
  }`}
      >
        <Search clearButtonLabel='Clear' placeholder='Search' disabled />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='search-disabled' level='2' spacing>
        max length
      </Heading>
      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { Search } from '@elhub/ds-components'
    
    const Component = () => {
      return (
        <Search label='no more than 5 chars' placeholder="only 5" hideLabel={false} inputProps={{maxLength: 5}} />
      )
   )
  }`}
      >
        <Search
          label='no more than 5 chars'
          placeholder='only 5'
          hideLabel={false}
          inputProps={{ maxLength: 5 }}
        />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace />
      <Heading className='toc' size='medium' id='properties' level='3' spacing>
        Search
      </Heading>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>placeholder</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets search placeholder</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>clearButtonLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets clear button label for screen readers</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>disabled</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets search to disabled</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>error</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets search error message</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>hideLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Shows/hides search label</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>true</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>label</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets search label</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onChange</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(value: string) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function when content changes</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onClear</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(value: SearchClearEvent) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function when clear button is triggered</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onSubmit</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(value: string) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function when search button is triggered</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets search form size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='properties-section' level='3' spacing>
        Search.SuggestionSection
      </Heading>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>title</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets section title</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>initialItemsToShow</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>Sets number of items to show initially</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>3</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>explandLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets expand button label</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>collapseLabel</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets collapse button label</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='properties-item' level='3' spacing>
        Search.SuggestionItem
      </Heading>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>href</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Link URL</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>label</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Link text</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onSelectedItem</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(value: string) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function when item is selected</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell></Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>as</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Custom tag for the item</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>a</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsSearch
