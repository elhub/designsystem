import { AlignCenterColumn, Column, Panel, Row } from '@elhub/ds-components'
import styled from 'styled-components'

const VisibleRow = styled(Row)`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
`

export const GridsAlignCenterColumnExample = () => {
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
}
