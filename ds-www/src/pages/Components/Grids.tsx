import {
  BodyText,
  FlexBaseDiv,
  FlexBaseSpacedDiv,
  FlexCenterDiv,
  FlexCenterSpacedDiv,
  FlexDiv,
  FlexEndDiv,
  FlexEndSpacedDiv,
  FlexStartDiv,
  FlexStartSpacedDiv,
  Heading,
  Panel,
  PileCenterDiv,
  PileDiv,
  PileEndDiv,
  PileStartDiv,
  VerticalSpace,
  Row,
  Column,
  AlignStartRow,
  AlignCenterRow,
  AlignEndRow,
  AlignCenterColumn,
  AlignEndColumn
} from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'
import styled from 'styled-components'

const VisibleRow = styled(Row)`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
`

const ComponentsHome = () => {
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='grids' level='2' spacing>
        Grids
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        Grids are a collection of styled <code>div</code> elements that are useful to align their contents or
        set spaces between them, for a layout organization that is easier to read in the code.
      </BodyText>

      <BodyText>
        The grid elements fall into these categories:
        <ul>
          <li>
            <BodyText>
              <strong>FlexDiv</strong> elements, <code>div</code> with flex flow as <code>row</code> for
              aligning elements in a horizontal way.
            </BodyText>
          </li>
          <li>
            <BodyText>
              <strong>PileDiv</strong> elements, <code>div</code> with flex flow as <code>column</code> for
              aligning elements in a vertical way. It differs from <code>Column</code> as it does not set any
              margin of padding.
            </BodyText>
          </li>
          <li>
            <BodyText>
              <strong>Row</strong> elements, which extends <code>FlexDiv</code> with margin for gutters,
              responsive flow, and different values for vertical alignments
            </BodyText>
          </li>
          <li>
            <BodyText>
              <strong>Column</strong> elements, which extends <code>PileDiv</code> with margin for gutters,
              and different values on horizontal alignments
            </BodyText>
          </li>

          <li>
            <BodyText>
              Other generic <code>div</code> elements for quick padding or display styles.
            </BodyText>
          </li>
        </ul>
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='flexdiv' level='2' spacing>
        FlexDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        FlexDiv is a shorthand for a <code>div</code> element with a <code>row</code> flex direction
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FlexDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <FlexDiv>
      <FormatAlignLeft size='2rem'/>
      <FormatAlignCenter size='2rem'/>
      <FormatAlignRight size='2rem'/>
      <FormatAlignJustify size='2rem'/>
    </FlexDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
          <FlexDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </FlexDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='small' id='FlexBaseDiv' level='3' spacing>
        FlexBaseDiv
      </Heading>
      <VerticalSpace />

      <BodyText>
        FlexBaseDiv is a <code>FlexDiv</code> component with <code>align-items</code> set to{' '}
        <code>baseline</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FlexBaseDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <FlexBaseDiv>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
    </FlexBaseDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
          <FlexBaseDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </FlexBaseDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='small' id='FlexStartDiv' level='3' spacing>
        FlexStartDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        FlexStartDiv is a <code>FlexDiv</code> component with <code>align-items</code> set to{' '}
        <code>flex-start</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FlexStartDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <FlexStartDiv>
      <FormatAlignLeft size='2rem'/>
      <FormatAlignCenter size='2rem'/>
      <FormatAlignRight size='2rem'/>
      <FormatAlignJustify size='2rem'/>
    </FlexStartDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
          <FlexStartDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </FlexStartDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='small' id='FlexCenterDiv' level='3' spacing>
        FlexCenterDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        FlexStartDiv is a <code>FlexDiv</code> component with <code>align-items</code> set to{' '}
        <code>center</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FlexCenterDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <FlexCenterDiv>
      <FormatAlignLeft size='2rem'/>
      <FormatAlignCenter size='2rem'/>
      <FormatAlignRight size='2rem'/>
      <FormatAlignJustify size='2rem'/>
    </FlexCenterDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
          <FlexCenterDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </FlexCenterDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='small' id='FlexEndDiv' level='3' spacing>
        FlexEndDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        FlexStartDiv is a <code>FlexDiv</code> component with <code>align-items</code> set to{' '}
        <code>flex-end</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FlexEndDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <FlexEndDiv>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
    </FlexEndDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
          <FlexEndDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </FlexEndDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='small' id='FlexBaseSpacedDiv' level='3' spacing>
        FlexBaseSpacedDiv
      </Heading>
      <VerticalSpace />

      <BodyText>
        FlexBaseSpacedDiv is a <code>FlexBaseDiv</code> component with <code>justify-content</code> set to{' '}
        <code>spaced-between</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FlexBaseSpacedDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <FlexBaseSpacedDiv>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
    </FlexBaseSpacedDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
          <FlexBaseSpacedDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </FlexBaseSpacedDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='small' id='FlexStartSpacedDiv' level='3' spacing>
        FlexStartSpacedDiv
      </Heading>
      <VerticalSpace />

      <BodyText>
        FlexStartSpacedDiv is a <code>FlexStartDiv</code> component with <code>justify-content</code> set to{' '}
        <code>spaced-between</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FlexStartSpacedDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <FlexStartSpacedDiv>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
    </FlexStartSpacedDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
          <FlexStartSpacedDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </FlexStartSpacedDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='FlexCenterSpacedDiv' level='3' spacing>
        FlexCenterSpacedDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        FlexCenterSpacedDiv is a <code>FlexCenterDiv</code> component with <code>justify-content</code> set to{' '}
        <code>spaced-between</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FlexCenterSpacedDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <FlexCenterSpacedDiv>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
    </FlexCenterSpacedDiv>
  )
}`}
      >
        <FlexDiv>
          <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
            <FlexCenterSpacedDiv style={{ width: '100%' }}>
              <IconWarningCircle size='medium' />
              <IconWarningCircle size='medium' />
              <IconWarningCircle size='medium' />
              <IconWarningCircle size='medium' />
            </FlexCenterSpacedDiv>
          </Panel>
        </FlexDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='FlexEndSpacedDiv' level='3' spacing>
        FlexEndSpacedDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        FlexEndSpacedDiv is a <code>FlexEndDiv</code> component with <code>justify-content</code> set to{' '}
        <code>spaced-between</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FlexEndSpacedDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <FlexEndSpacedDiv>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
    </FlexEndSpacedDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
          <FlexEndSpacedDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </FlexEndSpacedDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='PileDiv' level='2' spacing>
        PileDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        <code>PileDiv</code> is a shorthand for <code>div</code> with a column flex direction
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { PileDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <PileDiv>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
    </PileDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '150px', width: '300px' }}>
          <PileDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </PileDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='PileStartDiv' level='3' spacing>
        PileStartDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        <code>PileStartDiv</code> is a <code>PileDiv</code> with a <code>align-items</code> set to{' '}
        <code>flex-start</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { FlexStartDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <PileStartDiv>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
    </PileStartDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '150px', width: '300px' }}>
          <PileStartDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </PileStartDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='PileCenterDiv' level='3' spacing>
        PileCenterDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        <code>PileCenterDiv</code> is a <code>PileDiv</code> with a <code>align-items</code> set to{' '}
        <code>center</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { PileCenterDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <PileCenterDiv>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
    </PileCenterDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '150px', width: '300px' }}>
          <PileCenterDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </PileCenterDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='PileEndDiv' level='3' spacing>
        PileEndDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        <code>PileEndDiv</code> is a <code>PileDiv</code> with a <code>align-items</code> set to{' '}
        <code>flex-end</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { PileEndDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <FlexEndDiv>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
      <IconWarningCircle size='medium'/>
    </FlexEndDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '150px', width: '300px' }}>
          <PileEndDiv style={{ width: '100%' }}>
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
            <IconWarningCircle size='medium' />
          </PileEndDiv>
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='grids-row' level='2' spacing>
        Row
      </Heading>

      <BodyText>
        For a layout container that will flow like a table row (it rhymes). It breaks for column flow for
        small screens ( &lt; 768 px).
      </BodyText>

      <BodyText>
        Rows have a negative margin in the left and right of 0.5rem, so that the <code>Column</code> component
        can reclaim with a margin and create natural gutters between columns, therefore it is recommended that{' '}
        <code>Row</code> children will be wrapped in <code>Column</code> components.
      </BodyText>

      <BodyText>
        In the demos below, we are setting <code>style</code> and <code>height</code> props only to make
        alignments more visible. You do not need to pass them to <code>Row</code>, as they should be invisible
        elements.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Row } from '@elhub/ds-components'

const VisibleRow = style(Row)\`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
\`
const Component = () => {
    
  return (
    <VisibleRow>
      <Column>
        <Panel border>One panel</Panel>
      </Column>
      <Column>
        <Panel border>Another panel</Panel>
      </Column>
    </Row>
  )
}`}
      >
        <VisibleRow>
          <Column>
            <Panel border>One panel</Panel>
          </Column>
          <Column>
            <Panel border>Another panel</Panel>
          </Column>
        </VisibleRow>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='grids-AlignStartRow' level='3' spacing>
        AlignStartRow
      </Heading>

      <VerticalSpace />

      <BodyText>
        Same as <code>Row</code>, but with an align-items set to <code>flex-start</code>.{' '}
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Row, AlignStartRow } from '@elhub/ds-components'

