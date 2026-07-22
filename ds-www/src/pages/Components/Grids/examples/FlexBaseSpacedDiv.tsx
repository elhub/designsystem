import { FlexBaseSpacedDiv, Panel } from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'

export const GridsFlexBaseSpacedDivExample = () => {
  return (
    <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
      <FlexBaseSpacedDiv style={{ width: '100%' }}>
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
      </FlexBaseSpacedDiv>
    </Panel>
  )
}
