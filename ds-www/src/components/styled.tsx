import { LinkPanel } from '../components/link-panel'
import styled, { keyframes } from 'styled-components'

export const slideInFromLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-20px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const HomePageLinkPanel = styled(LinkPanel)`
  align-items: flex-start;
  max-width: 300px;
  padding: 0.5rem;

  .content {
    padding: 0.5rem;
  }

  svg {
    align-self: center;
  }
`

export const NavDiv = styled.nav`
  margin-top: 16px;
  width: 250px;
  overflow-y: auto;
  display: block;

  @media (width < 700px) {
    display: none;
  }
`

NavDiv.displayName = 'NavDiv'
