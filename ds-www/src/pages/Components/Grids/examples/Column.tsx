import { Column, Panel, Row } from '@elhub/ds-components'
import styled from 'styled-components'

const VisibleRow = styled(Row)`
  border: 1px solid var(--eds-border-color);
  height: 7rem;
`

export const GridsColumnExample = () => {
  return (
    <VisibleRow>
      <Column>
        <Panel border>One column</Panel>
      </Column>
      <Column flex='3'>
        <Panel border>a 3x bigger column</Panel>
      </Column>
    </VisibleRow>
  )
}
