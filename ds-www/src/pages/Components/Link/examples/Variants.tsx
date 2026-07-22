import { BodyText, Link, PileDiv } from '@elhub/ds-components'

export const LinkVariantsExample = () => (
  <PileDiv style={{ gap: 12 }}>
    <BodyText>
      <Link href='#default'>Default link</Link>
    </BodyText>
    <BodyText>
      <Link variant='alternative' href='#alternative'>
        Alternative link
      </Link>
    </BodyText>
    <BodyText>
      <Link external href='#external'>
        External link
      </Link>
    </BodyText>
    <BodyText>
      <Link external variant='alternative' href='#external-alternative'>
        External alternative link
      </Link>
    </BodyText>
  </PileDiv>
)
