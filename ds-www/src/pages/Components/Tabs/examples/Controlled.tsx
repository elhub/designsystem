import { Tabs } from '@elhub/ds-components'
import { useState } from 'react'

export const TabsControlledExample = () => {
  const [tabValue, setTabValue] = useState('email')

  return (
    <Tabs value={tabValue} onChange={setTabValue}>
      <Tabs.List>
        <Tabs.Tab value='email' label='Emails' />
        <Tabs.Tab value='read' label='Read' />
        <Tabs.Tab value='unread' label='Unread' />
      </Tabs.List>
      <Tabs.Panel value='email'>Panel for Emails</Tabs.Panel>
      <Tabs.Panel value='read'>Panel for Read emails</Tabs.Panel>
      <Tabs.Panel value='unread'>Panel for Unread emails</Tabs.Panel>
    </Tabs>
  )
}
