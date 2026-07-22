import { BodyText, FlexDiv, NavBar, ToggleGroup } from '@elhub/ds-components'
import { useState } from 'react'

export const NavBarControlledExample = () => {
  const [value, setValue] = useState(2)

  return (
    <>
      <NavBar size='small' value={value} onChange={setValue}>
        <NavBar.Link>Sample</NavBar.Link>
        <NavBar.Link>Sample</NavBar.Link>
        <NavBar.Link>Sample</NavBar.Link>
        <NavBar.Link>Sample</NavBar.Link>
      </NavBar>
      <FlexDiv style={{ gap: '16px', alignItems: 'center' }}>
        <BodyText>Change active NavBar Link by clicking here:</BodyText>
        <ToggleGroup
          value={value.toString()}
          defaultValue='2'
          onChange={(selectedValue: string | undefined) => setValue(Number(selectedValue))}
          size='small'
          type='single'
        >
          <ToggleGroup.Item value='0'>0</ToggleGroup.Item>
          <ToggleGroup.Item value='1'>1</ToggleGroup.Item>
          <ToggleGroup.Item value='2'>2</ToggleGroup.Item>
          <ToggleGroup.Item value='3'>3</ToggleGroup.Item>
        </ToggleGroup>
      </FlexDiv>
    </>
  )
}
