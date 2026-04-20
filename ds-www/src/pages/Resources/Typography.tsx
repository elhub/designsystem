import { BodyText, ErrorMessage, Heading, Panel, VerticalSpace } from '@elhub/ds-components'
import React from 'react'

const ResourcesTypography: React.JSX.Element = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' spacing>
        Fonts
      </Heading>
      <VerticalSpace size='2' />

      <a href='#fontfamily' className='eds-sr-only'>
        Font family
      </a>
      <Heading className='toc' size='medium' level='2' id='fontfamily' spacing>
        Font family
      </Heading>
      <VerticalSpace size='2' />

      <Panel border>
        <Heading size='small'>ACBCEFGHIJKLMNOPQRSTUVWXYZÆØÅ1234567890</Heading>
        <Heading size='small'>abcdefghijklmnopqrstuvwxyz!"#$%&/()=?*@</Heading>
        <BodyText>ACBCEFGHIJKLMNOPQRSTUVWXYZÆØÅ1234567890</BodyText>
        <BodyText>abcdefghijklmnopqrstuvwxyz!"#$%&/()=?*@</BodyText>
      </Panel>
      <VerticalSpace size='2' />
      <BodyText>The design system uses a highly compatible sans-serif system font.</BodyText>

      <Panel border>
        <div style={{ fontFamily: 'var(--eds-neutral-font-heading-family)' }}>
          <Heading>ACBCEFGHIJKLMNOPQRSTUVWXYZÆØÅ1234567890</Heading>
          <Heading>abcdefghijklmnopqrstuvwxyz!"#$%&/()=?*@</Heading>
        </div>
        <div style={{ fontFamily: 'var(--eds-neutral-font-body-family)' }}>
          <BodyText>ACBCEFGHIJKLMNOPQRSTUVWXYZÆØÅ1234567890</BodyText>
          <BodyText>abcdefghijklmnopqrstuvwxyz!"#$%&/()=?*@</BodyText>
        </div>
      </Panel>
      <VerticalSpace />

      <BodyText>
        These fonts are embedded in the <code>@elhub/ds-css</code> package as <code>@font-face</code>, so all
        you need to do is import the <code>@elhub/ds-css</code> CSS file to use the right fonts.
      </BodyText>

      <BodyText>
        The design system uses a combination of fonts from the Primer style, that are comfortable to read and
        highly compatible with all devices.
      </BodyText>

      <VerticalSpace />

      <Heading className='toc' size='medium' level='2' id='Heading' spacing>
        Heading
      </Heading>
      <VerticalSpace />

      <BodyText>Headings should be used to give a proper title to the relevant section.</BodyText>

      <BodyText>
        Note that headings are very useful for accessibility readers and for search engine optimizations, so
        use them in your application in a way that reflects its structure.
      </BodyText>

      <BodyText>
        The Heading component decouples the heading level (h1, h2, ..., h6) from it size, so you have to set
        the size/level prop.
      </BodyText>

      <Panel border>
        <Heading size='xlarge'>XLarge heading</Heading>
        <VerticalSpace />
        <Heading size='large'>Large heading</Heading>
        <VerticalSpace />
        <Heading size='medium'>Medium heading</Heading>
        <VerticalSpace />
        <Heading size='small'>Small heading</Heading>
        <VerticalSpace />
        <Heading size='xsmall'>XSmall heading</Heading>
      </Panel>

      <VerticalSpace size='3' />
      <Heading className='toc' size='medium' level='2' id='BodyText' spacing>
        BodyText
      </Heading>
      <VerticalSpace />

      <BodyText>
        BodyText is used for normal text, like paragraphs. This is the default text style for most of the
        content. It has a line height that makes it easy to read, and it's adjustable in size and weight. This
        is the standard style for text that does not need emphasis. For example, in input fields, dropdowns,
        combo boxes, or other standalone text.
      </BodyText>

      <VerticalSpace size='2' />
      <Panel border>
        <BodyText size='large'>large body text</BodyText>
        <VerticalSpace />
        <BodyText size='medium'>medium body text</BodyText>
        <VerticalSpace />
        <BodyText size='small'>small body text</BodyText>
      </Panel>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' level='2' id='ErrorMessage' spacing>
        Error Message
      </Heading>
      <VerticalSpace />

      <BodyText>
        Error messages wrap text that should warn the user with a notification of an invalid state
      </BodyText>
      <VerticalSpace size='2' />
      <Panel border>
        <ErrorMessage size='medium'>medium error message</ErrorMessage>
        <VerticalSpace />
        <ErrorMessage size='small'>small error message</ErrorMessage>
      </Panel>
      <VerticalSpace size='3' />
    </>
  )
}

export default ResourcesTypography
