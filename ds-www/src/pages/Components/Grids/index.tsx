import { BodyText, Heading, VerticalSpace } from '@elhub/ds-components'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import { GridsFlexDivExample } from './examples/FlexDiv'
import gridsFlexDivSource from './examples/FlexDiv.tsx?raw'
import { GridsFlexBaseDivExample } from './examples/FlexBaseDiv'
import gridsFlexBaseDivSource from './examples/FlexBaseDiv.tsx?raw'
import { GridsFlexStartDivExample } from './examples/FlexStartDiv'
import gridsFlexStartDivSource from './examples/FlexStartDiv.tsx?raw'
import { GridsFlexCenterDivExample } from './examples/FlexCenterDiv'
import gridsFlexCenterDivSource from './examples/FlexCenterDiv.tsx?raw'
import { GridsFlexEndDivExample } from './examples/FlexEndDiv'
import gridsFlexEndDivSource from './examples/FlexEndDiv.tsx?raw'
import { GridsFlexBaseSpacedDivExample } from './examples/FlexBaseSpacedDiv'
import gridsFlexBaseSpacedDivSource from './examples/FlexBaseSpacedDiv.tsx?raw'
import { GridsFlexStartSpacedDivExample } from './examples/FlexStartSpacedDiv'
import gridsFlexStartSpacedDivSource from './examples/FlexStartSpacedDiv.tsx?raw'
import { GridsFlexCenterSpacedDivExample } from './examples/FlexCenterSpacedDiv'
import gridsFlexCenterSpacedDivSource from './examples/FlexCenterSpacedDiv.tsx?raw'
import { GridsFlexEndSpacedDivExample } from './examples/FlexEndSpacedDiv'
import gridsFlexEndSpacedDivSource from './examples/FlexEndSpacedDiv.tsx?raw'
import { GridsPileDivExample } from './examples/PileDiv'
import gridsPileDivSource from './examples/PileDiv.tsx?raw'
import { GridsPileStartDivExample } from './examples/PileStartDiv'
import gridsPileStartDivSource from './examples/PileStartDiv.tsx?raw'
import { GridsPileCenterDivExample } from './examples/PileCenterDiv'
import gridsPileCenterDivSource from './examples/PileCenterDiv.tsx?raw'
import { GridsPileEndDivExample } from './examples/PileEndDiv'
import gridsPileEndDivSource from './examples/PileEndDiv.tsx?raw'
import { GridsRowExample } from './examples/Row'
import gridsRowSource from './examples/Row.tsx?raw'
import { GridsAlignStartRowExample } from './examples/AlignStartRow'
import gridsAlignStartRowSource from './examples/AlignStartRow.tsx?raw'
import { GridsAlignCenterRowExample } from './examples/AlignCenterRow'
import gridsAlignCenterRowSource from './examples/AlignCenterRow.tsx?raw'
import { GridsAlignEndRowExample } from './examples/AlignEndRow'
import gridsAlignEndRowSource from './examples/AlignEndRow.tsx?raw'
import { GridsColumnExample } from './examples/Column'
import gridsColumnSource from './examples/Column.tsx?raw'
import { GridsAlignCenterColumnExample } from './examples/AlignCenterColumn'
import gridsAlignCenterColumnSource from './examples/AlignCenterColumn.tsx?raw'
import { GridsAlignEndColumnExample } from './examples/AlignEndColumn'
import gridsAlignEndColumnSource from './examples/AlignEndColumn.tsx?raw'
import { GridsHiddenDivExample } from './examples/HiddenDiv'
import gridsHiddenDivSource from './examples/HiddenDiv.tsx?raw'

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

      <DemoableDiv alignContent='center' code={gridsFlexDivSource} codeHighlighter='shiki'>
        <GridsFlexDivExample />
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

      <DemoableDiv alignContent='center' code={gridsFlexBaseDivSource} codeHighlighter='shiki'>
        <GridsFlexBaseDivExample />
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

      <DemoableDiv alignContent='center' code={gridsFlexStartDivSource} codeHighlighter='shiki'>
        <GridsFlexStartDivExample />
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

      <DemoableDiv alignContent='center' code={gridsFlexCenterDivSource} codeHighlighter='shiki'>
        <GridsFlexCenterDivExample />
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

      <DemoableDiv alignContent='center' code={gridsFlexEndDivSource} codeHighlighter='shiki'>
        <GridsFlexEndDivExample />
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

      <DemoableDiv alignContent='center' code={gridsFlexBaseSpacedDivSource} codeHighlighter='shiki'>
        <GridsFlexBaseSpacedDivExample />
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

      <DemoableDiv alignContent='center' code={gridsFlexStartSpacedDivSource} codeHighlighter='shiki'>
        <GridsFlexStartSpacedDivExample />
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

      <DemoableDiv alignContent='center' code={gridsFlexCenterSpacedDivSource} codeHighlighter='shiki'>
        <GridsFlexCenterSpacedDivExample />
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

      <DemoableDiv alignContent='center' code={gridsFlexEndSpacedDivSource} codeHighlighter='shiki'>
        <GridsFlexEndSpacedDivExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='PileDiv' level='2' spacing>
        PileDiv
      </Heading>

      <VerticalSpace />

      <BodyText>
        <code>PileDiv</code> is a shorthand for <code>div</code> with a column flex direction
      </BodyText>

      <DemoableDiv alignContent='center' code={gridsPileDivSource} codeHighlighter='shiki'>
        <GridsPileDivExample />
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

      <DemoableDiv alignContent='center' code={gridsPileStartDivSource} codeHighlighter='shiki'>
        <GridsPileStartDivExample />
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

      <DemoableDiv alignContent='center' code={gridsPileCenterDivSource} codeHighlighter='shiki'>
        <GridsPileCenterDivExample />
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

      <DemoableDiv alignContent='center' code={gridsPileEndDivSource} codeHighlighter='shiki'>
        <GridsPileEndDivExample />
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

      <DemoableDiv alignContent='center' code={gridsRowSource} codeHighlighter='shiki'>
        <GridsRowExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='grids-AlignStartRow' level='3' spacing>
        AlignStartRow
      </Heading>

      <VerticalSpace />

      <BodyText>
        Same as <code>Row</code>, but with an align-items set to <code>flex-start</code>.{' '}
      </BodyText>

      <DemoableDiv alignContent='center' code={gridsAlignStartRowSource} codeHighlighter='shiki'>
        <GridsAlignStartRowExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='grids-AlignCenterRow' level='3' spacing>
        AlignCenterRow
      </Heading>

      <VerticalSpace />

      <BodyText>
        Same as <code>Row</code>, but with an align-items set to <code>center</code>.{' '}
      </BodyText>

      <DemoableDiv alignContent='center' code={gridsAlignCenterRowSource} codeHighlighter='shiki'>
        <GridsAlignCenterRowExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='grids-AlignEndRow' level='3' spacing>
        AlignEndRow
      </Heading>

      <BodyText>
        Same as <code>Row</code>, but with an align-items set to <code>flex-end</code>.{' '}
      </BodyText>

      <DemoableDiv alignContent='center' code={gridsAlignEndRowSource} codeHighlighter='shiki'>
        <GridsAlignEndRowExample />
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

      <DemoableDiv alignContent='center' code={gridsColumnSource} codeHighlighter='shiki'>
        <GridsColumnExample />
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='grids-AlignCenterColumn' level='3' spacing>
        AlignCenterColumn
      </Heading>

      <VerticalSpace />

      <BodyText>
        Same as <code>Column</code>, but vertically aligning items to the center
      </BodyText>

      <DemoableDiv alignContent='center' code={gridsAlignCenterColumnSource} codeHighlighter='shiki'>
        <GridsAlignCenterColumnExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='grid-AlignEndColumn' level='3' spacing>
        AlignEndColumn
      </Heading>

      <VerticalSpace />
      <BodyText>
        This is a <code>Column</code> with vertical alignment to <code>flex-end</code>.{' '}
      </BodyText>

      <DemoableDiv alignContent='center' code={gridsAlignEndColumnSource} codeHighlighter='shiki'>
        <GridsAlignEndColumnExample />
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

      <DemoableDiv alignContent='center' code={gridsHiddenDivSource} codeHighlighter='shiki'>
        <GridsHiddenDivExample />
      </DemoableDiv>

      <VerticalSpace size='2' />
    </>
  )
}

export default ComponentsHome
