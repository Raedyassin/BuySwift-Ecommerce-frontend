import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    proxy: {
      '/api/': 'https://cloud-dream-ecommerce-backend-production.up.railway.app/',
      "/uploads/": "https://cloud-dream-ecommerce-backend-production.up.railway.app/", 
      changeOrigin: true,
      secure: true,
    },
  }

})
