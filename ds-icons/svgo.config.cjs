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
    {
      name: 'convertColors', // convert color, stroke and fill to currentColor https://svgo.dev/docs/plugins/convert-colors/
      params: {
        currentColor: true,
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['svg:width','svg:height'], // Strip width and height attributes, so they can be injected in extract/template.cjs
        preserveCurrentColor: true
      }
    }
  ],
};
