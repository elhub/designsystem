import { Alert, BodyText, Heading, Link, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { ButtonAllVariantsExample } from './examples/AllVariants'
import buttonAllVariantsSource from './examples/AllVariants.tsx?raw'
import { ButtonCautionExample } from './examples/Caution'
import buttonCautionSource from './examples/Caution.tsx?raw'
import { ButtonDefaultExample } from './examples/Default'
import buttonDefaultSource from './examples/Default.tsx?raw'
import { ButtonDisabledExample } from './examples/Disabled'
import buttonDisabledSource from './examples/Disabled.tsx?raw'
import { ButtonIconsExample } from './examples/Icons'
import buttonIconsSource from './examples/Icons.tsx?raw'
import { ButtonInvisibleExample } from './examples/Invisible'
import buttonInvisibleSource from './examples/Invisible.tsx?raw'
import { ButtonLoadingExample } from './examples/Loading'
import buttonLoadingSource from './examples/Loading.tsx?raw'
import { ButtonPrimaryExample } from './examples/Primary'
import buttonPrimarySource from './examples/Primary.tsx?raw'
import { ButtonSecondaryExample } from './examples/Secondary'
import buttonSecondarySource from './examples/Secondary.tsx?raw'
import { ButtonSizesExample } from './examples/Sizes'
import buttonSizesSource from './examples/Sizes.tsx?raw'
import { ButtonTertiaryExample } from './examples/Tertiary'
import buttonTertiarySource from './examples/Tertiary.tsx?raw'

const ComponentsButton: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='button' level='1' spacing>
        Button
      </Heading>

      <VerticalSpace />
      <BodyText>
        Button components are best suited when the user triggers actions and wait for a response. For
        navigation actions, links are better suited.
      </BodyText>

      <BodyText>
        For example, the navigation menu bar uses links for navigation, not buttons. To add/remove elements
        from a table, a button is better suited than a link.
      </BodyText>

      <BodyText>
        You can still style links as buttons, if you prefer. See the{' '}
        <Link href={`${import.meta.env.BASE_URL}components/link`}>Link component page</Link> to learn how to
        do that.
      </BodyText>

      <VerticalSpace size='3' />
      {/* ------------------------------------------------------------------ */}
      <Heading className='toc' size='medium' id='badge-default' level='2' spacing>
        All variants
      </Heading>

      <DemoableDiv alignContent='center' code={buttonAllVariantsSource} codeHighlighter='shiki'>
        <ButtonAllVariantsExample />
      </DemoableDiv>

      {/* ------------------------------------------------------------------ */}

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='button-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace />

      <BodyText>Default button will have a primary variant and small size:</BodyText>

      <DemoableDiv alignContent='center' code={buttonDefaultSource} codeHighlighter='shiki'>
        <ButtonDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='button-variant' level='2' spacing>
        Variants
      </Heading>
      <VerticalSpace />

      <BodyText>
        The <code>variant</code> prop can be one of the following 4 strings:
      </BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'caution' | 'invisible'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>ButtonVariant</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='button-variant-primary' level='3' spacing>
        Primary variant
      </Heading>

      <VerticalSpace />

      <BodyText>
        This is the default variant, and should be used for actions that continue the task, such as data
        submission.
      </BodyText>

      <DemoableDiv alignContent='center' code={buttonPrimarySource} codeHighlighter='shiki'>
        <ButtonPrimaryExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='button-variant-secondary' level='3' spacing>
        Secondary variant
      </Heading>

      <VerticalSpace />

      <BodyText>
        This is the optional variant, and should be used for actions that are collateral to the task, such as
        document preview, opening a modal for more data input, etc.
      </BodyText>

      <DemoableDiv alignContent='center' code={buttonSecondarySource} codeHighlighter='shiki'>
        <ButtonSecondaryExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='button-variant-tertiary' level='3' spacing>
        Tertiary variant
      </Heading>
      <VerticalSpace />

      <BodyText>
        This is a tertiary button variant, where the button is used for actions that are not as important as
        the primary and secondary actions.
      </BodyText>

      <DemoableDiv alignContent='center' code={buttonTertiarySource} codeHighlighter='shiki'>
        <ButtonTertiaryExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='button-variant-invisible' level='3' spacing>
        Invisible variant
      </Heading>
      <VerticalSpace />

      <BodyText>
        This is a borderless button variant, for situations where you need a button that works visually
        inline, such as add / remove buttons for table rows.
      </BodyText>

      <DemoableDiv alignContent='center' code={buttonInvisibleSource} codeHighlighter='shiki'>
        <ButtonInvisibleExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='button-variant-caution' level='3' spacing>
        Caution variant
      </Heading>
      <VerticalSpace />

      <BodyText>
        This is a button for actions that have the potential of doing changes that are critical or
        non-reversible.
      </BodyText>

      <DemoableDiv alignContent='center' code={buttonCautionSource} codeHighlighter='shiki'>
        <ButtonCautionExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='button-size' level='2' spacing>
        Sizes
      </Heading>

      <VerticalSpace />

      <BodyText>The button size prop can be one of the following 3 strings:</BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type ButtonSize = 'medium' | 'small' | 'xsmall'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>ButtonSize</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <VerticalSpace />
      <DemoableDiv alignContent='center' code={buttonSizesSource} codeHighlighter='shiki'>
        <ButtonSizesExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='button-disabled' level='2' spacing>
        Disabled
      </Heading>

      <VerticalSpace />

      <BodyText>
        It is recommended that, for buttons that are not yet ready to be pressed, you show a disabled button
        instead of hiding or not rendering the button.
      </BodyText>

      <BodyText>
        {' '}
        This helps a lot for accessibility, and it tells users that there is something that needs to be done
        in order to activate the button, which is preferrable than not letting the user know that the button
        exists anyway.
      </BodyText>

      <DemoableDiv alignContent='center' code={buttonDisabledSource} codeHighlighter='shiki'>
        <ButtonDisabledExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='button-loading' level='2' spacing>
        Loading
      </Heading>

      <VerticalSpace />

      <BodyText>
        the best way to let the user know that the page is working to satisfy his request, is through a loader
        animation inside the button that was triggered by the user in the first place.
      </BodyText>

      <DemoableDiv alignContent='center' code={buttonLoadingSource} codeHighlighter='shiki'>
        <ButtonLoadingExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='button-icons' level='2' spacing>
        Button icons
      </Heading>

      <VerticalSpace />

      <BodyText>
        You set the icon with the <code>icon</code> props, and set the icon position with{' '}
        <code>iconPosition</code> prop.
      </BodyText>

      <BodyText>The button position prop can be one of the following 2 strings:</BodyText>

      <CodeDiv expand={false} highlighter='shiki' spacing>
        export type ButtonIconPosition = 'left' | 'right'
      </CodeDiv>

      <Alert>
        It is preferable to add the icon on the left position, for the majority of situations. Situations
        where the icon should be on the right include a right arrow for 'Next' navigating buttons.
      </Alert>

      <DemoableDiv alignContent='center' code={buttonIconsSource} codeHighlighter='shiki'>
        <ButtonIconsExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>ButtonProps</code> extends <code>React.HTMLAttributes&lt;HTMLButtonElement&gt;</code>, as
        the top level uses a <code>button</code> tag. As such, you can pass <code>button</code> props from{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement'>
          HTMLButtonElement
        </Link>{' '}
        interface, such as <code>type</code>,{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement'>HTMLElement</Link> props
        such as <code>style</code>, as well as{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/UIEvent'>UI events</Link> such as{' '}
        <code>onClick</code>. They will all be passed to the <code>&lt;button&gt;</code> element.
      </BodyText>

      <VerticalSpace />

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
              <code>disabled</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets button to disabled</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>icon</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>JSX.Element</code>
            </Table.DataCell>
            <Table.DataCell>Renders a button icon</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>iconPosition</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'left' | 'right'</code>
            </Table.DataCell>
            <Table.DataCell>Sets the button's icon position</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>left</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>loading</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets button with a loading animation</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'large' | 'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets button size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>small</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>variant</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'primary' | 'secondary' | 'tertiary' | 'caution'</code>
            </Table.DataCell>
            <Table.DataCell>Sets button variant</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>primary</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsButton
