import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  // GitHub Pages sirve el sitio en un subdirectorio: /CV-Personal/
  base: command === "build" ? "/CV-Personal/" : "/"
}));
