import { AlignEndColumn, Column, Panel, Row } from '@elhub/ds-components'
import styled from 'styled-components'

const VisibleRow = styled(Row)`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
`

export const GridsAlignEndColumnExample = () => {
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
}
