import { FlexEndDiv, HorizontalSpace, Popover, Select } from '@elhub/ds-components'
import type { Placement } from '@popperjs/core'
import { useRef, useState } from 'react'

export const PopoverPlacementExample = () => {
  const selectRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = useState<Placement>('top')

  return (
    <FlexEndDiv>
      <Select
        placeholder='placement'
        ref={selectRef}
        onChange={(event) => {
          setPlacement(event.target.value as Placement)
          setOpen(true)
        }}
      >
        <option>auto</option>
        <option>auto-start</option>
        <option>auto-end</option>
        <option>top</option>
        <option>left</option>
        <option> bottom</option>
        <option>right</option>
        <option>top-start</option>
        <option>top-end</option>
        <option>bottom-start</option>
        <option>bottom-end</option>
        <option> right-start</option>
        <option>right-end</option>
        <option>left-start</option>
        <option>left-end</option>
      </Select>
      <HorizontalSpace />
      <Popover open={open} placement={placement} onClose={() => setOpen(false)} anchorEl={selectRef.current}>
        <Popover.Content>This popover is placed on {placement}</Popover.Content>
      </Popover>
    </FlexEndDiv>
  )
}
