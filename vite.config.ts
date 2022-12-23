import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 3030,
    proxy: {
      "/api": {
        target: "http://192.168.1.4",
      },
    },
  },

  base: "/",
  resolve: {
    alias: {
      "@": "/src",
      "@/view": "/src/view",
      "@/component": "/src/component",
      "@/hooks": "/src/hooks",
      "@/request": "/src/request",
      "@/utils": "/src/utils",
      "@/api": "/src/api",
      "@/assets": "/src/assets",
      "@/store": "/src/store",
    },
  },
});
