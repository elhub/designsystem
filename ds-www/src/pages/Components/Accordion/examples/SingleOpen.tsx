import { Accordion } from '@elhub/ds-components'
import { useState } from 'react'

export const AccordionSingleOpenExample = () => {
  const [openItem, setOpenItem] = useState(1)

  return (
    <Accordion>
      <Accordion.Item open={openItem === 1}>
        <Accordion.Header onClick={() => setOpenItem(1)}>Recipe ingredients</Accordion.Header>
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
      <Accordion.Item open={openItem === 2}>
        <Accordion.Header onClick={() => setOpenItem(2)}>Preparation</Accordion.Header>
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
}
