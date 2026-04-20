import { Alert, BodyText, Button, Heading, Link, Table, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useState } from 'react'

const ComponentsAlert: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(true)
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='Alert' level='1' spacing>
        Alert
      </Heading>

      <VerticalSpace />
      <BodyText>
        Alert banners should convey short, clear information to the user about the new application status
        after a state update (by user request or system response).
      </BodyText>

      <BodyText>
        Alert placement can be either close to where the user interaction occurred, or in a container that is
        designed to float and be visible regardless of the page scrolling position.
      </BodyText>

      <BodyText>
        In other words, make sure the user sees the alert, in the expected place, with the right variant for
        the proper information importance/type.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Alert-default' level='2' spacing>
        Default component
      </Heading>

      <VerticalSpace />

      <BodyText>The default component uses the info variant.</BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Alert } from '@elhub/ds-components'
                    
const Component = () => {
  return <Alert>
    This recipe serves 4 or more people
  </Alert>
}`}
      >
        <Alert>This recipe serves 4 or more people</Alert>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Alert-variant' level='2' spacing>
        Variants
      </Heading>

      <VerticalSpace />
      <BodyText>The alert variant prop can be one of the following 4 strings:</BodyText>

      <CodeDiv expand={false} spacing copy={false}>
        export type AlertVariant = 'error' | 'warning' | 'info' | 'success'
      </CodeDiv>

      <BodyText>
        You can use the exported type <code>AlertVariant</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <VerticalSpace size='2' />
      <Heading className='toc' size='small' id='alert-variant-error' level='3' spacing>
        Error
      </Heading>
      <VerticalSpace />

      <BodyText>
        Use error variants preferably communicate status errors, such as failure of data submission, or
        resources not found. Do not use it for form validation failures, there are other error elements such
        as labels to handle such form states.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Alert } from '@elhub/ds-components'

const Component = () => {
  return (
      <Alert variant='error'>
        The recipe you requested was not found 
      </Alert>
  )
}`}
      >
        <Alert variant='error'>The recipe you requested was not found</Alert>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='alert-variant-warning' level='3' spacing>
        Warning
      </Heading>
      <VerticalSpace />

      <BodyText>
        Use warning variants to alert the user of system states that are important to be addressed, while they
        do not stop the application from continuing to work without user intervention.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Alert } from '@elhub/ds-components'

const Component = () => {
  return (
      <Alert variant='warning'>
        Do not add eggs while the milk is hot
      </Alert>
  )
}`}
      >
        <Alert variant='warning'>Do not add eggs while the milk is hot</Alert>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='alert-variant-info' level='3' spacing>
        Info
      </Heading>

      <VerticalSpace />

      <BodyText>
        Use info variants for relevant information the user needs to know, but has no immediate need for the
        user to act on it, unlike warnings and errors.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Alert } from '@elhub/ds-components'

const Component = () => {
  return (
        <Alert variant='info'>
          This recipe was downloaded 530 times
        </Alert>
  )
}`}
      >
        <Alert variant='info'>This recipe was downloaded 530 times</Alert>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='alert-variant-success' level='3' spacing>
        Success
      </Heading>

      <VerticalSpace />

      <BodyText>
        Use success variants to reassure the user that some important task was successfully performed. Try to
        use success alerts only when necessary, as user attention doesn't need to be drawn on every successful
        action.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Alert } from '@elhub/ds-components'

const Component = () => {
  return (
        <Alert variant='success'>
          The cake is ready
        </Alert>
  )
}`}
      >
        <Alert variant='success'>The cake is ready</Alert>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='alert-size' level='2' spacing>
        Sizes
      </Heading>

      <VerticalSpace />

      <BodyText>The alert size prop can be one of the following 2 strings:</BodyText>

      <CodeDiv expand={false} spacing copy={false}>
        export type AlertSize = 'medium' | 'small'
      </CodeDiv>

      <BodyText>Smaller alerts can be more suited for mobile devices.</BodyText>

      <BodyText>
        You can use the exported type <code>AlertSize</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Alert } from '@elhub/ds-components'

const Component = () => {
  return (
    <>
      <Alert 
        variant='info' 
        size='medium'
      >
        This is a medium size recipe
      </Alert>
      <VerticalSpace/>
      <Alert
        variant='info'
        size='small'
      >
        This is a small size recipe
      </Alert>
    </>
  )
}`}
      >
        <Alert variant='info' size='medium'>
          This is a medium size recipe
        </Alert>
        <VerticalSpace />
        <Alert variant='info' size='small'>
          This is a small size recipe
        </Alert>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='alert-close' level='2' spacing>
        Close button
      </Heading>
      <VerticalSpace />

      <BodyText>
        If you pass a prop <code>onClose</code>, then a button will show up to close the alert.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Alert } from '@elhub/ds-components'

const Component = () => {
   
  const [showAlert, setShowAlert] = useState<>(false)
  return (
     <>
       <Button 
          onClick={() => setShowAlert(true)}
        >
         Open oven
       </Button>
       <VerticalSpace/>
       {showAlert && (
         <Alert 
           variant='warning'
           onClose={() => setShowAlert(false)}
         >
           The cake is not baked yet 
         </Alert>
       )}
     </>
  )
}`}
      >
        <>
          <Button
            onClick={() => {
              setShowAlert(true)
            }}
          >
            Open oven
          </Button>
          <VerticalSpace />
          {showAlert && (
            <Alert
              variant='warning'
              onClose={() => {
                setShowAlert(false)
              }}
            >
              The cake is not baked yet
            </Alert>
          )}
        </>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='alert-props' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>AlertProps</code> interface extends <code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code>,
        as the top level uses a <code>div</code> tag. As such, you can pass{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement'>HTMLDivElement</Link>{' '}
        props.
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
              <code>onClose</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>() =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function for a close button</Table.DataCell>
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
            <Table.DataCell>Sets alert size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>spacing</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Adds a margin bottom</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>variant</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'warning' | 'error' | 'info' | 'success'</code>
            </Table.DataCell>
            <Table.DataCell>Sets alert variant</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>info</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsAlert
