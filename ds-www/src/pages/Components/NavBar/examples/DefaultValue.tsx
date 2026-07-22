import { NavBar } from '@elhub/ds-components'

export const NavBarDefaultValueExample = () => {
  return (
    <NavBar size='small' defaultValue={2}>
      <NavBar.Link>Sample</NavBar.Link>
      <NavBar.Link>Sample</NavBar.Link>
      <NavBar.Link>Sample</NavBar.Link>
      <NavBar.Link>Sample</NavBar.Link>
    </NavBar>
  )
}
