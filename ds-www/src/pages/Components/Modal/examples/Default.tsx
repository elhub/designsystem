import { BodyText, Button, Modal } from '@elhub/ds-components'
import { IconChevronRight } from '@elhub/ds-icons'
import { useState } from 'react'

export const ModalDefaultExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>See ingredients</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header title='Modal Header' description='Modal description' />
        <Modal.Content>
          <BodyText>Some descriptive content here.</BodyText>
          <BodyText>
            Padding is inferred from the Modal-container and shared across Header, Content and Footer
          </BodyText>
        </Modal.Content>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button icon={IconChevronRight} iconPosition='left' onClick={() => setOpen(false)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
