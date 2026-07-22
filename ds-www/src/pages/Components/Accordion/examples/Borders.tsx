import { Accordion, type AccordionVariant, BodyText, FlexDiv, PileCenterDiv } from '@elhub/ds-components'

const RecipeAccordion = ({ variant }: { variant: AccordionVariant }) => (
  <Accordion variant={variant} border>
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

export const AccordionBordersExample = () => {
  return (
    <FlexDiv style={{ justifyContent: 'space-evenly', width: '100%' }}>
      <PileCenterDiv>
        <BodyText>Primary</BodyText>
        <RecipeAccordion variant='primary' />
      </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Secondary</BodyText>
        <RecipeAccordion variant='secondary' />
      </PileCenterDiv>
      <PileCenterDiv>
        <BodyText>Tertiary</BodyText>
        <RecipeAccordion variant='tertiary' />
      </PileCenterDiv>
    </FlexDiv>
  )
}
