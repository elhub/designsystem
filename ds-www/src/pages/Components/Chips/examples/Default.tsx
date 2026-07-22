import { Button, Chips, FlexDiv, HorizontalSpace } from '@elhub/ds-components'
import { useState } from 'react'

export const ChipsDefaultExample = () => {
  const options = ['pasta', 'salad', 'sandwich', 'bread']
  const [selected, setSelected] = useState(['pasta', 'salad', 'sandwich'])

  return (
    <FlexDiv>
      <Chips>
        {selected.map((option) => (
          <Chips.Chip
            key={option}
            onClick={() =>
              setSelected(
                selected.includes(option) ? selected.filter((item) => item !== option) : [...selected, option]
              )
            }
          >
            {option}
          </Chips.Chip>
        ))}
      </Chips>
      <HorizontalSpace />
      <Button size='small' onClick={() => setSelected(options)}>
        Reset
      </Button>
    </FlexDiv>
  )
}
