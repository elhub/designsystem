import { FlexCenterDiv, Panel } from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'

export const GridsFlexCenterDivExample = () => {
  return (
    <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
      <FlexCenterDiv style={{ width: '100%' }}>
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
      </FlexCenterDiv>
    </Panel>
  )
}
