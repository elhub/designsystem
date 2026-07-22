import { Panel, PileEndDiv } from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'

export const GridsPileEndDivExample = () => {
  return (
    <Panel border style={{ display: 'flex', height: '150px', width: '300px' }}>
      <PileEndDiv style={{ width: '100%' }}>
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
      </PileEndDiv>
    </Panel>
  )
}
