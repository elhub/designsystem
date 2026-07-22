import { AlignCenterRow, Column, Panel, Row } from '@elhub/ds-components'
import styled from 'styled-components'

const VisibleRow = styled(Row)`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
`

export const GridsAlignCenterRowExample = () => {
  return (
    <VisibleRow as={AlignCenterRow}>
      <Column>
        <Panel border>One panel</Panel>
      </Column>
      <Column>
        <Panel border>Another panel</Panel>
      </Column>
    </VisibleRow>
  )
}
