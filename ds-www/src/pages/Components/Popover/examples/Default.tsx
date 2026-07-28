import { Button, Popover } from '@elhub/ds-components'
import { useRef, useState } from 'react'

export const PopoverDefaultExample = () => {
  const buttonRef = useRef(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        Open oven
      </Button>
      <Popover open={open} onClose={() => setOpen(false)} anchorEl={buttonRef.current}>
        <Popover.Content>This oven is open</Popover.Content>
      </Popover>
    </>
  )
}
