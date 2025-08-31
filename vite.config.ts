import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/peuransiseu.github.io/', 
  build: {
    sourcemap: true,
    outDir: 'dist',
  },
})
