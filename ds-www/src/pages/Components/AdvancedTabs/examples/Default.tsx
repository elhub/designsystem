import { AdvancedTabs, VerticalSpace, BodyText } from '@elhub/ds-components'
import React from 'react'
import { IconCheckCircle } from '@elhub/ds-icons'

export const AdvancedTabsDefaultExample = () => {
  return (
    <AdvancedTabs defaultValue='email'>
      <AdvancedTabs.List>
        <AdvancedTabs.Tab value='email'>email</AdvancedTabs.Tab>
        <AdvancedTabs.Tab value='read'>
          read <IconCheckCircle aria-hidden='true' />
        </AdvancedTabs.Tab>
        <AdvancedTabs.Tab value='unread'>
          <div>
            <BodyText as='span' size='small' className='eds-tabs__tab-inner' weight='bold'>
              unread
            </BodyText>
            <VerticalSpace />
            Emails not read
          </div>
        </AdvancedTabs.Tab>
      </AdvancedTabs.List>
      <AdvancedTabs.Panel value='email'>Panel for Emails</AdvancedTabs.Panel>
      <AdvancedTabs.Panel value='read'>Panel for Read emails</AdvancedTabs.Panel>
      <AdvancedTabs.Panel value='unread'>Panel for Unread emails</AdvancedTabs.Panel>
    </AdvancedTabs>
  )
}
