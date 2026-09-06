import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  // GitHub Pages sirve el sitio en un subdirectorio: /CV-JorgeVazquez.github.io/
  base: command === "build" ? "/CV-JorgeVazquez.github.io/" : "/"
}));
