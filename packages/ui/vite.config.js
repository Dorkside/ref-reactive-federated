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
      name: "mfe-ui",
      remotes: {
        "mfe-test-vue": "http://127.0.0.1:4173/assets/remoteEntry.js",
      },
      shared: {
        vue: {
          version: "^3.2.45",
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
