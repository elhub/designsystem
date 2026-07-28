import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { CardUsageExample } from './examples/Usage'
import cardUsageSource from './examples/Usage.tsx?raw'

const ComponentsCard: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='card' level='1'>
        Card
      </Heading>
      <VerticalSpace />
      <BodyText>
        The Card component is a container for content with a header, content area, and an optional footer.
      </BodyText>
      <VerticalSpace size='2' />
      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='card-example' level='2'>
        Example usage
      </Heading>
      <DemoableDiv alignContent='center' code={cardUsageSource} codeHighlighter='shiki'>
        <CardUsageExample />
      </DemoableDiv>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='card-composition' level='2' spacing>
        Composition
      </Heading>
      <BodyText>
        The <code>Card</code> component is composed of several main parts:
      </BodyText>
      <BodyText>
        <ul>
          <li>
            <code>CardHeader</code>: The top section of the card that houses the header content. It sets up
            the layout for any header elements.
          </li>
          <li>
            <code>CardHeaderContent</code>: A sub-component used within the header to group the title and
            description together. It arranges these elements vertically.
          </li>
          <li>
            <code>CardHeaderActions</code>: An optional slot for additional elements like icons, buttons, or
            any custom component. It is automatically right-aligned within the header.
          </li>
          <li>
            <code>CardTitle</code>: A sub-component used within the header to display the title of the card.
            It is typically a bolded text element.
          </li>
          <li>
            <code>CardDescription</code>: A sub-component used within the header to display a description of
            the card. It is typically a smaller text element.
          </li>
          <li>
            <code>CardContent</code>: The primary area for displaying the main content of the card. It ensures
            consistent spacing and styling for the content.
          </li>
          <li>
            <code>CardFooter</code>: (Optional) The bottom section of the card for any supplementary actions
            or details related to the content.
          </li>
        </ul>
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='props-table' level='2' spacing>
        Props table
      </Heading>

      {/* ------------------ Card Component Props ------------------ */}
      <Heading className='toc' size='medium' id='card' level='3' spacing>
        Card
      </Heading>
      <BodyText>
        This is the component that wraps the card content. It accepts all the props that a <code>div</code>{' '}
        element would accept.
      </BodyText>
      <VerticalSpace size='2' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Prop</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Additional CSS classes for the card container.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* ------------------ CardHeader Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='card-header-props' level='3' spacing>
        CardHeader
      </Heading>
      <BodyText>
        This is the component that wraps the header of the card. It accepts all the props that a{' '}
        <code>div</code> element would accept.
      </BodyText>
      <VerticalSpace size='2' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Prop</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>as</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>React.ElementType</code>
            </Table.DataCell>
            <Table.DataCell>The element type to render the header as (e.g., 'div', 'header').</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>'div'</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Additional CSS classes for the header.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* ------------------ CardHeaderContent Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='card-header-content-props' level='3' spacing>
        CardHeaderContent
      </Heading>
      <BodyText>
        This is the component that wraps the content of the header. It accepts all the props that a div
        element would accept. Meant to be used for rendering the title and description of the card.
      </BodyText>
      <VerticalSpace size='2' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Prop</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional CSS classes for the content container that groups the title and description.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* ------------------ CardHeaderActions Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='card-header-actions-props' level='3' spacing>
        CardHeaderActions
      </Heading>
      <BodyText>
        This is the component that wraps the actions in the header. It accepts all the props that a{' '}
        <code>div</code> element would accept. Meant to be used for rendering badges or other actions.
      </BodyText>
      <VerticalSpace size='2' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Prop</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>
              Additional CSS classes for the actions container. Any children provided here will be
              right-aligned.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* ------------------ CardTitle Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='card-title-props' level='3' spacing>
        CardTitle
      </Heading>
      <BodyText>
        This is the component that wraps the title of the card. It accepts all the props that a{' '}
        <code>BodyText</code> element would accept.
      </BodyText>
      <VerticalSpace size='2' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Prop</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>as</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>React.ElementType</code>
            </Table.DataCell>
            <Table.DataCell>
              The component or HTML element used to render the title. Defaults to a <code>BodyText</code> with
              large size and bold weight.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>BodyText</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Additional CSS classes for styling the title.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* ------------------ CardDescription Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='card-description-props' level='3' spacing>
        CardDescription
      </Heading>
      <BodyText>
        This is the component that wraps the description of the card. It accepts all the props that a{' '}
        <code>BodyText</code> element would accept.
      </BodyText>
      <VerticalSpace size='2' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Prop</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>as</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>React.ElementType</code>
            </Table.DataCell>
            <Table.DataCell>
              The component or HTML element used to render the description. Defaults to a{' '}
              <code>BodyText</code> with medium size.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>BodyText</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Additional CSS classes for styling the description.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* ------------------ CardContent Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='card-content-props' level='3' spacing>
        CardContent
      </Heading>
      <BodyText>
        This is the component that wraps the content area of the card. It accepts all the props that a{' '}
        <code>div</code> element would accept.
      </BodyText>
      <VerticalSpace size='2' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Prop</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Additional CSS classes for the content area.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* ------------------ CardFooter Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='card-footer-props' level='3' spacing>
        CardFooter
      </Heading>
      <BodyText>
        This is the component that wraps the footer of the card. It accepts all the props that a{' '}
        <code>div</code> element would accept.
      </BodyText>
      <VerticalSpace size='2' />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Prop</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>className</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Additional CSS classes for the footer area.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  )
}

export default ComponentsCard
