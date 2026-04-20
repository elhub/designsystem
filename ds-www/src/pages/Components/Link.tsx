import { BodyText, Heading, Link, PileDiv, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'

const ComponentsLink: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='link' level='1' spacing>
        Link
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>Link</code> component is a styled anchor element. Use it preferably for actions that take
        the user to a new page, internal or external, without data submission.
      </BodyText>

      <BodyText>
        For external links, it is recommended that you add a <code>target='blank'</code> attribute, so that
        the linked page opens in a new tab. Add also an external link icon, so the user knows that pressing
        the link will take him to an external page.
      </BodyText>

      <VerticalSpace size='2' />

      <DemoableDiv
        alignContent='center'
        code={`import { Link } from '@elhub/ds-components'

const Component = () => {
  return ( 
    <PileDiv>
      <BodyText>
        This is a
         <Link 
           href='#'
         >
           link
         </Link> 
         .
      </BodyText>
    </PileDiv>
  )
}`}
      >
        <PileDiv>
          <BodyText>
            This is a <Link href='#'>Link</Link>.
          </BodyText>
        </PileDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='link-disabled' level='2' spacing>
        Variants & external
      </Heading>

      <VerticalSpace />

      <BodyText>
        Links can have different variants, such as <code>default</code> and <code>alternative</code>.
        Alternative links have no underline. You can also set a link as <code>external</code>, which will open
        the link in a new tab.
      </BodyText>

      <VerticalSpace />
      <DemoableDiv
        alignContent='center'
        code={`import { Link } from '@elhub/ds-components'

const Component = () => {
  return (
    <PileDiv>
      <BodyText>
        <Link href='#default'>Default link</Link>
      </BodyText>
      <BodyText>
        <Link variant='alternative' href='#alternative'>Alternative link</Link>
      </BodyText>
      <BodyText>
        <Link external href='#external'>External link</Link>
      </BodyText>
      <BodyText>
      <Link external variant='alternative' href='#external-alternative'>External alternative link</Link>
</BodyText>
    </PileDiv>
  )
}`}
      >
        <PileDiv style={{ gap: 12 }}>
          <BodyText>
            <Link href='#default'>Default link</Link>
          </BodyText>
          <BodyText>
            <Link variant='alternative' href='#alternative'>
              Alternative link
            </Link>
          </BodyText>
          <BodyText>
            <Link external href='#external'>
              External link
            </Link>
          </BodyText>
          <BodyText>
            <Link external variant='alternative' href='#external-alternative'>
              External alternative link
            </Link>
          </BodyText>
        </PileDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='link-disabled' level='2' spacing>
        Disabled
      </Heading>

      <VerticalSpace />

      <BodyText>
        It is recommended that, for links that are not yet ready to be pressed, you show a disabled link
        instead of hiding or not rendering the link.
      </BodyText>

      <BodyText>
        This helps a lot for accessibility, and it tells users that there is something that needs to be done
        in order to activate the link, which is preferrable to not letting the user know that the link exists
        anyway.
      </BodyText>

      <VerticalSpace />
      <DemoableDiv
        alignContent='center'
        code={`import { Link } from '@elhub/ds-components'

const Component = () => {
  return (
    <PileDiv>
      <BodyText>
        <Link disabled href='#Disabled'>Disabled link</Link>
      </BodyText>
    </PileDiv>
  )
}`}
      >
        <PileDiv>
          <BodyText>
            <Link disabled href='#Disabled'>
              Disabled link
            </Link>
          </BodyText>
          <BodyText>
            <Link disabled href='#Disabled-alternative' variant='alternative'>
              Disabled alternative link
            </Link>
          </BodyText>
        </PileDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>LinkProps</code> interface extends{' '}
        <code>React.HTMLAttributes&lt;HTMLAnchorElement&gt;</code>, as the top level uses a <code>a</code>{' '}
        tag. As such, you can pass{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement'>
          HTMLAnchorElement
        </Link>{' '}
        props and <Link href='https://developer.mozilla.org/en-US/docs/Web/API/UIEvent'>UI events</Link> such
        as <code>onClick</code>.
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
              <code>variant</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'default' | 'alternative'</code>
            </Table.DataCell>
            <Table.DataCell>Link variant</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>default</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>external</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Is the link external</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>{' '}
          <Table.Row>
            <Table.DataCell>
              <code>disabled</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Disables the link</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsLink
