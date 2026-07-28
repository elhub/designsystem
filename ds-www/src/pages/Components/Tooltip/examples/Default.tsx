import { Button, Tooltip } from '@elhub/ds-components'
import { IconPlus } from '@elhub/ds-icons'

export const TooltipDefaultExample = () => (
  <Tooltip content='Print this page'>
    <Button size='small' icon={IconPlus} iconProps={{ size: 'medium', title: 'demo knapp' }} />
  </Tooltip>
)
