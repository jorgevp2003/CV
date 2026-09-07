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

## ¿Por qué estas tecnologías?

### Esta web

- **React 19** — Toda la interfaz se compone de componentes reutilizables con estado propio: el nav, las tarjetas de proyecto, el desplegable y modal de contacto, el efecto de escritura del nombre. Elegir React es elegir el ecosistema más amplio y lo que más se pide en el mercado.
- **TypeScript** — Los datos (proyectos, experiencia, estudios) tienen forma fija; los tipos hacen que el compilador avise de errores antes de desplegar y que el editor autocomplete. Al ampliar un componente (p. ej. añadir `detailPath` a las tarjetas) TypeScript señala todos los sitios que hay que tocar.
- **Vite 8** — Servidor de desarrollo con recarga instantánea (HMR) y build de producción optimizado con una configuración mínima, frente a alternativas mucho más verbosas como Webpack.
- **React Router 7 (HashRouter)** — Enrutado en cliente para las páginas de detalle. En su variante *hash* porque GitHub Pages es alojamiento estático y no puede reescribir rutas hacia `index.html`: una URL profunda como `/proyecto1` daría 404 al abrirla directamente, mientras que `#/proyecto1` funciona sin ninguna configuración de servidor.
- **GSAP** — Anima el nombre del hero con una línea de tiempo controlable y respeta `prefers-reduced-motion`. Se complementa con **Motion** para animaciones declarativas dentro de React.
- **react-icons y lucide-react** — Iconos SVG (marca de tecnologías, GitHub, flechas) importados como componentes de React: sin fuentes de iconos ni peticiones extra.
- **CSS moderno, sin framework** — Custom properties como tokens de tema (`--ink`, `--brand`, `--panel`, `--line`…), grid y flexbox para las retículas y `clamp()` para tipografía fluida. Para una web de este tamaño, CSS a medida pesa menos que un framework de utilidades y da control total.
- **GitHub Actions → GitHub Pages** — Alojamiento y CI/CD gratuitos: cada push a `main` construye y publica automáticamente.

### Proyecto destacado — VECTEF

La página de detalle (`/proyecto1`) presenta una web corporativa full-stack. El porqué de cada pieza de su stack:

**Frontend**

- **Next.js** — Renderizado en servidor: cada URL devuelve HTML real con sus propios metadatos, así que cada producto y proyecto se indexa en Google por separado (SEO). Con rutas dinámicas `[slug]` no hay que crear una página por producto: una sola plantilla las genera todas desde los datos.
- **React 19 + TypeScript** — El mismo modelo de componentes y seguridad de tipos que el resto del portfolio, ahora en un dominio con muchas entidades (productos, líneas de material, proyectos, presupuestos).
- **Tailwind CSS v4** — Con tantas secciones distintas, las utilidades evitan una hoja de CSS enorme con nombres inventados y garantizan consistencia visual (escala cerrada de espaciados y colores).
- **GSAP + Motion** — Animaciones con control fino (timelines, scroll) que solo animan propiedades baratas de renderizar (`transform`, `opacity`), por lo que no penalizan la carga.
- **Three.js + OGL** — Visuales 3D/WebGL: en una web de ventanas y cerramientos permite enseñar el producto con profundidad. OGL cubre los efectos ligeros donde cargar Three.js entero no compensa.
- **Radix UI + lucide-react** — Primitivas de interfaz (diálogos, menús) con accesibilidad completa de serie, e iconos consistentes.

**Backend**

- **Laravel 13 + PHP 8.3** — API y lógica de negocio "con baterías incluidas": ORM (Eloquent), validación, rutas y broadcasting de eventos. Ideal para montar catálogo, presupuesto y páginas legales sin construir la infraestructura desde cero.
- **SQLite** — Base de datos en un único archivo, sin servidor que instalar ni mantener: de sobra para una web corporativa (muchas lecturas de catálogo, pocas escrituras), y respaldarla es copiar un archivo.
- **Laravel Reverb + Echo + Pusher JS** — El tiempo real. HTTP obliga a preguntar cada pocos segundos (*polling*); un WebSocket es un canal persistente por el que el servidor empuja en el instante en que algo pasa. Reverb es el servidor de WebSockets oficial de Laravel (sin depender del servicio externo de pago), Echo es el cliente que se suscribe en el navegador y pusher-js habla el protocolo.
- **Node.js + ws** — Microservicio WebSocket propio, desacoplado del backend PHP: Node está diseñado para muchas conexiones concurrentes y al ser un servicio independiente puede escalarse o reiniciarse sin tocar Laravel.

**Infraestructura**

- **Docker Compose** — El proyecto son tres procesos que deben convivir (backend, Reverb y WebSocket de Node). Compose los define en un único YAML y los levanta juntos con un comando, con el mismo entorno en cualquier máquina.
- **pnpm** — Gestor de paquetes con almacén central: instala más rápido que npm y ahorra disco deduplicando dependencias entre proyectos.

## Desarrollo

```bash
pnpm install
pnpm dev        # servidor de desarrollo en http://localhost:3000
pnpm build      # build de producción en dist/ (base /CV-JorgeVazquez.github.io/)
pnpm preview    # previsualizar el build
```

## Despliegue

Cada push a `main` ejecuta el workflow `.github/workflows/deploy.yml`, que construye el proyecto y publica `dist/` en GitHub Pages automáticamente.
