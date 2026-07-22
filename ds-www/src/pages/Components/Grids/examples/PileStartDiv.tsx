import { Panel, PileStartDiv } from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'

export const GridsPileStartDivExample = () => {
  return (
    <Panel border style={{ display: 'flex', height: '150px', width: '300px' }}>
      <PileStartDiv style={{ width: '100%' }}>
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
      </PileStartDiv>
    </Panel>
  )
}
