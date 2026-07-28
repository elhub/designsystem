import { BodyText, Panel, PileCenterDiv } from '@elhub/ds-components'

export const PanelBackgroundExample = () => (
  <Panel>
    <BodyText>Recipes</BodyText>
    <Panel background>
      <BodyText>Main courses</BodyText>
      <Panel background>
        <BodyText>Pastas</BodyText>
        <Panel background>
          <BodyText>Spaghetti</BodyText>
          <PileCenterDiv>
            <BodyText>Time: 15 min.</BodyText>
          </PileCenterDiv>
        </Panel>
      </Panel>
    </Panel>
  </Panel>
)
