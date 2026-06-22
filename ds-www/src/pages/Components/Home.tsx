import {
  Accordion,
  Alert,
  Badge,
  BodyText,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderActions,
  CardHeaderContent,
  CardTitle,
  CookieBanner,
  CookieBannerActions,
  CookieBannerContent,
  CookieBannerDescription,
  CookieBannerTitle,
  Checkbox,
  CheckboxGroup,
  Chips,
  Combobox,
  Datepicker,
  Divider,
  Dropdown,
  Feedback,
  FilterPanel,
  FlexDiv,
  FormItem,
  FormItemLabel,
  Heading,
  Link,
  Loader,
  Modal,
  NavBar,
  Pagination,
  Panel,
  PileCenterDiv,
  Popover,
  Radio,
  RadioGroup,
  Search,
  Select,
  SelectContent,
  SelectItem,
  Stepper,
  Switch,
  Table,
  Tabs,
  Tag,
  Textarea,
  TextField,
  ToggleGroup,
  Tooltip,
  VerticalSpace
} from '@elhub/ds-components'
import { IconCheckCircle, IconQualitiesCircle } from '@elhub/ds-icons'
import ComponentPanel from 'components/ComponentPanel/ComponentPanel'

import React, { useRef, useState } from 'react'

type FeedbackActiveState = 'idle' | 'collecting' | 'isPending' | 'submitted' | 'error'
type FeedbackType = 'happy' | 'neutral' | 'sad'

