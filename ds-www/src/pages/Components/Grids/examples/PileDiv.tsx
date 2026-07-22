import { Panel, PileDiv } from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'

export const GridsPileDivExample = () => {
  return (
    <Panel border style={{ display: 'flex', height: '150px', width: '300px' }}>
      <PileDiv style={{ width: '100%' }}>
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
      </PileDiv>
    </Panel>
  )
}
