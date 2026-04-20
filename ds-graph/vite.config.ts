import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '/',
  plugins: [react(), viteTsconfigPaths(), dts({ rollupTypes: true })],
  // include markdown files in the assets
  assetsInclude: ['**/*.md'],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 5555
    port: 5555
  },
  build: {
    lib: {
      // this is the entry point for the library
      entry: resolve(__dirname, 'src/dist.ts'),
      name: 'ds-graph'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: ['react', 'react-dom', 'styled-components', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJsxRuntime',
          'styled-components': 'styled'
        }
      }
    }
  }
})
