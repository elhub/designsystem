import { FlexBaseDiv, Panel } from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'

export const GridsFlexBaseDivExample = () => {
  return (
    <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
      <FlexBaseDiv style={{ width: '100%' }}>
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
      </FlexBaseDiv>
    </Panel>
  )
}
