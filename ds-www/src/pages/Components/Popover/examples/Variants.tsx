import { Button, FlexDiv, HorizontalSpace, Popover } from '@elhub/ds-components'
import { useRef, useState } from 'react'

export const PopoverVariantsExample = () => {
  const primaryButtonRef = useRef(null)
  const secondaryButtonRef = useRef(null)
  const [primaryOpen, setPrimaryOpen] = useState(false)
  const [secondaryOpen, setSecondaryOpen] = useState(false)

  return (
    <FlexDiv>
      <Button ref={primaryButtonRef} onClick={() => setPrimaryOpen(true)}>
        Open primary oven
      </Button>
      <Popover
        placement='top'
        open={primaryOpen}
        variant='primary'
        onClose={() => setPrimaryOpen(false)}
        anchorEl={primaryButtonRef.current}
      >
        <Popover.Content>The oven is open</Popover.Content>
      </Popover>
      <HorizontalSpace />
      <Button ref={secondaryButtonRef} onClick={() => setSecondaryOpen(true)}>
        Open secondary oven
      </Button>
      <Popover
        placement='top'
        open={secondaryOpen}
        variant='secondary'
        onClose={() => setSecondaryOpen(false)}
        anchorEl={secondaryButtonRef.current}
      >
        <Popover.Content>The oven is open</Popover.Content>
      </Popover>
    </FlexDiv>
  )
}
