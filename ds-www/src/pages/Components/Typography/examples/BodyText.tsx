import { BodyText } from '@elhub/ds-components'

export const TypographyBodyTextExample = () => (
  <div style={{ display: 'grid', gap: 16 }}>
    <BodyText size='large'>
      Large text works well for introductions and prominent supporting content.
    </BodyText>
    <BodyText size='medium'>
      Medium text can highlight information that deserves additional attention.
    </BodyText>
    <BodyText size='small'>
      Small text is the default choice for paragraphs and most interface content.
    </BodyText>
    <BodyText size='xsmall'>
      Extra-small text is suitable for captions, metadata, and secondary details.
    </BodyText>
    <BodyText weight='semibold'>Semibold text adds emphasis without changing the text size.</BodyText>
    <BodyText weight='bold'>
      Bold text should be reserved for information that needs strong emphasis.
    </BodyText>
  </div>
)
