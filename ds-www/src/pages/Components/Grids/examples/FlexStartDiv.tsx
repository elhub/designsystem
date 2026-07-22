import { FlexStartDiv, Panel } from '@elhub/ds-components'
import { IconWarningCircle } from '@elhub/ds-icons'

export const GridsFlexStartDivExample = () => {
  return (
    <Panel border style={{ display: 'flex', height: '100px', width: '300px' }}>
      <FlexStartDiv style={{ width: '100%' }}>
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
        <IconWarningCircle size='medium' />
      </FlexStartDiv>
    </Panel>
  )
}
