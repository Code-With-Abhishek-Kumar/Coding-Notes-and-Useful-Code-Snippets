import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    // Set Server Proxy
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      '/api': 'http://localhost:3000',
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
     
    }
  }
  plugins: [react()],
})
