// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if using React
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react?.()], // remove if not using React
  css: {
    postcss: {
      plugins: [
        tailwindcss(),      // ← ESM import
        autoprefixer(),     // ← ESM import
      ],
    },
  },
})