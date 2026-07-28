import { BodyText, Heading } from '@elhub/ds-components'

export const TypographyHeadingsExample = () => (
  <div style={{ display: 'grid', gap: 8 }}>
    <div>
      <Heading size='xlarge' level='1'>
        Market overview
      </Heading>
      <BodyText>Page title · level 1 · xlarge (24px)</BodyText>
    </div>
    <div>
      <Heading size='large' level='2'>
        Energy production
      </Heading>
      <BodyText>Section heading · level 2 · large (20px)</BodyText>
    </div>
    <div>
      <Heading size='medium' level='3'>
        Production by region
      </Heading>
      <BodyText>Subsection heading · level 3 · medium (18px)</BodyText>
    </div>
    <div>
      <Heading size='small' level='4'>
        Eastern Norway
      </Heading>
      <BodyText>Nested heading · level 4 · small (16px)</BodyText>
    </div>
    <div>
      <Heading size='xsmall' level='5'>
        Hourly measurements
      </Heading>
      <BodyText>Detailed heading · level 5 · xsmall (14px)</BodyText>
    </div>
  </div>
)
