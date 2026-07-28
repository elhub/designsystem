import { BodyText, Content, Heading, Link, VerticalSpace } from '@elhub/ds-components'
import CodeDiv from 'components/CodeDiv/CodeDiv'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import customiseComponentsSource from './examples/CustomiseComponents.txt?raw'
import installSource from './examples/install.sh?raw'
import usageSource from './examples/Usage.tsx?raw'

const StartHere: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Content>
      <VerticalSpace />

      <Heading size='large'>Getting started</Heading>

      <VerticalSpace size='2' />

      <BodyText>
        Welcome to the Elhub Design System (EDS). Whether you're integrating EDS into an existing React
        project or starting fresh, we've got you covered.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' level='2' id='installation' size='medium'>
        Set up your React project (optional)
      </Heading>
      <VerticalSpace size='1' />

      <BodyText>Use your preferred method to set up a new React project.</BodyText>
      <VerticalSpace size='1' />
      <BodyText>
        We recommend using{' '}
        <Link href='https://vitejs.dev/' target='_blank' rel='noopener noreferrer'>
          Vite
        </Link>
        {', '}
        which we are also using in this guide.
        <VerticalSpace size='1' />
        EDS does not support{' '}
        <Link href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
          Next.js
        </Link>{' '}
        which is Server Side Rendered (SSR) by default.
      </BodyText>

      <VerticalSpace size='2' />

      {/* Existing React Project Installation Instructions */}
      <Heading className='toc' level='2' id='react-package' size='medium'>
        Integrate EDS into Your React Project
      </Heading>

      <VerticalSpace size='1' />

      <BodyText>
        To install the Elhub Design System into your existing React project, run the following command:
      </BodyText>

      <CodeDiv spacing expand={false} highlighter='shiki'>
        {installSource}
      </CodeDiv>

      {/* Component usage instructions */}
      <Heading className='toc' level='2' id='react-use' size='medium'>
        How to use EDS
      </Heading>

      <VerticalSpace size='2' />

      <BodyText>
        To utilize the design system's styles and components, import the CSS stylesheet and the components you
        need, as shown below:
      </BodyText>

      <CodeDiv spacing expand={false} highlighter='shiki'>
        {usageSource}
      </CodeDiv>

      <BodyText>
        It's recommended to import the `@elhub/ds-css` stylesheet once in your project's `src/index.tsx` file
        to ensure consistent styling across your application.
      </BodyText>

      <VerticalSpace size='2' />

      <Heading className='toc' level='2' id='react-customise' size='medium'>
        Customize Components
      </Heading>

      <VerticalSpace size='2' />

      <BodyText>
        The components are very flexible and customizable by design. You can style them using plain CSS or
        CSS-in-JS libraries like styled-components.
      </BodyText>

      <CodeDiv spacing expand={false} highlighter='shiki'>
        {customiseComponentsSource}
      </CodeDiv>

      <BodyText>
        Visit the{' '}
        <Link
          href='#'
          onClick={() => {
            navigate('/resources/colors')
          }}
        >
          Resources &gt; Colors
        </Link>{' '}
        page for a list of colors, sizes, and other variables you can use to style your components.
      </BodyText>

      <VerticalSpace size='3' />
    </Content>
  )
}

export default StartHere
