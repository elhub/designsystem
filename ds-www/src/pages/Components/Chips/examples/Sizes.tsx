import { Chips, VerticalSpace } from '@elhub/ds-components'

export const ChipsSizesExample = () => (
  <>
    <Chips size='large'>
      <Chips.Chip size='large' onClick={() => {}}>
        Large label
      </Chips.Chip>
    </Chips>
    <VerticalSpace />
    <Chips size='medium'>
      <Chips.Chip size='medium' onClick={() => {}}>
        Medium label
      </Chips.Chip>
    </Chips>
    <VerticalSpace />
    <Chips size='small'>
      <Chips.Chip onClick={() => {}}>Small label</Chips.Chip>
    </Chips>
  </>
)
