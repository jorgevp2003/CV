# CV — Jorge Vázquez

Portfolio personal y currículum web: una página única con navegación por secciones (inicio, proyectos y contacto), animaciones y diseño oscuro, desplegada gratuitamente en GitHub Pages.

**Ver online:** https://jorgevp2003.github.io/CV-JorgeVazquez.github.io/

## Tecnologías

| Área | Tecnología |
|---|---|
| Lenguaje | TypeScript |
| UI | React 19 |
| Build | Vite 8 |
| Enrutado | React Router 7 (HashRouter) |
| Animaciones | GSAP · Motion |
| Iconos | react-icons · lucide-react |
| Estilos | CSS moderno (custom properties, flexbox/grid) |
| Despliegue | GitHub Actions → GitHub Pages |

## Desarrollo

```bash
pnpm install
pnpm dev        # servidor de desarrollo en http://localhost:3000
pnpm build      # build de producción en dist/ (base /CV-JorgeVazquez.github.io/)
pnpm preview    # previsualizar el build
```

## Despliegue

Cada push a `main` ejecuta el workflow `.github/workflows/deploy.yml`, que construye el proyecto y publica `dist/` en GitHub Pages automáticamente.
