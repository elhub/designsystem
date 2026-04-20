/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '/',
  plugins: [react(), viteTsconfigPaths(), dts({ rollupTypes: true })],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3333
    port: 3333
  },
  // include markdown files in the assets
  assetsInclude: ['**/*.md'],
  build: {
    lib: {
      // this is the entry point for the library
      entry: resolve(__dirname, 'src/dist.ts'),
      name: 'ds-components'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: ['react', 'react-dom', 'styled-components', 'react/jsx-runtime', 'react-modal', 'react-collapse'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJsxRuntime',
          'styled-components': 'styled'
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts'
  }
})
