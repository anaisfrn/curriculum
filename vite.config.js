import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages :
//  - repo "username.github.io"  -> base: '/'
//  - repo projet (ex. "curriculum") -> base: '/curriculum/'
export default defineConfig({
  base: process.env.VITE_BASE ?? '/curriculum/',
  plugins: [vue(), tailwindcss()],
})
