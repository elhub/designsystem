import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;
  min-height: inherit;
`
Container.displayName = 'Container'

const Content = styled.div<{ flex?: string; padding?: string }>`
  flex: ${(props) => props.flex || 6};
  padding: ${(props) => (props.padding ? `${props.padding}rem` : 'var(--eds-size-5)')};
`
Container.displayName = 'Content'

const Nav = styled.nav``
Nav.displayName = 'Nav'

const Header = styled.header`
  flex: 0 1 auto;
`
Header.displayName = 'Header'

const Margin = styled.div`
  flex: 1;
`
Margin.displayName = 'Margin'

export { Container, Content, Nav, Header, Margin }
