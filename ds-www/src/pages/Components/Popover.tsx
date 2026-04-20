import {
  BodyText,
  Button,
  FlexDiv,
  FlexEndDiv,
  Heading,
  HorizontalSpace,
  Link,
  Popover,
  Select,
  Table,
  VerticalSpace
} from '@elhub/ds-components'
import { Placement } from '@popperjs/core'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import DemoableDiv from 'components/DemoableDiv/DemoableDiv'
import React, { useRef, useState } from 'react'

const ComponentsHome = () => {
  const [open1, setOpen1] = useState<boolean>(false)
  const [open2, setOpen2] = useState<boolean>(false)
  const [open3, setOpen3] = useState<boolean>(false)
  const [open4, setOpen4] = useState<boolean>(false)
  const [open5, setOpen5] = useState<boolean>(false)
  const [placement, setPlacement] = useState<Placement>('top')
  const buttonRef = useRef(null)
  const button2Ref = useRef(null)
  const selectRef = useRef(null)
  const primaryButtonRef = useRef(null)
  const secondaryButtonRef = useRef(null)
  return (
    <>
      <VerticalSpace />
      <Heading size='large' id='popover' level='1' spacing>
        Popover
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>Popover</code> component shows a ballon panel with a contextual text.
      </BodyText>
      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='popover-default' level='2' spacing>
        Default component
      </Heading>
      <VerticalSpace />
      <BodyText>
        You must provide an HTML element to attach the popover elements, so it is displayed next to the
        element that is being pointed to.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Popover } from '@elhub/ds-components'

const Component = () => {
  const buttonRef = useRef(null)
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => setOpen(true)}
      >
        Open oven
      </Button>
      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={buttonRef.current}
      >
        <Popover.Content>
          The oven is open
        </Popover.Content>
      </Popover>
    </>
  )
}`}
      >
        <>
          <Button ref={buttonRef} onClick={() => setOpen1(true)}>
            Open oven
          </Button>
          <Popover open={open1} onClose={() => setOpen1(false)} anchorEl={buttonRef.current}>
            <Popover.Content>This oven is open</Popover.Content>
          </Popover>
        </>
      </DemoableDiv>

      <VerticalSpace size='2' />
      <Heading className='toc' size='medium' id='popover-placement' level='2' spacing>
        Placement
      </Heading>
      <VerticalSpace />
      <BodyText>
        The HelpText <code>placement</code> prop is a <code>Placement</code> type from{' '}
        <Link href='https://www.npmjs.com/package/@popperjs/core'>@popperjs/core</Link>, and can be one of the
        following 12 strings:
      </BodyText>

      <CodeDiv expand={false} spacing>
        {`export type Placement = 'top' | 'bottom' | 'right' | 'left' | 'top-start' | 'top-end' |
   'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end'`}
      </CodeDiv>

      <DemoableDiv
        alignContent='center'
        code={`import { Popover } from '@elhub/ds-components'

const Component = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
   <FlexEndDiv>
      <Select ref={selectRef} onChange={(e: any) => {
        setPlacement(e.target.value)
        setOpen(true)
      }}>
        <option>auto</option>
        <option>auto-start</option>
        <option>auto-end</option>
        <option>top</option>
        <option>left</option>
        <option> bottom</option>
        <option>right</option>
        <option>top-start</option>
        <option>top-end</option>
        <option>bottom-start</option>
        <option>bottom-end</option>
        <option> right-start</option>
        <option>right-end</option>
        <option>left-start</option>
        <option>left-end</option>
      </Select>
      <HorizontalSpace/>
      <Popover
        open={open}
        placement={placement}
        onClose={() => setOpen(false)}
        anchorEl={selectRef.current}
      >
        <Popover.Content>
           This popover is placed on {placement}
        </Popover.Content>
      </Popover>
    </FlexEndDiv>
  )
}`}
      >
        <FlexEndDiv>
          <Select
            placeholder='placement'
            ref={selectRef}
            onChange={(e) => {
              setPlacement(e.target.value as Placement)
              setOpen2(true)
            }}
          >
            <option>auto</option>
            <option>auto-start</option>
            <option>auto-end</option>
            <option>top</option>
            <option>left</option>
            <option> bottom</option>
            <option>right</option>
            <option>top-start</option>
            <option>top-end</option>
            <option>bottom-start</option>
            <option>bottom-end</option>
            <option> right-start</option>
            <option>right-end</option>
            <option>left-start</option>
            <option>left-end</option>
          </Select>
          <HorizontalSpace />
          <Popover
            open={open2}
            placement={placement}
            onClose={() => setOpen2(false)}
            anchorEl={selectRef.current}
          >
            <Popover.Content>This popover is placed on {placement}</Popover.Content>
          </Popover>
        </FlexEndDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='popover-variant' level='2' spacing>
        Variant
      </Heading>
      <VerticalSpace />
      <BodyText>
        The <code>variant</code> prop is passed to the Popover component, which can have 2 values.
      </BodyText>

      <CodeDiv expand={false} spacing>
        {`export type PopoverVariant = 'primary' | 'secondary'`}
      </CodeDiv>

      <VerticalSpace />

      <DemoableDiv
        alignContent='center'
        code={`import { Popover } from '@elhub/ds-components'

