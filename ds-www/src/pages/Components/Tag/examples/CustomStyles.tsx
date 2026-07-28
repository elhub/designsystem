import { Tag } from '@elhub/ds-components'

export const TagCustomStylesExample = () => {
  return (
    <Tag
      style={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
        borderRadius: '20px',
        color: 'var(--eds-semantic-background)'
      }}
    >
      Custom tag
    </Tag>
  )
}
