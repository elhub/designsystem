import { Accordion, type AccordionSize, BodyText, FlexDiv, PileCenterDiv } from '@elhub/ds-components'

const RecipeAccordion = ({ size }: { size: AccordionSize }) => (
  <Accordion size={size}>
    <Accordion.Item>
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
    <Accordion.Item>
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

export const AccordionSizesExample = () => {
  return (
    <FlexDiv style={{ justifyContent: 'space-evenly', width: '100%' }}>
      <PileCenterDiv>
        <BodyText>Medium</BodyText>
        <RecipeAccordion size='medium' />
      </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Small</BodyText>
        <RecipeAccordion size='small' />
      </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Xsmall</BodyText>
        <RecipeAccordion size='xsmall' />
      </PileCenterDiv>
    </FlexDiv>
  )
}
