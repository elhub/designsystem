import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { SearchSuggestionsExample } from './examples/Suggestions'
import searchSuggestionsSource from './examples/Suggestions.tsx?raw'
import { SearchControlledExample } from './examples/Controlled'
import searchControlledSource from './examples/Controlled.tsx?raw'
import { SearchErrorExample } from './examples/Error'
import searchErrorSource from './examples/Error.tsx?raw'
import { SearchDisabledExample } from './examples/Disabled'
import searchDisabledSource from './examples/Disabled.tsx?raw'
import { SearchMaxLengthExample } from './examples/MaxLength'
import searchMaxLengthSource from './examples/MaxLength.tsx?raw'

const ComponentsSearch: React.FC = () => {
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

      <DemoableDiv alignContent='center' code={searchSuggestionsSource} codeHighlighter='shiki'>
        <SearchSuggestionsExample />
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

      <DemoableDiv alignContent='center' code={searchControlledSource} codeHighlighter='shiki'>
        <SearchControlledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='search-error' level='2' spacing>
        Error
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>error</code> prop sets the text field with a error border.
      </BodyText>

      <DemoableDiv alignContent='center' code={searchErrorSource} codeHighlighter='shiki'>
        <SearchErrorExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='search-disabled' level='2' spacing>
        Disabled
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>disabled</code> prop deactivates the component.
      </BodyText>

      <DemoableDiv alignContent='center' code={searchDisabledSource} codeHighlighter='shiki'>
        <SearchDisabledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='search-disabled' level='2' spacing>
        max length
      </Heading>
      <VerticalSpace />

      <DemoableDiv alignContent='center' code={searchMaxLengthSource} codeHighlighter='shiki'>
        <SearchMaxLengthExample />
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
