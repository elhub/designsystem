import styled from 'styled-components'

const HorizontalSpace = styled.div<{ size?: string }>`
  display: inline-block;
  margin-left: ${(props) => props.size || 1}rem;
`
HorizontalSpace.displayName = 'HorizontalSpace'

const VerticalSpace = styled.div<{ size?: string }>`
  margin-bottom: ${(props) => props.size || 1}rem;
`
VerticalSpace.displayName = 'VerticalSpace'

export { HorizontalSpace, VerticalSpace }
