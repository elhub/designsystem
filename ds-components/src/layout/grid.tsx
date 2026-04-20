import styled from 'styled-components'

const FlexDiv = styled.div<{ padding?: string; flex?: string; gap?: number }>`
  padding: ${(props) => props.padding || 0}rem;
  flex: ${(props) => props.flex || '0 1 auto'};
  gap: ${(props) => props.gap || 0}rem;
  display: flex;
  flex-flow: row wrap;
`
FlexDiv.displayName = 'FlexDiv'

const FlexBaseDiv = styled(FlexDiv)`
  align-items: baseline;
`
FlexBaseDiv.displayName = 'FlexBaseDiv'

const FlexStartDiv = styled(FlexDiv)`
  align-items: flex-start;
`
FlexStartDiv.displayName = 'FlexStartDiv'

const FlexCenterDiv = styled(FlexDiv)`
  align-items: center;
`
FlexCenterDiv.displayName = 'FlexCenterDiv'

const FlexEndDiv = styled(FlexDiv)`
  align-items: flex-end;
`
FlexEndDiv.displayName = 'FlexEndDiv'

const FlexBaseSpacedDiv = styled(FlexBaseDiv)`
  justify-content: space-between;
`
FlexBaseSpacedDiv.displayName = 'FlexBaseSpacedDiv'

const FlexStartSpacedDiv = styled(FlexStartDiv)`
  justify-content: space-between;
`
FlexStartSpacedDiv.displayName = 'FlexStartSpacedDiv'

const FlexCenterSpacedDiv = styled(FlexCenterDiv)`
  justify-content: space-between;
`
FlexCenterSpacedDiv.displayName = 'FlexCenterSpacedDiv'

const FlexEndSpacedDiv = styled(FlexEndDiv)`
  justify-content: space-between;
`
FlexEndSpacedDiv.displayName = 'FlexEndSpacedDiv'

const PileDiv = styled.div<{ padding?: string; flex?: string; gap?: number }>`
  padding: ${(props) => props.padding || 0}rem;
  flex: ${(props) => props.flex || '0 1 auto'};
  gap: ${(props) => props.gap || 0}rem;
  display: flex;
  flex-direction: column;
`
PileDiv.displayName = 'PileDiv'

const PileStartDiv = styled(PileDiv)`
  align-items: flex-start;
`
PileStartDiv.displayName = 'PileStartDiv'

const PileCenterDiv = styled(PileDiv)`
  align-items: center;
`
PileCenterDiv.displayName = 'PileCenterDiv'

const PileEndDiv = styled(PileDiv)`
  align-items: flex-end;
`
PileEndDiv.displayName = 'PileEndDiv'

const Row = styled.div`
  display: flex;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
Row.displayName = 'Row'

const AlignStartRow = styled(Row)`
  align-items: flex-start;
`
AlignStartRow.displayName = 'AlignStartRow'

const AlignCenterRow = styled(Row)`
  align-items: center;
`
AlignCenterRow.displayName = 'AlignCenterRow'

const AlignEndRow = styled(Row)`
  align-items: flex-end;
`
AlignEndRow.displayName = 'AlignEndRow'

const PaddedHorizontallyRow = styled(Row)<{ size?: number }>`
  padding-left: ${(props) => props.size || 1}rem;
  padding-right: ${(props) => props.size || 1}rem;
`
PaddedHorizontallyRow.displayName = 'PaddedHorizontallyRow'

const PaddedVerticallyRow = styled(Row)<{ size?: number }>`
  padding-top: ${(props) => props.size || 1}rem;
  padding-bottom: ${(props) => props.size || 1}rem;
`
PaddedVerticallyRow.displayName = 'PaddedVerticallyRow'

const Column = styled(PileDiv)<{ flex?: string }>`
  flex: ${(props) => props.flex || 1};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`
Column.displayName = 'Column'

const AlignCenterColumn = styled(Column)`
  text-align: center;
`
AlignCenterColumn.displayName = 'AlignCenterColumn'

const AlignEndColumn = styled(Column)`
  text-align: end;
`
AlignEndColumn.displayName = 'AlignEndColumn'

const FullWidthDiv = styled.div`
  width: 100%;
`
const HiddenDiv = styled.div`
  display: none;
`
HiddenDiv.displayName = 'HiddenDiv'

const PaddedDiv = styled.div<{ padding?: string }>`
  padding: ${(props) => props.padding || 1}rem;
`
PaddedDiv.displayName = 'PaddedDiv'

const PaddedHorizontallyDiv = styled.div<{ padding?: string }>`
  padding-left: ${(props) => props.padding || 1}rem;
  padding-right: ${(props) => props.padding || 1}rem;
`
PaddedHorizontallyDiv.displayName = 'PaddedHorizontallyDiv'

const PaddedVerticallyDiv = styled.div<{ padding?: string }>`
  padding-top: ${(props) => props.padding || 1}rem;
  padding-bottom: ${(props) => props.padding || 1}rem;
`
PaddedVerticallyDiv.displayName = 'PaddedVerticallyDiv'

export {
  FlexDiv,
  FlexBaseDiv,
  FlexStartDiv,
  FlexCenterDiv,
  FlexEndDiv,
  FlexBaseSpacedDiv,
  FlexStartSpacedDiv,
  FlexCenterSpacedDiv,
  FlexEndSpacedDiv,
  PileDiv,
  PileStartDiv,
  PileCenterDiv,
  PileEndDiv,
  Row,
  AlignStartRow,
  AlignCenterRow,
  AlignEndRow,
  PaddedHorizontallyRow,
  PaddedVerticallyRow,
  Column,
  AlignCenterColumn,
  AlignEndColumn,
  FullWidthDiv,
  HiddenDiv,
  PaddedDiv,
  PaddedHorizontallyDiv,
  PaddedVerticallyDiv
}
