import { BodyText, Panel, PileCenterDiv } from '@elhub/ds-components'

export const PanelNoPaddingExample = () => (
  <Panel border noPadding>
    <PileCenterDiv>
      <BodyText>Pasta recipe</BodyText>
      <BodyText>Time: 15 min.</BodyText>
    </PileCenterDiv>
  </Panel>
)
