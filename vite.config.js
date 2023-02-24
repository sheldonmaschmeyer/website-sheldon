import { defineConfig } from 'vite'
import path from 'path'
import autoprefixer from 'autoprefixer';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: './',
  server: {
    port: 8080, // <-- Set your own server port here
    css: {
      postcss: {
        plugins: [
            autoprefixer
        ],
      }
    },
  },
  build: {
    outDir: 'dist',
},
  publicDir: 'public'
})