const VisibleRow = style(Row)\`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
\`

const Component = () => {
  return (
    <VisibleRow as={AlignStartRow}>
      <Column>
        <Panel border>One panel</Panel>
      </Column>
      <Column>
        <Panel border>Another panel</Panel>
      </Column>
    </AlignStartRow>
  )
}`}
      >
        <VisibleRow as={AlignStartRow}>
          <Column>
            <Panel border>One panel</Panel>
          </Column>
          <Column>
            <Panel border>Another panel</Panel>
          </Column>
        </VisibleRow>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='grids-AlignCenterRow' level='3' spacing>
        AlignCenterRow
      </Heading>

      <VerticalSpace />

      <BodyText>
        Same as <code>Row</code>, but with an align-items set to <code>center</code>.{' '}
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Row, AlignCenterRow } from '@elhub/ds-components'

const VisibleRow = style(Row)\`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
\`

const Component = () => {
  return (
    <VisibleRow as={AlignCenterRow}>
      <Column>
        <Panel border>One panel</Panel>
      </Column>
      <Column>
        <Panel border>Another panel</Panel>
      </Column>
    </AlignStartRow>
  )
}`}
      >
        <VisibleRow as={AlignCenterRow}>
          <Column>
            <Panel border>One panel</Panel>
          </Column>
          <Column>
            <Panel border>Another panel</Panel>
          </Column>
        </VisibleRow>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='grids-AlignEndRow' level='3' spacing>
        AlignEndRow
      </Heading>

      <BodyText>
        Same as <code>Row</code>, but with an align-items set to <code>flex-end</code>.{' '}
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Row, AlignEndRow } from '@elhub/ds-components'

