import { Panel, PileCenterDiv } from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'

export const GridsPileCenterDivExample = () => {
  return (
    <Panel border style={{ display: 'flex', height: '150px', width: '300px' }}>
      <PileCenterDiv style={{ width: '100%' }}>
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
      </PileCenterDiv>
    </Panel>
  )
}
