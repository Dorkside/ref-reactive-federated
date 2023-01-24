import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    vue(),
    federation({
      name: "cc-mfe-test-vue",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./FederatedModule": "./src/components/FederatedModule.vue",
      },
      shared: ["vue"],
    }),
  ],
  base: "http://localhost:4173",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
