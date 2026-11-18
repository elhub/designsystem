const colorProps = ['color', 'fill', 'stroke', 'stop-color', 'flood-color', 'lighting-color']

// Like svgo's convertColors with currentColor: true, but leaves <mask> contents untouched.
// Masks use luminance, so turning their white fill into currentColor hides the masked shape.
const convertColorsOutsideMasks = {
  name: 'convertColorsOutsideMasks',
  fn: () => {
    let maskDepth = 0
    return {
      element: {
        enter: (node) => {
          if (node.name === 'mask') maskDepth++
          if (maskDepth > 0) return
          for (const name of colorProps) {
            const value = node.attributes[name]
            if (value != null && value !== 'none') node.attributes[name] = 'currentColor'
          }
        },
        exit: (node) => {
          if (node.name === 'mask') maskDepth--
        },
      },
    }
  },
}

module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
    'prefixIds', // https://svgo.dev/docs/plugins/prefix-ids/
    convertColorsOutsideMasks, // convert color, stroke and fill to currentColor, except inside masks
    {
      name: 'removeAttrs',
      params: {
        attrs: ['svg:width','svg:height'], // Strip width and height attributes, so they can be injected in extract/template.cjs
        preserveCurrentColor: true
      }
    }
  ],
};
