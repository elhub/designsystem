import { BodyText, Button, Modal } from '@elhub/ds-components'
import { IconChevronRight } from '@elhub/ds-icons'
import { useRef, useState } from 'react'

export const ModalAnchoredExample = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <div ref={containerRef}>
      <Button onClick={() => setOpen(true)}>See ingredients</Button>
      {containerRef.current && (
        <Modal
          parentSelector={() => containerRef.current as HTMLElement}
          open={open}
          aria-label='Modal demo'
          onClose={() => setOpen(false)}
        >
          <Modal.Header title='Modal Header' />
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
      )}
    </div>
  )
}
