import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/https://peuransiseu.github.io/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})