import { writeFileSync, readFileSync } from 'node:fs'

function toKebab(str: string): string {
  return str
    .replace(/([A-Z])/g, (_, char, offset) => (offset > 0 ? '-' : '') + char.toLowerCase())
    .replace(/([a-z])(\d)/g, '$1-$2')
}

function extractByFilter(
  tokens: Record<string, string>,
  filterFn: (key: string) => boolean,
  stripPrefix: string
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(tokens)
      .filter(([key]) => filterFn(key))
      .map(([key, value]) => [key.slice(stripPrefix.length + 1), value])
  )
}

function remapKeys(tokens: Record<string, string>, keyMap: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.entries(tokens).map(([key, value]) => [keyMap[key] ?? key, value]))
}

const borderRadiusKeyMap: Record<string, string> = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  xlarge: 'xl'
}

const nonColorPrefixes = ['eds-size', 'eds-z-index', 'eds-border-radius', 'eds-display', 'eds-font']
const nonColorKeys = new Set(['eds-semantic-focus'])

export function buildTailwindConfig(): void {
  const raw = JSON.parse(readFileSync('./dist/tokens.json', 'utf8'))

  const tokens = Object.fromEntries(Object.entries(raw).map(([key, value]) => [toKebab(key), String(value)]))

  const colors = Object.fromEntries(
    Object.entries(tokens)
      .filter(([key]) => !nonColorPrefixes.some((p) => key.startsWith(p)) && !nonColorKeys.has(key))
      .map(([key, value]) => [key.replace(/^eds-/, ''), value])
  )

  const config = {
    theme: {
      colors,
      screens: extractByFilter(tokens, (k) => k.startsWith('eds-display'), 'eds-display'),
      extend: {
        spacing: Object.fromEntries(
          Object.entries(extractByFilter(tokens, (k) => k.startsWith('eds-size'), 'eds-size')).map(
            ([key, rem]) => [
              //The key for 0.5 is 0-5, so we need to replace the - with a .
              key.replace('-', '.'),
              rem
            ]
          )
        ),
        borderRadius: remapKeys(
          extractByFilter(tokens, (k) => k.startsWith('eds-border-radius'), 'eds-border-radius'),
          borderRadiusKeyMap
        ),
        zIndex: extractByFilter(tokens, (k) => k.startsWith('eds-z-index'), 'eds-z-index'),
        fontFamily: { sans: tokens['eds-font-heading-family'] },
        fontSize: extractByFilter(
          tokens,
          (k) => k.startsWith('eds-font') && k.includes('-size-'),
          'eds-font'
        ),
        lineHeight: extractByFilter(
          tokens,
          (k) => k.startsWith('eds-font') && k.includes('-line-height-'),
          'eds-font'
        ),
        fontWeight: extractByFilter(
          tokens,
          (k) => k.startsWith('eds-font') && k.includes('-weight-'),
          'eds-font'
        ),
        boxShadow: { focus: tokens['eds-semantic-focus'] }
      }
    }
  }

  writeFileSync('dist/tailwind.config.js', `module.exports = ${JSON.stringify(config, null, 2)};\n`)
}
