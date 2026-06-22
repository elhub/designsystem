import { Accordion, BodyText, Button, PileDiv, VerticalSpace } from '@elhub/ds-components'
import { NavDiv } from 'components/styled'
import ToC from 'components/ToC/ToC'
import { IconChevronLeft as KeyboardArrowLeft } from '@elhub/ds-icons'
import useHeadings from 'hooks/useHeadings'
import useScrollSpy from 'hooks/useScrollSpy'
import React, { useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Route: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const contentRef = useRef(null)
  const headings = useHeadings(contentRef, location.pathname)
  const activeId = useScrollSpy(
    headings.map(({ id }) => id),
    {
      root: null, // default, use viewport
      rootMargin: '0px',
      threshold: 0.5 // half of item height
    }
  )

  const paths = location.pathname.split('/')
  const components = [
    { label: 'Accordion', value: 'accordion' },
    { label: 'Alert', value: 'alert' },
    { label: 'Badge', value: 'badge' },
    { label: 'Button', value: 'button' },
    { label: 'Card', value: 'card' },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'CheckboxGroup', value: 'checkboxgroup' },
    { label: 'Chips', value: 'chips' },
    { label: 'Combobox', value: 'combobox' },
    { label: 'CookieBanner', value: 'cookie-banner' },
    { label: 'Datepicker', value: 'datepicker' },
    { label: 'Divider', value: 'divider' },
    { label: 'Dropdown', value: 'dropdown' },
    { label: 'Feedback', value: 'feedback' },
    { label: 'FilterPanel', value: 'filterpanel' },
    { label: 'FormItem', value: 'form-item' },
    { label: 'Link', value: 'link' },
    { label: 'Loader', value: 'loader' },
    { label: 'Modal', value: 'modal' },
    { label: 'NavBar', value: 'navbar' },
    { label: 'Pagination', value: 'pagination' },
    { label: 'Panel', value: 'panel' },
    { label: 'Popover', value: 'popover' },
    { label: 'RadioGroup', value: 'radiogroup' },
    { label: 'Search', value: 'search' },
    { label: 'Select', value: 'select' },
    { label: 'Stepper', value: 'stepper' },
    { label: 'Switch', value: 'switch' },
    { label: 'Table', value: 'table' },
    { label: 'Tabs', value: 'tabs' },
    { label: 'Tag', value: 'tag' },
    { label: 'TextArea', value: 'textarea' },
    { label: 'TextField', value: 'textfield' },
    { label: 'ToggleGroup', value: 'togglegroup' },
    { label: 'Tooltip', value: 'tooltip' },
    { label: 'Typography', value: 'typography' }
  ]
  const layouts = [
    { label: 'Containers', value: 'containers' },
    { label: 'Spacing', value: 'spacing' },
    { label: 'Grids', value: 'grids' }
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', padding: 24 }}>
      <NavDiv>
        {paths.length > 2 && (
          <div style={{ margin: '1rem 0' }}>
            <Button
              variant='secondary'
              icon={KeyboardArrowLeft}
              iconPosition='left'
              onClick={() => {
                navigate('/components')
              }}
            >
              Go back
            </Button>
          </div>
        )}
        <div style={{ padding: '0.25rem 0.5rem' }}>
          <BodyText size='large' weight='bold'>
            Components
          </BodyText>
        </div>
        <hr />
        <Accordion size='small' arrow={false}>
          {components.map((el) => (
            <Accordion.Item key={el.value} open={el.value === paths[2]}>
              <Accordion.Header
                onClick={() => {
                  navigate(`/components/${el.value}`)
                }}
              >
                <BodyText weight='bold'>{el.label}</BodyText>
              </Accordion.Header>
              <Accordion.Content style={{ padding: '0' }}>
                <ToC headings={headings} activeId={activeId} />
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
        <VerticalSpace />
        <div style={{ padding: '0.5rem' }}>
          <BodyText size='small'>Layouts</BodyText>
        </div>
        <hr />
        <Accordion size='small' arrow={false}>
          {layouts.map((el) => (
            <Accordion.Item key={el.value} open={el.value === paths[2]}>
              <Accordion.Header
                onClick={() => {
                  navigate(`/components/${el.value}`)
                }}
              >
                {el.label}
              </Accordion.Header>
              <Accordion.Content style={{ padding: '0' }}>
                <ToC headings={headings} activeId={activeId} />
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </NavDiv>
      <PileDiv flex='4' ref={contentRef}>
        <Outlet />
      </PileDiv>
    </div>
  )
}

export default Route
