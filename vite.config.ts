import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
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
