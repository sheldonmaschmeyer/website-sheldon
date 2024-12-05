import vue from '@vitejs/plugin-vue';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';

const cache = new Map();

const normalize = (id: string): string => {
  if (cache.has(id)) {
    return cache.get(id);
  }

  const parts = id.split('/node_modules/');
  const dirPaths = parts[parts.length - 1].split('/');

  let n = `vender~${dirPaths[0]}`;

  if (dirPaths[0].startsWith('@')) {
    n = `vender~${dirPaths[0]}~${dirPaths[1]}}`;
  }

  cache.set(id, n);

  return n;
};

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
        api: 'modern-compiler',
        quietDeps: true,
      },
    },
  },
  build: {
    minify: 'esbuild',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return normalize(id);
          }
        },
      },
    },
  },
  publicDir: 'public',
});