const ComponentsHome: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedFeedbackType, setSelectedFeedbackType] = useState<FeedbackType | null>(null)
  const [activeState, setActiveState] = useState<FeedbackActiveState>('idle')
  const [comment, setComment] = useState<string>('')
  const [openState, setOpenState] = useState<boolean>(false)
  const [pageState, setPageState] = useState<number>(1)
  const [toggleValue, setToggleValue] = useState<string>('ulest')
  const containerRef = useRef(null)
  const buttonRef = useRef(null)

  const elements = [
    {
      navigate: '/components/accordion',
      label: 'Accordion',
      description:
        'Accordions organize your content into sections that can expand and collapse individually.',
      el: (
        <Accordion border>
          <Accordion.Item>
            <Accordion.Header>Recipe ingredients</Accordion.Header>
            <Accordion.Content>
              <span>You need these ingredients:</span>
              <ul>
                <li>Flour</li>
                <li>Milk</li>
                <li>Eggs</li>
                <li>Sugar</li>
                <li>Butter</li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Preparation</Accordion.Header>
            <Accordion.Content>
              <ul>
                <li>Add everything in a bowl</li>
                <li>Mix it for 10 min</li>
                <li>
                  Put in a oven for 20 min, 200<sup>o</sup> C
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      )
    },
    {
      navigate: '/components/alert',
      label: 'Alert',
      description: 'Alert banners increase the visibility of notifications over app events to users.',
      el: <Alert variant='success'>Recipe approved</Alert>
    },
    {
      navigate: '/components/badge',
      label: 'Badge',
      description: 'Used to inform users about the status of an object or a completed action.',
      el: (
        <Badge icon={IconCheckCircle} size='small' status='approved' variant='block'>
          Approved
        </Badge>
      )
    },
    {
      navigate: '/components/button',
      label: 'Button',
      description: 'A collection of buttons for different kinds of user actions.',
      el: (
        <div style={{ display: 'grid', gap: 8, gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <Button variant='primary'>Bake a cake</Button>
          <Button variant='secondary'>Download recipe</Button>
          <Button variant='tertiary'>Share recipe</Button>
          <Button variant='caution'>Delete recipe</Button>
        </div>
      )
    },
    {
      navigate: '/components/checkbox',
      label: 'Checkbox',
      description: 'Form element that collects boolean values from the user.',
      el: (
        <FormItem>
          <Checkbox>Bake a cake today</Checkbox>
        </FormItem>
      )
    },
    {
      navigate: '/components/card',
      label: 'Card',
      description: 'Card component with  Header, Content and Footer sections.',
      el: (
        <Card>
          <CardHeader>
            <CardHeaderContent>
              <CardTitle>Your vacation house</CardTitle>
              <CardDescription>It's a beautiful place</CardDescription>
            </CardHeaderContent>
            <CardHeaderActions>
              <Badge status='approved' variant='block' size='small' icon={IconQualitiesCircle}>
                Active
              </Badge>
            </CardHeaderActions>
          </CardHeader>
          <CardContent style={{ display: 'grid', gap: 16 }}>
            <div>
              <BodyText weight='bold' size='small'>
                Grid owner
              </BodyText>
              <BodyText size='small'>Owner AS</BodyText>
            </div>
            <div>
              <BodyText weight='bold' size='small'>
                Balance Supplier
              </BodyText>
              <BodyText size='small'>Energi AS</BodyText>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant='tertiary'>Details</Button>
            <Button variant='tertiary'>Metering Values</Button>
          </CardFooter>
        </Card>
      )
    },
    {
      navigate: '/components/checkboxgroup',
      label: 'Checkbox group',
      description: 'Fielset element that groups checkbox components into a common section.',
      el: (
        <FormItem>
          <FormItemLabel>Shopping list</FormItemLabel>
          <CheckboxGroup size='small'>
            <Checkbox value='Eggs'>Eggs</Checkbox>
            <Checkbox value='Milk'>Milk</Checkbox>
            <Checkbox value='Coffee'>Coffee</Checkbox>
          </CheckboxGroup>
        </FormItem>
      )
    },
    {
      navigate: '/components/chips',
      label: 'Chips',
      description: 'Interactable chips',
      el: (
        <Chips>
          <Chips.Chip>Latte</Chips.Chip>
        </Chips>
      )
    },
    {
      navigate: '/components/combobox',
      label: 'Combobox',
      description: 'The next Select multiple',
      el: (
        <FormItem>
          <FormItemLabel>Ingredients</FormItemLabel>
          <Combobox options={['egg', 'milk', 'sugar']} />
        </FormItem>
      )
    },
    {
      navigate: '/components/cookie-banner',
      label: 'Cookie banner',
      description: 'Cookie banner component for informing users about cookie usage.',
      el: (
        <CookieBanner style={{ position: 'static' }}>
          <CookieBannerTitle>We use cookies</CookieBannerTitle>
          <CookieBannerDescription>
            We use cookies to improve your experience on our site. By using our site you consent to cookies.
          </CookieBannerDescription>
          <CookieBannerContent>
            <Link external href='https://elhub.no/personvern-og-sikkerhet/'>
              Learn more
            </Link>
          </CookieBannerContent>
          <CookieBannerActions>
            <Button variant='primary'>Close</Button>
          </CookieBannerActions>
        </CookieBanner>
      )
    },
    {
      navigate: '/components/datepicker',
      label: 'Datepicker',
      description: 'Date selection component',
      el: (
        <FormItem>
          <FormItemLabel>Ingredients</FormItemLabel>
          <Datepicker />
        </FormItem>
      )
    },
    {
      navigate: '/components/divider',
      label: 'Divider',
      description: 'Divider for separating sections on screen.',
      el: <Divider />
    },
    {
      navigate: '/components/dropdown',
      label: 'Dropdown',
      description: 'Dropdown menu component that packs contextual actions in a hidden way.',
      el: (
        <Dropdown>
          <Button as={Dropdown.Toggle}>Toggle</Button>
          <Dropdown.Menu>
            <Dropdown.Menu.GroupedList>
              <Dropdown.Menu.GroupedList.Heading>Recipes</Dropdown.Menu.GroupedList.Heading>
              <Dropdown.Menu.GroupedList.Item>Eggs</Dropdown.Menu.GroupedList.Item>
              <Dropdown.Menu.GroupedList.Item>Milk</Dropdown.Menu.GroupedList.Item>
            </Dropdown.Menu.GroupedList>
            <Dropdown.Menu.Divider />
            <Dropdown.Menu.List>
              <Dropdown.Menu.List.Item>Sugar</Dropdown.Menu.List.Item>
              <Dropdown.Menu.List.Item>Flour</Dropdown.Menu.List.Item>
            </Dropdown.Menu.List>
          </Dropdown.Menu>
        </Dropdown>
      )
    },
    {
      navigate: '/components/filterpanel',
      label: 'Filter panel',
      description: 'Panel with filtering chips',
      el: (
        <FilterPanel>
          <FilterPanel.Chip>Egg</FilterPanel.Chip>
          <FilterPanel.Chip>Milk</FilterPanel.Chip>
          <FilterPanel.Chip>Flour</FilterPanel.Chip>
        </FilterPanel>
      )
    },
    {
      navigate: '/components/feedback',
      label: 'Feedback',
      description: 'Form for submitting feedback',
      el: (
        <Feedback>
          {activeState === 'idle' && (
            <Feedback.Idle>
              <Heading size='small'>How was this page to use?</Heading>
              <Feedback.Idle.ButtonGroup aria-label='Rate this page'>
                <Feedback.Idle.Button
                  size='large'
                  type='happy'
                  onClick={() => {
                    setSelectedFeedbackType('happy')
                    setActiveState('collecting')
                  }}
                >
                  Good
                </Feedback.Idle.Button>
                <Feedback.Idle.Button
                  size='large'
                  type='neutral'
                  onClick={() => {
                    setSelectedFeedbackType('neutral')
                    setActiveState('collecting')
                  }}
                >
                  Okay
                </Feedback.Idle.Button>
                <Feedback.Idle.Button
                  size='large'
                  type='sad'
                  onClick={() => {
                    setSelectedFeedbackType('sad')
                    setActiveState('collecting')
                  }}
                >
                  Bad
                </Feedback.Idle.Button>
              </Feedback.Idle.ButtonGroup>
            </Feedback.Idle>
          )}

          {activeState === 'collecting' && (
            <Feedback.Collecting>
              <Heading size='small'>What made you feel this way? (Optional)</Heading>
              <BodyText>Your answer helps us improve this page.</BodyText>
              <BodyText>Do not write any personal information.</BodyText>

              <VerticalSpace size='1' />

              <Textarea
                placeholder='Do not write any personal information.'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <VerticalSpace size='2' />

              <Feedback.Collecting.ButtonGroup>
                <Button
                  variant='primary'
                  onClick={async () => {
                    if (!selectedFeedbackType) return
                    console.log('Feedback submitted:', { selectedFeedbackType, comment })
                    setActiveState('isPending')
                    await new Promise((r) => setTimeout(r, 900))
                    setActiveState('submitted')
                  }}
                >
                  Send feedback
                </Button>
                <Button variant='tertiary' onClick={() => setActiveState('idle')}>
                  Cancel
                </Button>
              </Feedback.Collecting.ButtonGroup>
            </Feedback.Collecting>
          )}

          {activeState === 'isPending' && <Loader />}

          {activeState === 'error' && (
            <Feedback.Collecting>
              <Heading size='small'>We could not submit your feedback right now.</Heading>
              <BodyText>Try again in a moment.</BodyText>

              <VerticalSpace size='2' />

              <Feedback.Collecting.ButtonGroup>
                <Button variant='primary' onClick={() => setActiveState('collecting')}>
                  Try again
                </Button>
                <Button variant='tertiary' onClick={() => setActiveState('idle')}>
                  Back
                </Button>
              </Feedback.Collecting.ButtonGroup>
            </Feedback.Collecting>
          )}

          {activeState === 'submitted' && (
            <Feedback.Submitted>
              <IconCheckCircle aria-hidden='true' className='eds-feedback__submitted-icon' />
              <Heading size='small'>Thanks for your feedback!</Heading>
            </Feedback.Submitted>
          )}
        </Feedback>
      )
    },
    {
      navigate: '/components/form-item',
      label: 'FormItem',
      description: 'Form item component that wraps form elements with a label and optional error message.',
      el: (
        <FormItem>
          <FormItemLabel>Form Item</FormItemLabel>
          <TextField />
        </FormItem>
      )
    },
    {
      navigate: '/components/link',
      label: 'Link',
      description: 'Styled anchor element suited for internal and external navigation links.',
      el: <Link href='#a'>See shopping list</Link>
    },
    {
      navigate: '/components/loader',
      label: 'Loader',
      description: 'Loader animation with a spinning circular SVG element with different styles and sizes.',
      el: <Loader size='medium' />
    },
    {
      navigate: '/components/modal',
      label: 'Modal',
      description: 'Dialog panel that blocks the viewport and prompts user for an input before continuing.',
      el: (
        <>
          <Button
            variant='secondary'
            onClick={() => {
              setOpenModal(!openModal)
            }}
          >
            See ingredients
          </Button>
          {containerRef.current && (
            <Modal
              // @ts-expect-error ignore this
              parentSelector={() => containerRef?.current}
              open={openModal}
              aria-label='Modal demo'
              closeButton={false}
              onClose={() => {
                setOpenModal(!openModal)
              }}
            >
              <Modal.Content>
                <Modal.Content.Body>
                  <BodyText>This recipe needs:</BodyText>
                  <ul>
                    <li>Flour</li>
                    <li>Eggs</li>
                    <li>Sugar</li>
                  </ul>
                </Modal.Content.Body>
                <Modal.Content.Footer style={{ textAlign: 'end' }}>
                  <Button
                    onClick={() => {
                      setOpenModal(!openModal)
                    }}
                  >
                    {' '}
                    OK{' '}
                  </Button>
                </Modal.Content.Footer>
              </Modal.Content>
            </Modal>
          )}
        </>
      )
    },
    {
      navigate: '/components/navbar',
      label: 'Navigation bar',
      description: 'Navigation element that groups links and other components for header and sidebar menus.',
      el: (
        <NavBar underscore>
          <NavBar.Link>Soups</NavBar.Link>
          <NavBar.Link>Starters</NavBar.Link>
          <NavBar.Link>Desserts</NavBar.Link>
        </NavBar>
      )
    },
    {
      navigate: '/components/pagination',
      label: 'Pagination',
      description:
        'Navigation buttons for browsing pages of elements where only a slice them should be visible.',
      el: (
        <Pagination
          size='small'
          page={pageState}
          onPageChange={(x: number) => {
            setPageState(x)
          }}
          count={3}
          boundaryCount={1}
          siblingCount={1}
        />
      )
    },
    {
      navigate: '/components/panel',
      label: 'Panel',
      description: 'Baseline component that wraps content with an optional border, padding or background.',
      el: (
        <Panel border background>
          <PileCenterDiv>
            <BodyText>Pasta recipe</BodyText>
            <BodyText>Time: 15 min.</BodyText>
          </PileCenterDiv>
        </Panel>
      )
    },
    {
      navigate: '/components/popover',
      label: 'Popover',
      description:
        'tooltip component that displays as a balloon, next to any element, to show context information.',
      el: (
        <>
          <Button
            ref={buttonRef}
            onClick={() => {
              setOpenState(true)
            }}
          >
            Put cake in the oven
          </Button>
          <Popover
            placement='top'
            open={openState}
            onClose={() => {
              setOpenState(false)
            }}
            anchorEl={buttonRef.current}
          >
            <Popover.Content>Make sure the oven is pre-heated</Popover.Content>
          </Popover>
        </>
      )
    },
    {
      navigate: '/components/radiogroup',
      label: 'Radio group',
      description: 'Group of radio buttons handy to display a good description for each available option.',
      el: (
        <FormItem>
          <FormItemLabel>Shopping list</FormItemLabel>
          <RadioGroup defaultValue='milk'>
            <Radio value='milk'>Milk</Radio>
            <Radio value='egg'>Eggs</Radio>
            <Radio value='flour'>Flour</Radio>
          </RadioGroup>
        </FormItem>
      )
    },
    {
      navigate: '/components/search',
      label: 'Search',
      description: 'Text field component coupled with a search button and optional search suggestions.',
      el: <Search clearButtonLabel='Clear' hideLabel={false} label='Search recipes' size='medium' />
    },
    {
      navigate: '/components/select',
      label: 'Select',
      description: 'Native select dropdown component for picking one single option from a menu list.',
      el: (
        <FormItem>
          <FormItemLabel>Select a cake</FormItemLabel>
          <Select placeholder='Choose your cake'>
            <SelectContent>
              <SelectItem value='chocolateCake'>Chocolate cake</SelectItem>
              <SelectItem value='cheeseCake'>Cheesecake</SelectItem>
              <SelectItem value='carrotCake'>Carrot cake</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )
    },
    {
      navigate: '/components/stepper',
      label: 'Stepper',
      description: 'The Stepper component is used to guide users through a series of steps in a process.',
      el: (
        <Stepper
          steps={[
            { value: 0, title: 'Cart' },
            { value: 1, title: 'Payment' },
            { value: 2, title: 'Complete' }
          ]}
          activeStep={0}
        />
      )
    },
    {
      navigate: '/components/switch',
      label: 'Switch',
      description: 'Alternative checkbox component, with a better visibility over its checked state.',
      el: (
        <FormItem>
          <FormItemLabel>Get recipe updated</FormItemLabel>
          <Switch />
        </FormItem>
      )
    },
    {
      navigate: '/components/table',
      label: 'Table',
      description: 'Styled table elements with sortable column headers, expandable / selectable rows.',
      el: (
        <Table size='small'>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Amount</Table.ColumnHeader>
              <Table.ColumnHeader>Item</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>200g</Table.DataCell>
              <Table.DataCell>Butter</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>3 tsp</Table.DataCell>
              <Table.DataCell>Sugar</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>2</Table.DataCell>
              <Table.DataCell>Eggs</Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table>
      )
    },
    {
      navigate: '/components/tabs',
      label: 'Tabs',
      description: 'Tab-style menu for switching between different panel contents, showing one at a time.',
      el: (
        <Tabs defaultValue='soups' size='small'>
          <Tabs.List>
            <Tabs.Tab value='soups' label='Soups' />
            <Tabs.Tab value='main courses' label='Main courses' />
            <Tabs.Tab value='desserts' label='Desserts' />
          </Tabs.List>
          <Tabs.Panel value='soups'>
            <VerticalSpace />
            <ul>
              <li>Chicken soup</li>
              <li>Vegetable soup</li>
            </ul>
          </Tabs.Panel>
          <Tabs.Panel value='main courses'>
            <Panel noPadding={false}>
              <VerticalSpace />
              <ul>
                <li>Pizza</li>
                <li>Sandwich</li>
              </ul>
            </Panel>
          </Tabs.Panel>
          <Tabs.Panel value='desserts'>
            <VerticalSpace />
            <ul>
              <li>Chocolate cake</li>
              <li>Ice cream</li>
            </ul>
          </Tabs.Panel>
        </Tabs>
      )
    },
    {
      navigate: '/components/tag',
      label: 'Tag',
      description: 'Styled labels for categorizing certain elements with the help of colors.',
      el: <Tag variant='error'>Spicy</Tag>
    },
    {
      navigate: '/components/textarea',
      label: 'Text area',
      description: 'Text area components with charater limits, resizing capability, error handling.',
      el: (
        <FormItem>
          <FormItemLabel>Comment</FormItemLabel>
          <Textarea value='This is a great cake for a party' onChange={() => {}} />
        </FormItem>
      )
    },
    {
      navigate: '/components/textfield',
      label: 'Text field',
      description: 'Text field components to let user enter and edit text content.',
      el: (
        <FormItem>
          <FormItemLabel>Ingredient</FormItemLabel>
          <TextField value='Butter' onChange={() => {}} />
        </FormItem>
      )
    },
    {
      navigate: '/components/togglegroup',
      label: 'Toggle group',
      description: 'Styled toggle buttons group for picking a value among a list of options.',
      el: (
        <ToggleGroup onChange={setToggleValue} value={toggleValue} size='small'>
          <ToggleGroup.Item value='soups'>Soups</ToggleGroup.Item>
          <ToggleGroup.Item value='maincourses'>Main courses</ToggleGroup.Item>
          <ToggleGroup.Item value='desserts'>Desserts</ToggleGroup.Item>
        </ToggleGroup>
      )
    },
    {
      navigate: '/components/Tooltip',
      label: 'Tooltip',
      description: 'Balloon tooltip on hover for quick descriptions over an element.',
      el: (
        <Tooltip content='You have one cake in the oven' placement='top'>
          <Button variant='secondary'>Cakes</Button>
        </Tooltip>
      )
    }
  ]

  return (
    <>
      <VerticalSpace />
      <Heading level='1' size='xlarge'>
        Components library
      </Heading>
      <VerticalSpace size='1' />
      <FlexDiv style={{ marginLeft: 8 }}>
        <Search
          label='Search components'
          placeholder='Search components'
          clearButtonLabel='Clear'
          value={query}
          onChange={setQuery}
        />
      </FlexDiv>
      <VerticalSpace size='1' />
      <FlexDiv ref={containerRef} style={{ flexWrap: 'wrap' }}>
        {elements
          .filter((el) => el.label.toLowerCase().match(query.toLowerCase()))
          .map((e) => (
            <ComponentPanel key={e.label} navigate={e.navigate} label={e.label} description={e.description}>
              {e.el}
            </ComponentPanel>
          ))}
      </FlexDiv>
    </>
  )
}

export default ComponentsHome
