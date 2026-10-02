import { AdvancedTabs } from '@elhub/ds-components'

export const TabsSelectionFollowsFocusExample = () => {
  return (
    <AdvancedTabs defaultValue='email' selectionFollowsFocus>
      <AdvancedTabs.List>
        <AdvancedTabs.Tab value='email'>email</AdvancedTabs.Tab>
        <AdvancedTabs.Tab value='read'>read</AdvancedTabs.Tab>
        <AdvancedTabs.Tab value='unread'>unread</AdvancedTabs.Tab>
      </AdvancedTabs.List>
      <AdvancedTabs.Panel value='email'>Panel for Emails</AdvancedTabs.Panel>
      <AdvancedTabs.Panel value='read'>Panel for Read emails</AdvancedTabs.Panel>
      <AdvancedTabs.Panel value='unread'>Panel for Unread emails</AdvancedTabs.Panel>
    </AdvancedTabs>
  )
}
