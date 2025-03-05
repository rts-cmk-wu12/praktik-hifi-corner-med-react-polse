import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteAliases } from "vite-aliases";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    react(),
    ViteAliases(),
    Pages({
      dirs: "src/pages",
      extensions: ["js", "jsx"],
    }),
  ],
});
