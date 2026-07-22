import { Accordion, Button, Panel, VerticalSpace } from '@elhub/ds-components'
import { useState } from 'react'

const RecipeAccordion = ({ open }: { open: boolean }) => (
  <Accordion>
    <Accordion.Item open={open}>
      <Accordion.Header>Recipe ingredients</Accordion.Header>
      <Accordion.Content>
        <span>You need these ingredients:</span>
        <ul>
          <li>Flour</li>
          <li>Milk</li>
          <li>Eggs</li>
          <li>Sugar</li>
          <li>Butter</li>
        </ul>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item open={open}>
      <Accordion.Header>Preparation</Accordion.Header>
      <Accordion.Content>
        <ul>
          <li>Add everything in a bowl</li>
          <li>Mix it for 10 min</li>
          <li>
            Put in a oven for 20 min, 200<sup>o</sup> C
          </li>
        </ul>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
)

export const AccordionControlledExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <Panel>
      <Button onClick={() => setOpen((isOpen) => !isOpen)}>Toggle</Button>
      <VerticalSpace />
      <RecipeAccordion open={open} />
    </Panel>
  )
}
