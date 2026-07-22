import { FlexCenterSpacedDiv, FlexDiv, Panel } from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'

export const GridsFlexCenterSpacedDivExample = () => {
  return (
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
  )
}
