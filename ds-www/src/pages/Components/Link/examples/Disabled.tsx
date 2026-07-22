import { BodyText, Link, PileDiv } from '@elhub/ds-components'

export const LinkDisabledExample = () => (
  <PileDiv>
    <BodyText>
      <Link disabled href='#Disabled'>
        Disabled link
      </Link>
    </BodyText>
    <BodyText>
      <Link disabled href='#Disabled-alternative' variant='alternative'>
        Disabled alternative link
      </Link>
    </BodyText>
  </PileDiv>
)
