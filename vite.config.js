import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import flowbite from 'flowbite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // flowbite.plugin(),
  ],
  // this is only work on development not on production
  server: {
    proxy: {
      '/api/': 'http://localhost:5222',
      "/uploads/": "http://localhost:5222", 
    },
  }
})
