import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // target: './dist/index.js',
    rollupOptions: {
      input: './src/index.tsx',
      output: {
        entryFileNames: "bundle.js",
      }
    }
  }
})
