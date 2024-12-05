// vite.config.mts
import vue from "file:///home/node/app/.yarn/__virtual__/@vitejs-plugin-vue-virtual-a81d131ded/0/cache/@vitejs-plugin-vue-npm-5.2.1-25d60c16d1-927c06ccf5.zip/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Unfonts from "file:///home/node/app/.yarn/__virtual__/unplugin-fonts-virtual-10144ed845/0/cache/unplugin-fonts-npm-1.3.1-a9a065fad3-6be3c99618.zip/node_modules/unplugin-fonts/dist/vite.mjs";
import { defineConfig } from "file:///home/node/app/.yarn/__virtual__/vite-virtual-5ba3f156bc/0/cache/vite-npm-6.0.2-1676a36381-45fc609f2b.zip/node_modules/vite/dist/node/index.js";
var cache = /* @__PURE__ */ new Map();
var normalize = (id) => {
  if (cache.has(id)) {
    return cache.get(id);
  }
  const parts = id.split("/node_modules/");
  const dirPaths = parts[parts.length - 1].split("/");
  let n = `vender~${dirPaths[0]}`;
  if (dirPaths[0].startsWith("@")) {
    n = `vender~${dirPaths[0]}~${dirPaths[1]}}`;
  }
  cache.set(id, n);
  return n;
};
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Unfonts({
      google: {
        families: ["Saira Extra Condensed", "Mali"]
      }
    })
  ],
  root: "./",
  server: {
    host: true,
    port: 8080,
    strictPort: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        quietDeps: true
      }
    }
  },
  build: {
    minify: "esbuild",
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return normalize(id);
          }
        }
      }
    }
  },
  publicDir: "public"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbm9kZS9hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL25vZGUvYXBwL3ZpdGUuY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ub2RlL2FwcC92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgVW5mb250cyBmcm9tICd1bnBsdWdpbi1mb250cy92aXRlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuXG5jb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcblxuY29uc3Qgbm9ybWFsaXplID0gKGlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAoY2FjaGUuaGFzKGlkKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQoaWQpO1xuICB9XG5cbiAgY29uc3QgcGFydHMgPSBpZC5zcGxpdCgnL25vZGVfbW9kdWxlcy8nKTtcbiAgY29uc3QgZGlyUGF0aHMgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXS5zcGxpdCgnLycpO1xuXG4gIGxldCBuID0gYHZlbmRlcn4ke2RpclBhdGhzWzBdfWA7XG5cbiAgaWYgKGRpclBhdGhzWzBdLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgIG4gPSBgdmVuZGVyfiR7ZGlyUGF0aHNbMF19fiR7ZGlyUGF0aHNbMV19fWA7XG4gIH1cblxuICBjYWNoZS5zZXQoaWQsIG4pO1xuXG4gIHJldHVybiBuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIFVuZm9udHMoe1xuICAgICAgZ29vZ2xlOiB7XG4gICAgICAgIGZhbWlsaWVzOiBbJ1NhaXJhIEV4dHJhIENvbmRlbnNlZCcsICdNYWxpJ10sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICByb290OiAnLi8nLFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiB0cnVlLFxuICAgIHBvcnQ6IDgwODAsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgfSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhcGk6ICdtb2Rlcm4tY29tcGlsZXInLFxuICAgICAgICBxdWlldERlcHM6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUoaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcHVibGljRGlyOiAncHVibGljJyxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4TixPQUFPLFNBQVM7QUFDOU8sT0FBTyxhQUFhO0FBQ3BCLFNBQVMsb0JBQW9CO0FBRTdCLElBQU0sUUFBUSxvQkFBSSxJQUFJO0FBRXRCLElBQU0sWUFBWSxDQUFDLE9BQXVCO0FBQ3hDLE1BQUksTUFBTSxJQUFJLEVBQUUsR0FBRztBQUNqQixXQUFPLE1BQU0sSUFBSSxFQUFFO0FBQUEsRUFDckI7QUFFQSxRQUFNLFFBQVEsR0FBRyxNQUFNLGdCQUFnQjtBQUN2QyxRQUFNLFdBQVcsTUFBTSxNQUFNLFNBQVMsQ0FBQyxFQUFFLE1BQU0sR0FBRztBQUVsRCxNQUFJLElBQUksVUFBVSxTQUFTLENBQUMsQ0FBQztBQUU3QixNQUFJLFNBQVMsQ0FBQyxFQUFFLFdBQVcsR0FBRyxHQUFHO0FBQy9CLFFBQUksVUFBVSxTQUFTLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDO0FBQUEsRUFDMUM7QUFFQSxRQUFNLElBQUksSUFBSSxDQUFDO0FBRWYsU0FBTztBQUNUO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osUUFBUTtBQUFBLE1BQ04sUUFBUTtBQUFBLFFBQ04sVUFBVSxDQUFDLHlCQUF5QixNQUFNO0FBQUEsTUFDNUM7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osS0FBSztBQUFBLFFBQ0wsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLG1CQUFPLFVBQVUsRUFBRTtBQUFBLFVBQ3JCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUNiLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
