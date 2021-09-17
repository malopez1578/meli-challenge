import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import viteTestPlugin from 'vite-plugin-test'


export default defineConfig({
  plugins: [
    reactRefresh(),
    viteTestPlugin({
      dir: 'src', 
      loaders: {
        '.spec.js': 'jsx'
      } 
    })
  ], 
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})