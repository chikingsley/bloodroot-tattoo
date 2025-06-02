import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize build output
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['gsap']
        }
      }
    },
    // Increase chunk size warning limit for media-heavy site
    chunkSizeWarningLimit: 1000,
  },
  // Optimize assets
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp', '**/*.mp4'],
  // Development server configuration
  server: {
    open: true,
    port: 3000,
  },
  // Preview server configuration  
  preview: {
    port: 3001,
  }
})
