import vue from '@vitejs/plugin-vue';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';

const cache = new Map();

export default defineConfig({
  plugins: [
    vue(),
    Unfonts({
      google: {
        families: ['Saira Extra Condensed', 'Mali'],
      },
    }),
  ],
  root: './',
  server: {
    host: true,
    port: 8080,
    strictPort: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'vendor-vue', test: /node_modules\/(vue|@vue)/ },
            {
              name: 'vendor-bootstrap',
              test: /(bootstrap|@popperjs)/,
            },
            {
              name: 'vendor-fontawesome-core',
              test: /@fortawesome\/fontawesome-svg-core/,
            },
            {
              name: 'vendor-fa-solid',
              test: /@fortawesome\/free-solid-svg-icons/,
            },
            {
              name: 'vendor-fa-regular',
              test: /@fortawesome\/free-regular-svg-icons/,
            },
            {
              name: 'vendor-fa-brands',
              test: /@fortawesome\/free-brands-svg-icons/,
            },
            { name: 'vendor-floating-vue', test: /floating-vue/ },
            {
              name: 'vendor-video-bg',
              test: /vue-responsive-video-background-player/,
            },
            {
              name: 'vendor-window-size',
              test: /vue-window-size/,
            },
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
  },
  publicDir: 'public',
});
