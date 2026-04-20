import {
  BodyText,
  Column,
  FlexDiv,
  FormItem,
  FormItemLabel,
  Heading,
  HorizontalSpace,
  Link,
  Panel,
  Row,
  TextField,
  VerticalSpace
} from '@elhub/ds-components'
import * as Icons from '@elhub/ds-icons'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'
import styled from 'styled-components'

const Code = styled.code`
  padding: 0.125rem;
  background-color: var(--eds-dark-background-color-transparent);
  border-radius: 0.25rem;
`

const ResourcesIcons: React.JSX.Element = () => {
  const [filterText, setFilterText] = useState<string>('')

  return (
    <>
      <VerticalSpace />
      <Heading size='large'>Icons</Heading>
      <VerticalSpace size='2' />

      <BodyText>
        The <Code>@elhub/ds-icons</Code> is a collection of icons that are used in the Elhub design system.
        The icons are available as React components and are directly exported from Figma. You can find the
        icons in the{' '}
        <Link target='_blank' href='https://www.figma.com/file/UVNmJfoSHUs2uxVmhVekQP/Elhub-Icons'>
          Figma file
        </Link>
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' level='2' id='usage'>
        Adding new icons?
      </Heading>
      <BodyText>
        If you need to add new icons to the design system, you can contact the design team. The icons will be
        added to the Figma file, and after that, you can run the script to export the icons as React
        components. You can find the script in the <Code>ds-icons</Code> package and you can run it with the
        command <Code>npm run extract-icons</Code>.
      </BodyText>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' level='2' id='usage'>
        Using icons in your project
      </Heading>
      <VerticalSpace />
      <BodyText>You can import all icons as a module.</BodyText>
      <CodeDiv spacing expand={false}>
        {`import * as Icons from '@elhub/ds-icons'

const EmailIcon = () => (<Icons.Email size="medium" title="Email" />)`}
      </CodeDiv>

      <BodyText>You can just import the icon modules you need.</BodyText>

      <CodeDiv spacing expand={false}>
        {`import { Email } from '@elhub/ds-icons'

const EmailIcon = () => (<Email size="medium" title="Email" />)`}
      </CodeDiv>

      <BodyText>You can rename the imported icon module.</BodyText>

      <CodeDiv spacing expand={false}>
        {`import { Email as EmailIcon } from '@elhub/ds-icons'

const Email = () => (<EmailIcon size="medium" title="Email" />)`}
      </CodeDiv>

      <VerticalSpace />

      <Heading className='toc' size='medium' level='2' id='usage'>
        Icon sizes
      </Heading>

      <BodyText>
        The icons are shipped in two sizes: <Code>small</Code> and <Code>medium</Code> (16px or 24px). You can
        customize the size by setting the <Code>size</Code> prop. The default value is <Code>small</Code>.
      </BodyText>
      <BodyText>Override the default size:</BodyText>
      <CodeDiv spacing expand={false}>
        {`import { IconBulb } from '@elhub/ds-icons'

<IconBulb size="small" />`}
      </CodeDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' level='2' id='usage'>
        Customising icons
      </Heading>
      <VerticalSpace />
      <BodyText>Color, size and rotation can be customized.</BodyText>

      <DemoableDiv
        code={`
<div>
  <IconCross size='medium'/>
  <IconCross size='medium' color='var(--eds-color-feedback-error-dark-primary)'/>
  <IconCross size='medium' style={{
      transform: 'perspective(70px) rotateX(15deg) rotateY(45deg) rotateZ(-15deg)'
  }}/>
  <IconCross size='medium' style={{ 
      backgroundColor: '--var(--eds-button-color-background-active)' }} />
</div>
          `}
      >
        <FlexDiv>
          <Icons.IconCross size='medium' />
          <HorizontalSpace />
          <Icons.IconCross size='medium' color='var(--eds-color-feedback-error-dark-primary)' />
          <HorizontalSpace />
          <Icons.IconCross
            size='medium'
            style={{ transform: 'perspective(70px) rotateX(15deg) rotateY(45deg) rotateZ(-15deg)' }}
          />
          <HorizontalSpace />
          <Icons.IconCross
            size='medium'
            style={{ backgroundColor: 'var(--eds-color-feedback-error-dark-primary)' }}
          />
        </FlexDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <a href='#browse' className='eds-sr-only'>
        Usage
      </a>
      <Heading className='toc' size='medium' level='2' id='browse'>
        Browsing icon library
      </Heading>
      <VerticalSpace />
      <BodyText>
        Search all the {Object.keys(Icons).length} icons by typing a query in the text field below.
      </BodyText>

      <Row>
        <Column>
          <FormItem>
            <FormItemLabel>Icon search query</FormItemLabel>
            <TextField
              value={filterText}
              onChange={(e) => {
                setFilterText(e.target.value)
              }}
            />
          </FormItem>
        </Column>
        <Column />
      </Row>
      <VerticalSpace size='2' />
      <FlexDiv style={{ flexWrap: 'wrap' }}>
        {Object.keys(Icons)
          .filter((icon) => icon.toLowerCase().match(filterText.toLowerCase()))
          .map((icon, id) => {
            const Icon = Icons[icon]
            return (
              <Panel
                key={icon + id}
                border
                style={{ padding: '0.5rem', margin: '0.5rem', alignItems: 'center', display: 'flex', gap: 8 }}
              >
                <Icon />
                {icon}
              </Panel>
            )
          })}
      </FlexDiv>
      <VerticalSpace size='3' />
    </>
  )
}

export default ResourcesIcons
