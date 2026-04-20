const eds = {
  semantic: {
    background: {
      page: { value: '{eds.global.color.beige.300.value}' },
      '@': { value: '{eds.global.color.grey.0.value}' },
      inverted: { value: '{eds.global.color.grey.900.value}' },
      alternative: { value: '{eds.global.color.beige.400.value}' },
      disabled: { value: '{eds.global.color.beige.400-50%.value}' },
      overlay: { value: '{eds.global.color.grey.600-60%.value}' },
      success: { value: '{eds.global.color.green.150.value}' },
      information: { value: '{eds.global.color.blue.400.value}' },
      comparison: {
        '@': { value: '{eds.global.color.orange.300.value}' },
        overlay: { value: '{eds.global.color.orange.300-60%.value}' }
      },
      error: {
        '@': { value: '{eds.global.color.red.400.value}' },
        alternative: { value: '{eds.global.color.red.500.value}' }
      },
      warning: {
        '@': { value: '{eds.global.color.yellow.400.value}' },
        alternative: { value: '{eds.global.color.yellow.500.value}' }
      },
      action: {
        primary: {
          '@': { value: '{eds.global.color.green.600.value}' },
          hover: { value: '{eds.global.color.green.500.value}' },
          active: { value: '{eds.global.color.green.700.value}' },
          disabled: { value: '{eds.global.color.grey.300.value}' }
        },
        secondary: {
          '@': { value: '{eds.global.color.green.350.value}' },
          hover: { value: '{eds.global.color.green.300.value}' },
          active: { value: '{eds.global.color.green.200.value}' },
          disabled: { value: '{eds.global.color.grey.300.value}' },
          selected: { value: '{eds.global.color.green.500.value}' }
        },
        danger: {
          '@': { value: '{eds.global.color.red.500.value}' },
          hover: { value: '{eds.global.color.red.600.value}' },
          active: { value: '{eds.global.color.red.500.value}' },
          disabled: { value: '{eds.global.color.red.500-50%.value}' }
        }
      }
    },
    border: {
      '@': { value: '{eds.global.color.grey.600.value}' },
      alternative: { value: '{eds.global.color.green.500.value}' },
      hover: { value: '{eds.global.color.green.400.value}' },
      active: { value: '{eds.global.color.green.450.value}' },
      selected: { value: '{eds.global.color.green.500.value}' },
      disabled: { value: '{eds.global.color.grey.500.value}' },
      error: { value: '{eds.global.color.red.500.value}' },
      success: { value: '{eds.global.color.green.550.value}' },
      warning: { value: '{eds.global.color.yellow.500.value}' },
      information: { value: '{eds.global.color.blue.600.value}' },
      action: {
        focus: { value: '{eds.global.color.blue.550.value}' }
      }
    },
    text: {
      '@': { value: '{eds.global.color.grey.900.value}' },
      inverted: { value: '{eds.global.color.grey.0.value}' },
      subtle: { value: '{eds.global.color.grey.700.value}' },
      disabled: { value: '{eds.global.color.grey.600.value}' },
      error: { value: '{eds.global.color.red.600.value}' },
      success: { value: '{eds.global.color.green.600.value}' },
      warning: { value: '{eds.global.color.brown.600.value}' },
      information: { value: '{eds.global.color.blue.600.value}' },
      action: {
        '@': { value: '{eds.global.color.green.700.value}' },
        'visited-link': { value: '{eds.global.color.grey.900.value}' },
        selected: { value: '{eds.global.color.green.500.value}' },
        hover: { value: '{eds.global.color.green.450.value}' }
      }
    },
    alternative: {
      background: { value: '{eds.global.color.green.700.value}' },
      icons: {
        approved: { value: '{eds.global.color.green.450.value}' },
        failed: { value: '{eds.global.color.red.500.value}' },
        stopped: { value: '{eds.global.color.orange.700.value}' },
        ongoing: { value: '{eds.global.color.blue.600.value}' },
        'temporarily-stopped': { value: '{eds.global.color.grey.900.value}' },
        'approved-with-warning': { value: '{eds.global.color.yellow.600.value}' }
      }
    },
    focus: { value: `0 0 0 3px {eds.global.color.blue.550.value}` }
  }
}

export { eds }
