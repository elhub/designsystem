import { BodyText, Button, Dropdown, Heading, VerticalSpace, Table } from '@elhub/ds-components'
import { IconNewtab, IconUser } from '@elhub/ds-icons'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React from 'react'

const ComponentsDropdown: React.FC = () => {
  return (
    <>
      <VerticalSpace size='3' />
      <Heading size='large' id='Dropdown' level='1' spacing>
        Dropdown
      </Heading>
      <VerticalSpace size='2' />
      <BodyText>
        The <code>Dropdown</code> component generates a contextual menu.
      </BodyText>

      <BodyText>The component contains the following sub-components:</BodyText>

      <ul>
        <li>
          <BodyText>
            <code>Dropdown.Toggle</code>, as the toggle component, based on <code>button</code> element.
          </BodyText>
        </li>
        <li>
          <BodyText>
            <code>Dropdown.Menu</code>, for the contextual menu container, based on the <code>Popover</code>{' '}
            component.
          </BodyText>
        </li>
        <li>
          <BodyText>
            <code>Dropdown.Menu.Divider</code>, for a menu divider, based on the <code>hr</code> element.
          </BodyText>
        </li>
        <li>
          <BodyText>
            <code>Dropdown.Menu.GroupedList</code>, for a grouped menu list, based on the <code>dl</code>{' '}
            element.
          </BodyText>
        </li>
        <li>
          <BodyText>
            <code>Dropdown.Menu.GroupedList.Heading</code>, for a grouped menu list header, based on the{' '}
            <code>dt</code> element.
          </BodyText>
        </li>
        <li>
          <BodyText>
            <code>Dropdown.Menu.GroupedList.Item</code>, for a grouped menu list item, based on the{' '}
            <code>dd</code> element.
          </BodyText>
        </li>
        <li>
          <BodyText>
            <code>Dropdown.Menu.List</code>, for a menu list, based on the <code>ul</code> element.
          </BodyText>
        </li>
        <li>
          <BodyText>
            <code>Dropdown.Menu.List.Item</code>, for a menu list item, based on the <code>li</code> element.
          </BodyText>
        </li>
      </ul>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='Dropdown-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace size='2' />

      <BodyText>
        This example illustrates how all the <code>Dropdown</code> components work.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Dropdown } from '@elhub/ds-components'

const Component = () => {
  return (
    <Dropdown>
      <Button as={Dropdown.Toggle}>Toggle</Button>
      <Dropdown.Menu>
        <Dropdown.Menu.GroupedList>
          <Dropdown.Menu.GroupedList.Heading>
            Recipes
          </Dropdown.Menu.GroupedList.Heading>
          <Dropdown.Menu.GroupedList.Item>
            Eggs
          </Dropdown.Menu.GroupedList.Item>
          <Dropdown.Menu.GroupedList.Item>
            Milk
          </Dropdown.Menu.GroupedList.Item>
        </Dropdown.Menu.GroupedList>
        <Dropdown.Menu.Divider />
        <Dropdown.Menu.List>
          <Dropdown.Menu.List.Item>
            Sugar
          </Dropdown.Menu.List.Item>
          <Dropdown.Menu.List.Item>
            Flour
          </Dropdown.Menu.List.Item>
        </Dropdown.Menu.List>
      </Dropdown.Menu>
    </Dropdown>
  )
}`}
      >
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
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace />

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>closeOnSelect</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Defines whether the dropdown menu closes when a selection is made</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>true</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onSelect</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>(element: React.MouseEvent) =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Handler called when an item is selected</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='properties-menu' level='2' spacing>
        Menu Props table
      </Heading>

      <VerticalSpace />

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Type</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Required</Table.ColumnHeader>
            <Table.ColumnHeader>Default</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>
              <code>onClose</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>() =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Callback function when menu closes</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>strategy</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'fixed' | 'absolute'</code>
            </Table.DataCell>
            <Table.DataCell>
              Popover positioning strategy - use 'fixed' if you have problems with the component when parent
              container has a position property not relative.
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>absolute</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>placement</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>
                'top' | 'bottom' | 'right' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
                | 'right-start' | 'right-end' | 'left-start' | 'left-end'
              </code>
            </Table.DataCell>
            <Table.DataCell>Default dialog-placement on open</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>bottom-end</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>arrow</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Whether the popover has an arrow</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>false</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>

      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsDropdown
