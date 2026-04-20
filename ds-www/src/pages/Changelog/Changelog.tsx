import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Markdown from 'react-markdown'
import cssMd from '../../../../ds-css/CHANGELOG.md'
import componentsMd from '../../../../ds-components/CHANGELOG.md'
import iconsMd from '../../../../ds-icons/CHANGELOG.md'
import graphMd from '../../../../ds-graph/CHANGELOG.md'
import tokensMd from '../../../../ds-tokens/CHANGELOG.md'
import { Tabs, Heading, BodyText, Divider, Button } from '@elhub/ds-components'
import { IconCopy } from '@elhub/ds-icons'
import styled from 'styled-components'

const MarkdownSection = styled.div`
  margin: 1.5rem 0;
  display: grid;
  gap: 0.5rem;
`
const HeadingWrapper = styled.div`
  max-width: 800px;
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
`

const VersionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

// each change starts with ## in CHANGELOG.md, so we split the markdown by ## to group the changes
const groupMarkdownByH2 = (markdown: string): string[] => {
  const sections = markdown.split(/\n## /).map((section, index) => {
    return index === 0 ? section : `## ${section}`
  })
  return sections
}

type ChangeLogTab = 'css' | 'components' | 'icons' | 'graph' | 'tokens'

const ChangeLogMap: Record<ChangeLogTab, string> = {
  css: cssMd,
  components: componentsMd,
  icons: iconsMd,
  graph: graphMd,
  tokens: tokensMd
}

export const Changelog: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const initialTab = (queryParams.get('tab') as ChangeLogTab) || 'components'
  const initialVersion = location.hash ? location.hash.substring(1) : null

  const [activeTab, setActiveTab] = useState<ChangeLogTab>(initialTab)
  const [changes, setChanges] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchChanges(): Promise<void> {
      setLoading(true)
      const response = await fetch(ChangeLogMap[activeTab])
      const text = await response.text()
      setChanges(text)
      setLoading(false)
    }

    fetchChanges()
  }, [activeTab])

  useEffect(() => {
    // Update the URL when the active tab changes
    navigate(`?tab=${activeTab}${initialVersion ? `#${initialVersion}` : ''}`, { replace: true })
  }, [activeTab, navigate, initialVersion])

  useEffect(() => {
    // Scroll to version if hash (version) exists in the URL
    if (initialVersion) {
      const element = document.getElementById(initialVersion)
      if (element) {
        const offset = 80 // Add offset to scroll position to account for the fixed header
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }, [initialVersion, changes])

  const handleLinkClick = (version: string): void => {
    // Update the URL hash to reflect the selected version
    const newUrl = `${window.location.origin}${window.location.pathname}?tab=${activeTab}#${version}`
    // Update the URL hash to reflect the selected version
    navigate(`?tab=${activeTab}#${version}`, { replace: true })

    // Copy the new URL to the clipboard
    navigator.clipboard.writeText(newUrl).catch((err) => {
      console.error('Failed to copy: ', err)
    })
  }

  const groupedChanges = changes ? groupMarkdownByH2(changes) : []

  return (
    <div style={{ alignSelf: 'center', margin: '16px 48px', maxWidth: 1200 }}>
      <HeadingWrapper>
        <Heading level='1' size='xlarge'>
          Changelog
        </Heading>
        <BodyText>
          The Elhub Design System (EDS) changelog provides documentation of all updates, enhancements, and bug
          fixes across the various packages that form the design system. These updates ensure that the design
          system remains consistent, accessible, and in line with design and development best practices.
        </BodyText>

        <BodyText>
          Each package has its own dedicated tab for easy navigation, allowing you to view the specific
          changelog for each package. Within each tab, you&#39;ll find detailed information on new features,
          bug fixes, performance improvements, and any potential breaking changes.
        </BodyText>
      </HeadingWrapper>
      <Tabs
        defaultValue={'overview'}
        value={activeTab}
        onChange={(value) => {
          setActiveTab(value as ChangeLogTab)
          // When tab changes, remove the hash (version)
          navigate(`?tab=${value}`, { replace: true })
        }}
      >
        <Tabs.List>
          <Tabs.Tab label='Components' value='components'></Tabs.Tab>
          <Tabs.Tab label='CSS' value='css'></Tabs.Tab>
          <Tabs.Tab label='Icons' value='icons'></Tabs.Tab>
          <Tabs.Tab label='Graph' value='graph'></Tabs.Tab>
          <Tabs.Tab label='Tokens' value='tokens'></Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          groupedChanges.map((section, index) => {
            // Get the version from the h2 heading
            const match = section.match(/^##\s*(\S+)/)
            const version = match ? match[1] : `section-${index}`
            return (
              <MarkdownSection key={index} id={version}>
                <Markdown
                  components={{
                    h1: ({ children, ...props }) => (
                      <Heading level='1' size='large' {...props}>
                        {children}
                      </Heading>
                    ),
                    h2: ({ children, ...props }) => (
                      <VersionHeading>
                        <Heading level='2' size='medium' {...props}>
                          {children}
                        </Heading>
                        {/* Add button to update the URL */}
                        <Button
                          onClick={() => {
                            handleLinkClick(version)
                          }}
                          size='small'
                          variant='tertiary'
                          icon={IconCopy}
                        >
                          Copy link
                        </Button>
                      </VersionHeading>
                    ),
                    h3: ({ children, ...props }) => (
                      <Heading level='3' size='small' {...props}>
                        {children}
                      </Heading>
                    ),
                    h4: ({ children, ...props }) => (
                      <Heading level='4' size='xsmall' {...props}>
                        {children}
                      </Heading>
                    ),
                    li: ({ children, ...props }) => (
                      <li {...props}>
                        <BodyText>{children}</BodyText>
                      </li>
                    ),
                    p: ({ children, ...props }) => <BodyText {...props}>{children}</BodyText>
                  }}
                >
                  {section}
                </Markdown>
                <Divider />
              </MarkdownSection>
            )
          })
        )}
      </div>
    </div>
  )
}
