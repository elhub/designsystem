import { BodyText, Heading, Link, Table, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import { ModalAnchoredExample } from './examples/Anchored'
import modalAnchoredSource from './examples/Anchored.tsx?raw'
import { ModalDefaultExample } from './examples/Default'
import modalDefaultSource from './examples/Default.tsx?raw'

const ComponentsHome: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='modal' level='1' spacing>
        Modal
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>Modal</code> component 'steals' the user attention to solve a situation before proceeding.
        Modals are aggressive elements that interrupt the user's workflow, so use them if there is something
        important to address, otherwise think of other wfays to prompt the user.
      </BodyText>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='modal-composition' level='2' spacing>
        Composition
      </Heading>
      <BodyText>
        The <code>Modal</code> component is composed of four main parts:
      </BodyText>
      <BodyText>
        <ul>
          <li>
            <code>Modal.Header</code>: This is the top section of the modal, containing the title of the
            modal. It helps users understand the purpose of the modal. It can also contain a description of
            the modal's content.
          </li>
          <li>
            <code>Modal.Content</code>: This is the main content area of the modal. It can contain any type of
            content, such as text, forms, images, etc. This is where you provide the information or inputs
            that the user needs.
          </li>
          <li>
            <code>Modal.Footer</code>: This is the bottom section of the modal. It usually contains actions
            related to the modal's content, such as buttons to submit a form, or to close the modal.
          </li>
          <li>
            <code>Close button</code>: This is a button that allows the user to close the modal. It placed in
            the top right corner of the modal and is set by default and toggled by the <em>closeButton</em>{' '}
            prop
          </li>
        </ul>
      </BodyText>
      <VerticalSpace />

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='modal-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace />

      <BodyText>The default modal attaches itself at the body element level.</BodyText>

      <DemoableDiv alignContent='center' code={modalDefaultSource} codeHighlighter='shiki'>
        <ModalDefaultExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='modal-container' level='2' spacing>
        Anchoring modal's container
      </Heading>

      <VerticalSpace />

      <DemoableDiv alignContent='center' code={modalAnchoredSource} codeHighlighter='shiki'>
        <ModalAnchoredExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>ModalProps</code> uses the <code>ReactModal</code> component from the{' '}
        <Link href='https://www.npmjs.com/package/react-modal'>react-modal package</Link>.
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
              <code>aria-describedby</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets aria describedby value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>aria-label</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets aria label value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>aria-labelledby</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>string</code>
            </Table.DataCell>
            <Table.DataCell>Sets aria labelledby value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>aria-modal</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets aria modal value</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>closeButton</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Adds a close button to the modal</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>true</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onClose</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>() =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function when modal closes</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>open</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Sets model open state</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>parentSelector</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>() =&gt; HTMLElement</code>
            </Table.DataCell>
            <Table.DataCell>Set a parent node to attach modal</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>body</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>shouldCloseOnOverlayClick</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set if modal should close with overlay click</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>true</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsHome
