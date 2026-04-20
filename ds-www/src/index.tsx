import TopContainer from 'components/TopContainer/TopContainer'
import React, { Suspense, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import * as Pages from 'pages'
import '@elhub/ds-css'
import './index.css'

const container = document.getElementById('root')
if (!container) throw new Error('root not found.')

const root = createRoot(container)

const ScrollToTop: React.FC = (): React.ReactNode => {
  const { pathname } = useLocation()
  useEffect(() => {
    const canControlScrollRestoration = 'scrollRestoration' in window.history
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return <></>
}

root.render(
  <Suspense fallback={<span>...</span>}>
    <BrowserRouter>
      <TopContainer>
        <ScrollToTop />
        <Routes>
          <Route path='/start-here' element={<Pages.StartHere />} />
          <Route path='/resources' element={<Pages.Resources.Route />}>
            <Route index element={<Pages.Resources.Home />} />
            <Route path='icons' element={<Pages.Resources.Icons />} />
            <Route path='tokens' element={<Pages.Resources.Tokens />} />
            <Route path='typography' element={<Pages.Resources.Typography />} />
            <Route path='spacing' element={<Pages.Resources.Spacing />} />
            <Route path='graphs' element={<Pages.Resources.Graphs />} />
          </Route>
          <Route path='/changelog' element={<Pages.Changelog.Changelog />} />
          <Route path='/components' element={<Pages.Components.Route />}>
            <Route index element={<Pages.Components.Home />} />
            <Route path='accordion' element={<Pages.Components.Accordion />} />
            <Route path='alert' element={<Pages.Components.Alert />} />
            <Route path='badge' element={<Pages.Components.Badge />} />
            <Route path='button' element={<Pages.Components.Button />} />
            <Route path='card' element={<Pages.Components.Card />} />
            <Route path='checkbox' element={<Pages.Components.Checkbox />} />
            <Route path='checkboxgroup' element={<Pages.Components.CheckboxGroup />} />
            <Route path='chips' element={<Pages.Components.Chips />} />
            <Route path='combobox' element={<Pages.Components.Combobox />} />
            <Route path='cookie-banner' element={<Pages.Components.CookieBanner />} />
            <Route path='datepicker' element={<Pages.Components.Datepicker />} />
            <Route path='divider' element={<Pages.Components.Divider />} />
            <Route path='dropdown' element={<Pages.Components.Dropdown />} />
            <Route path='filterpanel' element={<Pages.Components.FilterPanel />} />
            <Route path='form-item' element={<Pages.Components.FormItem />} />
            <Route path='link' element={<Pages.Components.Link />} />
            <Route path='loader' element={<Pages.Components.Loader />} />
            <Route path='modal' element={<Pages.Components.Modal />} />
            <Route path='navbar' element={<Pages.Components.NavBar />} />
            <Route path='pagination' element={<Pages.Components.Pagination />} />
            <Route path='panel' element={<Pages.Components.Panel />} />
            <Route path='popover' element={<Pages.Components.Popover />} />
            <Route path='radiogroup' element={<Pages.Components.RadioGroup />} />
            <Route path='search' element={<Pages.Components.Search />} />
            <Route path='select' element={<Pages.Components.Select />} />
            <Route path='stepper' element={<Pages.Components.Stepper />} />
            <Route path='switch' element={<Pages.Components.Switch />} />
            <Route path='table' element={<Pages.Components.Table />} />
            <Route path='tabs' element={<Pages.Components.Tabs />} />
            <Route path='tag' element={<Pages.Components.Tag />} />
            <Route path='textarea' element={<Pages.Components.TextArea />} />
            <Route path='textfield' element={<Pages.Components.TextField />} />
            <Route path='togglegroup' element={<Pages.Components.ToggleGroup />} />
            <Route path='tooltip' element={<Pages.Components.Tooltip />} />
            <Route path='typography' element={<Pages.Components.Typography />} />
            <Route path='containers' element={<Pages.Components.Containers />} />
            <Route path='spacing' element={<Pages.Components.Spacing />} />
            <Route path='grids' element={<Pages.Components.Grids />} />
          </Route>
          <Route path='/*' element={<Pages.Home />} />
        </Routes>
      </TopContainer>
    </BrowserRouter>
  </Suspense>
)
