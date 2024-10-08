import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/weeding-friends/" : "/",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/variables.scss";
        `,
      },
    },
  },
});
