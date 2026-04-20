import {
  BodyText,
  FlexEndDiv,
  Heading,
  HorizontalSpace,
  Link,
  Loader,
  PileCenterDiv,
  Table,
  VerticalSpace
} from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'

const ComponentsLoader: React.FC = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='loader' level='1' spacing>
        Loader
      </Heading>
      <VerticalSpace />

      <BodyText spacing>
        The <code>Loader</code> component renders a spinning circular image, using SVG elements.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='loader-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace />

      <BodyText spacing>The default component uses a primary variant, medium size.</BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Loader } from '@elhub/ds-components'

const Component = () => {
  return (
    <Loader/>
  )
}`}
      >
        <Loader />
      </DemoableDiv>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='loader-size' level='2' spacing>
        Size
      </Heading>
      <VerticalSpace />

      <BodyText spacing>
        The <code>size</code> prop can be one of the following 3 strings:
      </BodyText>

      <CodeDiv expand={false} spacing>
        export type LoaderSize = 'large' | 'medium' | 'small' ;
      </CodeDiv>

      <BodyText spacing>
        You can use the exported type <code>LoaderSize</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Size</Table.ColumnHeader>
            <Table.ColumnHeader>CSS Variable</Table.ColumnHeader>
            <Table.ColumnHeader>rem/px size</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>large</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>var(--eds-size-8)</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>2rem (32px)</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>var(--eds-size-5)</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>1.5rem (24px)</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>small</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>var(--eds-size-4)</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>1rem (16px)</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <DemoableDiv
        alignContent='center'
        code={`import { Loader } from '@elhub/ds-components'

const Component = () => {
  return (
    <FlexEndDiv>
   
      <PileCenterDiv>
        <Loader size='large' />
        <span style={{ whiteSpace: 'nowrap' }}>large</span>
      </PileCenterDiv>
      <HorizontalSpace />
      <PileCenterDiv>
        <Loader size='medium' />
        <span style={{ whiteSpace: 'nowrap' }}>medium</span>
      </PileCenterDiv>
      <HorizontalSpace />
      <PileCenterDiv>
        <Loader size='small' />
        <span style={{ whiteSpace: 'nowrap' }}>small</span>
      </PileCenterDiv>
    </FlexEndDiv>
  )
}`}
      >
        <FlexEndDiv>
          <PileCenterDiv>
            <Loader size='large' />
            <span style={{ whiteSpace: 'nowrap' }}>large</span>
          </PileCenterDiv>
          <HorizontalSpace />
          <PileCenterDiv>
            <Loader size='medium' />
            <span style={{ whiteSpace: 'nowrap' }}>medium</span>
          </PileCenterDiv>
          <HorizontalSpace />
          <PileCenterDiv>
            <Loader size='small' />
            <span style={{ whiteSpace: 'nowrap' }}>small</span>
          </PileCenterDiv>
        </FlexEndDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='loader-transparent' level='2' spacing>
        Variant
      </Heading>
      <VerticalSpace />

      <BodyText spacing>
        The <code>variant</code> prop can be one of the following 3 strings:
      </BodyText>

      <CodeDiv expand={false} spacing>
        export type LoaderVariant = 'primary' | 'secondary' | 'inverted';
      </CodeDiv>

      <BodyText spacing>
        You can use the exported type <code>LoaderVariant</code> from <code>@elhub/ds-components</code>
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Loader } from '@elhub/ds-components'

const Component = () => {
  return (
    <FlexEndDiv>
      <PileCenterDiv>
        <Loader size='large' variant='primary'/>
        <span>Primary</span>
      </PileCenterDiv>
      <HorizontalSpace />
      <PileCenterDiv>
        <Loader size='large' variant='secondary'/>
        <span>Secondary</span>
      </PileCenterDiv>
        <HorizontalSpace />
      <PileCenterDiv>
        <div style={{backgroundColor: 'var(--eds-background-color-inverted)'}}>
          <Loader size='large' variant='inverted'/>
        </div>
        <span>Inverted</span>
      </PileCenterDiv>
    </FlexEndDiv>
  )
}`}
      >
        <FlexEndDiv>
          <PileCenterDiv>
            <Loader size='large' variant='primary' />
            <span>Primary</span>
          </PileCenterDiv>
          <HorizontalSpace />
          <PileCenterDiv>
            <Loader size='large' variant='secondary' />
            <span>Secondary</span>
          </PileCenterDiv>
        </FlexEndDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>
      <VerticalSpace />

      <BodyText spacing>
        The <code>LoaderProps</code> interface extends <code>React.SVGProps&lt;SVGSVGElement&gt;</code>, as
        the top level uses a <code>svg</code> tag. As such, you can pass{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement'>SVGSVGElement</Link>{' '}
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
              <code>size</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'large' | 'medium' | 'small'</code>
            </Table.DataCell>
            <Table.DataCell>Sets loader size</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>medium</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>title</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>React.ReactNode</code>
            </Table.DataCell>
            <Table.DataCell>Sets loader title</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>variant</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'primary' | 'secondary'</code>
            </Table.DataCell>
            <Table.DataCell>Sets loader variant</Table.DataCell>
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

export default ComponentsLoader
