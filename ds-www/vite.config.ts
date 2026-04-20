import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'node:path'

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '/',
  plugins: [react(), viteTsconfigPaths(), svgr()],
  assetsInclude: ['**/*.md'],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 4444
    port: 4444
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  resolve: {
    mainFields: ['module', "browser", 'main'], // for react-element-to-jsx-string compatibility
    alias: {
      '@elhub/ds-components': resolve(__dirname, '../ds-components/src/dist.ts'),
      '@elhub/ds-css': resolve(__dirname, '../ds-css/src/index.css'),
      '@elhub/ds-graph': resolve(__dirname, '../ds-graph/src/index.ts'),
      '@elhub/ds-icons': resolve(__dirname, '../ds-icons/src/dist.ts')
    }
  }
})
