module.exports = {
  source: [
    "src/size.ts",
    "src/zindex.json",
    "src/border.json",
    "src/displays.json",
    "src/font.ts",
    "src/global.ts",
    "src/semantic.ts",
  ],
  platforms: {
    json: {
      transformGroup: "web",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.json",
          format: "json/flat",
        }
      ]
    },
    scss: {
      transformGroup: "scss",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.scss",
          format: "scss/variables",
        }
      ]
    },
    less: {
      transformGroup: "less",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.less",
          format: "less/variables",
        }
      ]
    },
    css: {
      transformGroup: "css",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          }
        }
      ]
    },
    js: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
        {
          destination: "tokens-cjs.js",
          format: "javascript/module-flat",
        }
      ]
    }
  }
}
