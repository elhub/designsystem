import { FlexStartSpacedDiv, Panel } from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'

export const GridsFlexStartSpacedDivExample = () => {
  return (
    <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
      <FlexStartSpacedDiv style={{ width: '100%' }}>
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
      </FlexStartSpacedDiv>
    </Panel>
  )
}
