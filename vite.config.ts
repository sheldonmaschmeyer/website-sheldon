import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    vue(),
    VitePluginFonts({
      google: {
        families: [
          'Saira Extra Condensed',
          'Mali'
        ]
      }
    })
    ],
  root: "./",
  server: {
    host: true,
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
  },
  publicDir: "public",
});
