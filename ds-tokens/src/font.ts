const BaseSize = 16
const GetSize = (size: number): string => `${size / BaseSize}rem`

// line-heights are set relative to the font-size, and are typically in the 130-150% range
const sizeToLineHeight = {
  10: GetSize(14),
  12: GetSize(16),
  14: GetSize(20),
  16: GetSize(24),
  18: GetSize(24),
  20: GetSize(28),
  22: GetSize(28),
  24: GetSize(32),
  28: GetSize(36),
  30: GetSize(38),
  36: GetSize(44)
}
const eds = {
  font: {
    heading: {
      family: {
        value: 'roboto, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      },
      line: {
        height: {
          xlarge: { value: sizeToLineHeight[36] },
          large: { value: sizeToLineHeight[30] },
          medium: { value: sizeToLineHeight[24] },
          small: { value: sizeToLineHeight[20] },
          xsmall: { value: sizeToLineHeight[18] },
          'xlarge-mobile': { value: sizeToLineHeight[24] },
          'large-mobile': { value: sizeToLineHeight[20] },
          'medium-mobile': { value: sizeToLineHeight[18] },
          'small-mobile': { value: sizeToLineHeight[16] },
          'xsmall-mobile': { value: sizeToLineHeight[14] }
        }
      },
      size: {
        xlarge: { value: GetSize(30) },
        large: { value: GetSize(24) },
        medium: { value: GetSize(20) },
        small: { value: GetSize(18) },
        xsmall: { value: GetSize(14) },
        'xlarge-mobile': { value: GetSize(24) },
        'large-mobile': { value: GetSize(20) },
        'medium-mobile': { value: GetSize(18) },
        'small-mobile': { value: GetSize(16) },
        'xsmall-mobile': { value: GetSize(14) }
      },
      weight: {
        bold: { value: '700' }
      }
    },
    body: {
      family: {
        value: 'roboto, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      },
      line: {
        height: {
          large: { value: sizeToLineHeight[18] },
          medium: { value: sizeToLineHeight[16] },
          small: { value: sizeToLineHeight[14] },
          'large-mobile': { value: sizeToLineHeight[16] },
          'medium-mobile': { value: sizeToLineHeight[14] },
          'small-mobile': { value: sizeToLineHeight[12] }
        }
      },
      size: {
        large: { value: GetSize(18) },
        medium: { value: GetSize(16) },
        small: { value: GetSize(14) },
        'large-mobile': { value: GetSize(16) },
        'medium-mobile': { value: GetSize(14) },
        'small-mobile': { value: GetSize(12) }
      },
      weight: {
        bold: { value: '700' },
        semibold: { value: '500' },
        regular: { value: '400' }
      }
    }
  }
}

export { eds }