const VisibleRow = style(Row)\`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
\`

const Component = () => {
  return (
    <VisibleRow as={AlignEndRow}>
      <Column>
        <Panel border>One panel</Panel>
      </Column>
      <Column>
        <Panel border>Another panel</Panel>
      </Column>
    </AlignStartRow>
  )
}`}
      >
        <VisibleRow as={AlignEndRow}>
          <Column>
            <Panel border>One panel</Panel>
          </Column>
          <Column>
            <Panel border>Another panel</Panel>
          </Column>
        </VisibleRow>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='grids-Column' level='2' spacing>
        Column
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>Column</code> components is meant to be places inside <code>Row</code> components, in a
        similar way on how <code>td</code> elements live inside <code>tr</code> elements in a{' '}
        <code>table</code> element.
      </BodyText>

      <BodyText>
        You can set the <code>flex</code> prop so you can have different column width ratios within the same
        row.
      </BodyText>

      <BodyText>
        The default alignment is <code>flex-start</code>, therefore <code>Column</code> is basically a{' '}
        <code>AlignStartColumn</code>.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Row, AlignEndRow } from '@elhub/ds-components'

const VisibleRow = style(Row)\`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
\`

const Component = () => {
  return (
    <VisibleRow>
      <Column>
        <Panel border>One column</Panel>
      </Column>
      <Column flex='3'>
        <Panel border>a 3x bigger column</Panel>
      </Column>
    </AlignStartRow>
  )
}`}
      >
        <VisibleRow>
          <Column>
            <Panel border>One column</Panel>
          </Column>
          <Column flex='3'>
            <Panel border>a 3x bigger column</Panel>
          </Column>
        </VisibleRow>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='grids-AlignCenterColumn' level='3' spacing>
        AlignCenterColumn
      </Heading>

      <VerticalSpace />

      <BodyText>
        Same as <code>Column</code>, but vertically aligning items to the center
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Column } from '@elhub/ds-components'

const VisibleRow = style(Row)\`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
\`

const Component = () => {
  return (
    <VisibleRow>
      <Column>
        <Panel border>Standard column</Panel>
      </Column>
      <AlignCenterColumn>
        <Panel border>AlignCenterColumn</Panel>
      </AlignCenterColumn>
    </VisibleRow>
  )
}`}
      >
        <VisibleRow>
          <Column>
            <Panel border>Standard column</Panel>
          </Column>
          <AlignCenterColumn>
            <Panel border>AlignCenterColumn</Panel>
          </AlignCenterColumn>
        </VisibleRow>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='grid-AlignEndColumn' level='3' spacing>
        AlignEndColumn
      </Heading>

      <VerticalSpace />
      <BodyText>
        This is a <code>Column</code> with vertical alignment to <code>flex-end</code>.{' '}
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { AlignEndColumn } from '@elhub/ds-components'

const VisibleRow = style(Row)\`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
\`

const Component = () => {
  return (
    <VisibleRow>
      <Column>
        <Panel border>Standard column</Panel>
      </Column>
      <AlignEndColumn>
        <Panel border>AlignEndColumn</Panel>
      </AlignEndColumn>
    </VisibleRow>
  )
}`}
      >
        <VisibleRow>
          <Column>
            <Panel border>Standard column</Panel>
          </Column>
          <AlignEndColumn>
            <Panel border>AlignEndColumn</Panel>
          </AlignEndColumn>
        </VisibleRow>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='small' id='HiddenDiv' level='2' spacing>
        HiddenDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        <code>HiddenDiv</code> is a <code>div</code> with <code>display</code> set to <code>none</code>. It is
        useful in some cases, specially when adding text visible only to screen readers.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { HiddenDiv } from '@elhub/ds-components'
    
const Component = () => {
  return (
    <HiddenDiv>
      Hidden content
    </HiddenDiv>
  )
}`}
      >
        <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
          It's a little hard to show a hidden DIV. It just adds display: none; to the style.
        </Panel>
      </DemoableDiv>

      <VerticalSpace size='2' />
    </>
  )
}

export default ComponentsHome
