import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    '/socket.io': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      ws: true,
    },
  },
})
