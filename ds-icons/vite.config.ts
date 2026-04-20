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
  build: {
    lib: {
      // this is the entry point for the library
      entry: resolve(__dirname, 'src/dist.ts'),
      name: 'ds-icons'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          'react-dom': 'ReactDom',
          react: 'React',
          'react/jsx-runtime': 'ReactJsxRuntime'
        }
      }
    }
  }
})