const Component = () => {
  const primaryButtonRef = useRef(null)
  const secondaryButtonRef = useRef(null)
  const [openPrimary, setOpenPrimary] = 
    useState<boolean>(false)
  const [openSecondary, setOpenSecondary] = 
    useState<boolean>(false)
  return (
    <FlexDiv>
      <Button 
        ref={primaryButtonRef} 
        onClick={() => setOpenPrimary(true)}
      >
        Open primary oven
      </Button>
      <Popover
        open={openPrimary}
        placement='top'
        variant='primary'
        onClose={() => setOpenPrimary(false)}
        anchorEl={primaryButtonRef.current}
      >
        <Popover.Content>
          This oven os open
        </Popover.Content>
      </Popover>
      <HorizontalSpace/>
      <Button 
        ref={secondaryButtonRef} 
        onClick={() => setOpenSecondary(true)}
      >
        Open secondary oven
      </Button>
      <Popover
        placement='top'
        open={openSecondary}
        variant='secondary'
        onClose={() => setOpenSecondary(false)}
        anchorEl={secondaryButtonRef.current}
      >
        <Popover.Content>
          This oven is open
        </Popover.Content>
      </Popover> 
    </FlexDiv>
  )
}`}
      >
        <FlexDiv>
          <Button ref={primaryButtonRef} onClick={() => setOpen4(true)}>
            Open primary oven
          </Button>
          <Popover
            placement='top'
            open={open4}
            variant='primary'
            onClose={() => setOpen4(false)}
            anchorEl={primaryButtonRef.current}
          >
            <Popover.Content>The oven is open</Popover.Content>
          </Popover>
          <HorizontalSpace />
          <Button ref={secondaryButtonRef} onClick={() => setOpen5(true)}>
            Open secondary oven
          </Button>
          <Popover
            placement='top'
            open={open5}
            variant='secondary'
            onClose={() => setOpen5(false)}
            anchorEl={secondaryButtonRef.current}
          >
            <Popover.Content>The oven is open</Popover.Content>
          </Popover>
        </FlexDiv>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='medium' id='popover-arrow' level='2' spacing>
        Arrow and offset
      </Heading>
      <VerticalSpace />
      <BodyText>
        You can remove the popover arrow by setting prop <code>arrow</code> to <code>false</code>. You can
        also define the offset with a numeric value in the <code>offset</code> prop.
      </BodyText>

      <DemoableDiv
        alignContent='center'
        code={`import { Popover } from '@elhub/ds-components'

const Component = () => {
  const buttonRef = useRef(null)
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <Button 
        ref={buttonRef} 
        onClick={() => setOpen(true)}
      >
        Open popover
      </Button>
      <Popover
        open={open}
        arrow={false}
        offset='50'
        onClose={() => setOpen(false)}
        anchorEl={buttonRef.current}
      >
        <Popover.Content>
          This popover has no arrow and 
          is 50px offset from anchor element
        </Popover.Content>
      </Popover>
    </>
  )
}`}
      >
        <Button ref={button2Ref} onClick={() => setOpen3(true)}>
          Open popover
        </Button>
        <Popover
          open={open3}
          arrow={false}
          offset={50}
          onClose={() => setOpen3(false)}
          anchorEl={button2Ref.current}
        >
          <Popover.Content>
            This popover has no arrow, and is 50 px offset from anchor element
          </Popover.Content>
        </Popover>
      </DemoableDiv>

      <VerticalSpace size='2' />

      <Heading className='toc' size='large' id='properties' level='2' spacing>
        Props table
      </Heading>

      <VerticalSpace />

      <BodyText>
        The <code>PopoverProps</code> interface extends{' '}
        <code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code>, as the top level component is a{' '}
        <code>Panel</code> component as a <code>div</code>. As such, you can pass{' '}
        <Link href='https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement'>HTMLDivElement</Link>{' '}
        props.
      </BodyText>

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
              <code>anchorEl</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>Element | null</code>
            </Table.DataCell>
            <Table.DataCell>set HTML element to anchor the popover</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>arrow</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set popover arrow</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>true</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>offset</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>number</code>
            </Table.DataCell>
            <Table.DataCell>Set popover offset to anchor element</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>16</code> with arrow, <code>4</code> without arrow
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>onClose</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>() =&gt; void</code>
            </Table.DataCell>
            <Table.DataCell>Set popover callback when it closes</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>open</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>boolean</code>
            </Table.DataCell>
            <Table.DataCell>Set popover open</Table.DataCell>
            <Table.DataCell>Yes</Table.DataCell>
            <Table.DataCell>
              <code>-</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>placement</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>
                "auto" | "auto-start" | "auto-end" | "top" | "left" | "bottom" | "right" | "top-start" |
                "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" |
                "left-end"
              </code>
            </Table.DataCell>
            <Table.DataCell>Set popover placement</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>auto</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>strategy</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'absolute' | 'fixed'</code>
            </Table.DataCell>
            <Table.DataCell>
              Set popover CSS position attribute. Use 'fixed' if popover is inside a fixed element, otherwise
              leave this property as 'absolute'
            </Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>absolute</code>
            </Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>
              <code>variant</code>
            </Table.DataCell>
            <Table.DataCell>
              <code>'primary' | 'secondary'</code>
            </Table.DataCell>
            <Table.DataCell>Sets popover variant.</Table.DataCell>
            <Table.DataCell>No</Table.DataCell>
            <Table.DataCell>
              <code>primary</code>
            </Table.DataCell>
          </Table.Row>
        </Table.Body>
      </Table>
      <VerticalSpace size='3' />
    </>
  )
}

export default ComponentsHome
