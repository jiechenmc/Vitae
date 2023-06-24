import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [svgr(), react()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});
