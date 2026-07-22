import React from 'react'
import { BodyText, Heading, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import { CookieBannerDefaultExample } from './examples/Default'
import cookieBannerDefaultSource from './examples/Default.tsx?raw'
import { CookieBannerStaticExample } from './examples/Static'
import cookieBannerStaticSource from './examples/Static.tsx?raw'

const ComponentsCookieBanner: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='cookie-banner' level='1'>
        CookieBanner
      </Heading>
      <VerticalSpace />
      <BodyText>
        The CookieBanner component is a container for content with a header, content area, and an optional
        footer.
      </BodyText>
      {/* ------------------------------------------------------------------ */}
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='cookie-banner-example-default' level='2'>
        Example - Default
      </Heading>
      <VerticalSpace size='1' />
      <BodyText>
        The default component has a bottom left fixed position and a <code>16px</code> margin.
      </BodyText>
      <VerticalSpace size='1' />
      <BodyText>
        Use state management and a close button to handle conditional rendering of the component.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading size='small' id='cookie-banner-example-override-placement' level='3'>
        Override placement with style-prop
      </Heading>
      <VerticalSpace size='1' />
      <BodyText>
        You can override placement by using the <code>style-prop</code>. For example you can place the
        CookieBanner in the top right corner like this:{' '}
        <pre>{"style={{ top: '0px', right: '0px', bottom: 'auto', left: 'auto' }}"}</pre>
      </BodyText>
      <VerticalSpace size='1' />
      <DemoableDiv alignContent='center' code={cookieBannerDefaultSource} codeHighlighter='shiki'>
        <CookieBannerDefaultExample />
      </DemoableDiv>
      {/* ------------------------------------------------------------------ */}
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='cookie-banner-example-override-fixed' level='2'>
        Example - Override fixed position
      </Heading>
      <DemoableDiv alignContent='center' code={cookieBannerStaticSource} codeHighlighter='shiki'>
        <CookieBannerStaticExample />
      </DemoableDiv>
      {/* ------------------------------------------------------------------ */}
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='cookie-banner-composition' level='2' spacing>
        Composition
      </Heading>
      <VerticalSpace size='1' />
      <BodyText>
        The <code>CookieBanner</code> component is composed of several sub-elements:
      </BodyText>
      <VerticalSpace size='1' />
      <BodyText>
        <ul>
          <li>
            <code>CookieBannerTitle</code>: A sub-component used to display the title of the cookie-banner. It
            is typically a bolded text element.
          </li>
          <li>
            <code>CookieBannerDescription</code>: A sub-component used to display a description of the
            cookie-banner. It is typically a smaller text paragraph.
          </li>
          <li>
            <code>CookieBannerContent</code>: The primary area for displaying the main content of the
            cookie-banner, typically a link to privacy and cookies page.
          </li>
          <li>
            <code>CookieBannerActions</code>: An optional slot for additional elements like icons, buttons, or
            any custom component. It is automatically left-aligned.
          </li>
        </ul>
      </BodyText>

      <VerticalSpace size='4' />

      <Heading className='toc' size='large' id='props-table' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace size='1' />

      {/* ------------------ CookieBanner Component Props ------------------ */}
      <Heading className='toc' size='medium' id='cookie-banner' level='3' spacing>
        CookieBanner
      </Heading>
      <VerticalSpace size='1' />
      <BodyText>
        This is the component that wraps the cookie-banner sub-elements. It accepts all the props that a{' '}
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
            <Table.DataCell>Additional CSS classes for the cookie-banner container.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* ------------------ CookieBannerActions Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='cookie-banner-header-actions-props' level='3' spacing>
        CookieBannerActions
      </Heading>
      <VerticalSpace size='1' />
      <BodyText>
        This is the component that wraps the actions in the header. It accepts all the props that a{' '}
        <code>div</code> element would accept. Meant to be used for rendering buttons or other actions.
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
              left-aligned.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* ------------------ CookieBannerTitle Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='cookie-banner-title-props' level='3' spacing>
        CookieBannerTitle
      </Heading>
      <VerticalSpace size='1' />
      <BodyText>
        This is the component that wraps the title of the cookie-banner. It accepts all the props that a{' '}
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

      {/* ------------------ CookieBannerDescription Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='cookie-banner-description-props' level='3' spacing>
        CookieBannerDescription
      </Heading>
      <VerticalSpace size='1' />
      <BodyText>
        This is the component that wraps the description of the cookie-banner. It accepts all the props that a{' '}
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

      {/* ------------------ CookieBannerContent Component Props ------------------ */}
      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' id='cookie-banner-content-props' level='3' spacing>
        CookieBannerContent
      </Heading>
      <VerticalSpace size='1' />
      <BodyText>
        This is the component that wraps the content area of the cookie-banner. It accepts all the props that
        a <code>div</code> element would accept.
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
      <VerticalSpace size='4' />
    </>
  )
}

export default ComponentsCookieBanner
