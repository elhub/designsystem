import { Tabs } from '@elhub/ds-components'
import { IconInformationCircleOutlined, IconQuestionCircle, IconWarningCircle } from '@elhub/ds-icons'

export const TabsIconsExample = () => {
  return (
    <Tabs defaultValue='email'>
      <Tabs.List>
        <Tabs.Tab
          value='email'
          iconPosition='left'
          label='Emails'
          icon={<IconInformationCircleOutlined size='medium' title='Emails' />}
        />
        <Tabs.Tab
          value='read'
          iconPosition='left'
          label='Read'
          icon={<IconWarningCircle size='medium' title='Read emails' />}
        />
        <Tabs.Tab
          value='unread'
          iconPosition='left'
          label='Unread'
          icon={<IconQuestionCircle size='medium' title='Unread emails' />}
        />
      </Tabs.List>
      <Tabs.Panel value='email'>Panel for Emails</Tabs.Panel>
      <Tabs.Panel value='read'>Panel for Read emails</Tabs.Panel>
      <Tabs.Panel value='unread'>Panel for Unread emails</Tabs.Panel>
    </Tabs>
  )
}
