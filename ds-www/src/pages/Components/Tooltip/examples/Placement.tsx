import {
  BodyText,
  FlexEndDiv,
  HorizontalSpace,
  Select,
  SelectContent,
  SelectItem,
  Tooltip,
  type TooltipPlacement
} from '@elhub/ds-components'
import { useState } from 'react'

export const TooltipPlacementExample = () => {
  const [placement, setPlacement] = useState<TooltipPlacement>('top')

  return (
    <FlexEndDiv>
      <Select
        placeholder='placement'
        defaultValue='top'
        onValueChange={(value) => setPlacement(value as TooltipPlacement)}
      >
        <SelectContent>
          <SelectItem value='top'>top</SelectItem>
          <SelectItem value='left'>left</SelectItem>
          <SelectItem value='bottom'>bottom</SelectItem>
          <SelectItem value='right'>right</SelectItem>
        </SelectContent>
      </Select>
      <HorizontalSpace />
      <Tooltip placement={placement} content={`Tooltip is placed on ${placement}`}>
        <BodyText>Hover me for tooltip</BodyText>
      </Tooltip>
    </FlexEndDiv>
  )
}
