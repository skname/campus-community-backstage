import { defineConfig, loadEnv } from "vite";
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
  mode: "development",
  server: {
    port: 3030,
    proxy: {
      "/api": {
        target: "",
      },
    },
  },

  base: "/",
  resolve: {
    alias: {
      "@view": "/src/view",
      "@component": "/src/component",
    },
  },
});
