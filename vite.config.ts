import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  // GitHub Pages sirve el sitio en un subdirectorio: /CV/
  base: command === "build" ? "/CV/" : "/"
}));
