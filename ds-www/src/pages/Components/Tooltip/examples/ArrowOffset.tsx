import { BodyText, Tooltip } from '@elhub/ds-components'

export const TooltipArrowOffsetExample = () => (
  <Tooltip arrow={false} offset={100} content='This Tooltip has no arrow and has a 100px offset'>
    <BodyText>Hover me for tooltip</BodyText>
  </Tooltip>
)
