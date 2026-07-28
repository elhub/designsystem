import { Button, Popover } from '@elhub/ds-components'
import { useRef, useState } from 'react'

export const PopoverArrowAndOffsetExample = () => {
  const buttonRef = useRef(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        Open popover
      </Button>
      <Popover
        open={open}
        arrow={false}
        offset={50}
        onClose={() => setOpen(false)}
        anchorEl={buttonRef.current}
      >
        <Popover.Content>This popover has no arrow, and is 50 px offset from anchor element</Popover.Content>
      </Popover>
    </>
  )
}
