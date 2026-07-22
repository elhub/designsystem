import { Button, Dropdown } from '@elhub/ds-components'
import { IconNewtab, IconUser } from '@elhub/ds-icons'

export const DropdownDefaultExample = () => (
  <Dropdown>
    <Button as={Dropdown.Toggle}>Toggles</Button>
    <Dropdown.Menu arrow>
      <Dropdown.Menu.GroupedList>
        <Dropdown.Menu.GroupedList.Heading>
          <IconUser /> <span> Christoffer Christoffersen</span>
        </Dropdown.Menu.GroupedList.Heading>
        <Dropdown.Menu.GroupedList.Item>Change role</Dropdown.Menu.GroupedList.Item>
        <Dropdown.Menu.GroupedList.Item>My preferences</Dropdown.Menu.GroupedList.Item>
        <Dropdown.Menu.GroupedList.Item>Role overview</Dropdown.Menu.GroupedList.Item>
        <Dropdown.Menu.GroupedList.Item>
          User introduction <IconNewtab />
        </Dropdown.Menu.GroupedList.Item>
      </Dropdown.Menu.GroupedList>
    </Dropdown.Menu>
  </Dropdown>
)
