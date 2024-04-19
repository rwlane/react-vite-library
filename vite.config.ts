import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
//import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'
//const { EsLinter, linterPlugin } = EsLint
import * as packageJson from './package.json'

Object.keys(packageJson).forEach(key => console.log("***** key: "+key));
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    // linterPlugin({
    //   include: ['./src}/**/*.{ts,tsx}'],
    //   linters: [new EsLinter({ configEnv })],
    // }),
    dts({
      include: ['src/component/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('lib', 'index.ts'),
      name: 'ReactViteLibrary',
      formats: ['es'],
      fileName: (format) => `react-vite-library.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))