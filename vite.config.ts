import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePluginFonts } from 'vite-plugin-fonts';

const cache = new Map();

const normalize = (id: string): string => {
  if (cache.has(id)) {
    return cache.get(id);
  }

  const parts = id.split('/node_modules/');
  const dirPaths = parts[parts.length - 1].split('/');

  let n = `vender~${dirPaths[0]}`;

  if (dirPaths[0][0] == '@') {
    n = `vender~${dirPaths[0]}~${dirPaths[1]}}`;
  }

  cache.set(id, n);

  return n;
};

export default defineConfig({
  plugins: [
    vue(),
    VitePluginFonts({
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
