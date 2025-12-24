import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
    open: 'chrome' // yahan Chrome me open hoga
  },
  base: './',
  publicDir: 'public',
})
