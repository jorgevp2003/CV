import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { IconType } from "react-icons";
import { FaGithub, FaRegImage } from "react-icons/fa";
import {
  GoArrowLeft,
  GoArrowUpRight,
  GoBrowser,
  GoChecklist,
  GoGear,
  GoPackage,
  GoRocket,
  GoZap
} from "react-icons/go";
import {
  SiDocker,
  SiGsap,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPnpm,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript
} from "react-icons/si";
import ContactNavItem from "../contact/ContactNavItem";
import "./Main.css";
import "./Proyecto1.css";

/*
  ── TUS IMÁGENES ─────────────────────────────────────────────
  Guarda las capturas en src/assets e impórtalas aquí, por ejemplo:

    import vectefHome from "../../assets/vectef-home.png";
    import vectefProductos from "../../assets/vectef-productos.png";
    import vectefDetalle from "../../assets/vectef-detalle.png";
    import vectefAntesDespues from "../../assets/vectef-antes-despues.png";
    import vectefPresupuesto from "../../assets/vectef-presupuesto.png";

  Después rellena `capturaHero.src` y el campo `src` de cada galería.
  Mientras estén vacíos se ve el hueco con el texto de `label`.
*/

const capturaHero = { src: "", alt: "Página de inicio de VECTEF" };

const capturasGaleria = [
  {
    label: "Captura: catálogo de productos",
    caption: "Catálogo con las líneas de aluminio y PVC.",
    src: ""
  },
  {
    label: "Captura: ficha de producto",
    caption: "Ficha de producto generada con rutas dinámicas [slug].",
    src: ""
  },
  {
    label: "Captura: antes y después",
    caption: "Galería de proyectos con comparativa antes / después.",
    src: ""
  },
  {
    label: "Captura: presupuesto",
    caption: "Formulario de solicitud de presupuesto online.",
    src: ""
  }
];

/* Enlaces del hero: déjalos vacíos y el botón no se muestra */
const enlaces = {
  demo: "",
  github: ""
};

type Chip = { Icon: IconType; label: string; tone: string };

const chips: Chip[] = [
  { Icon: SiNextdotjs, label: "Next.js", tone: "next" },
  { Icon: SiReact, label: "React 19", tone: "react" },
  { Icon: SiTypescript, label: "TypeScript", tone: "ts" },
  { Icon: SiTailwindcss, label: "Tailwind CSS v4", tone: "tailwind" },
  { Icon: SiGsap, label: "GSAP", tone: "gsap" },
  { Icon: SiThreedotjs, label: "Three.js", tone: "three" },
  { Icon: SiLaravel, label: "Laravel 13", tone: "laravel" },
  { Icon: SiPhp, label: "PHP 8.3", tone: "php" },
  { Icon: GoZap, label: "WebSockets · Reverb", tone: "reverb" },
  { Icon: SiNodedotjs, label: "Node.js", tone: "node" },
  { Icon: SiSqlite, label: "SQLite", tone: "sqlite" },
  { Icon: SiDocker, label: "Docker Compose", tone: "docker" },
  { Icon: SiPnpm, label: "pnpm", tone: "pnpm" }
];

const datos: { termino: string; valor: string }[] = [
  { termino: "Cliente", valor: "VECTEF · ventanas y cerramientos" },
  { termino: "Sector", valor: "Carpintería de PVC y aluminio" },
  { termino: "Ámbito", valor: "Madrid y Castilla-La Mancha" },
  { termino: "Mi rol", valor: "Desarrollo full-stack" },
  { termino: "Año", valor: "2026" }
];

type StackCard = { Icon: IconType; role: string; title: string; text: string };

const stack: StackCard[] = [
  {
    Icon: SiReact,
    role: "Frontend",
    title: "Next.js 16 · React 19",
    text: "App Router con rutas dinámicas [slug] y metadatos por página, estilos con Tailwind CSS v4, animaciones con GSAP y Motion, gráficos WebGL con Three.js y OGL, y UI con Radix UI y lucide-react."
  },
  {
    Icon: SiLaravel,
    role: "Backend",
    title: "Laravel 13 · PHP 8.3",
    text: "API y lógica de negocio en Laravel con base de datos SQLite y broadcasting en tiempo real mediante Laravel Reverb, consumido desde el cliente con Laravel Echo y Pusher JS."
  },
  {
    Icon: SiDocker,
    role: "Infraestructura",
    title: "Docker + WebSockets",
    text: "Tres servicios orquestados con Docker Compose (backend, Reverb y WebSocket), con un servidor de WebSockets propio en Node.js y TypeScript usando la librería ws. Paquetes gestionados con pnpm."
  }
];

type Feature = { Icon: IconType; title: string; text: string };

const funcionalidades: Feature[] = [
  {
    Icon: GoPackage,
    title: "Catálogo por material",
    text: "Secciones de aluminio y PVC con fichas de producto dinámicas mediante rutas [slug]."
  },
  {
    Icon: GoBrowser,
    title: "Proyectos con detalle",
    text: "Listado de proyectos con página individual y galería comparativa de antes y después."
  },
  {
    Icon: GoChecklist,
    title: "Presupuesto online",
    text: "Formulario de solicitud de presupuesto y mapa de zonas de instalación cubiertas."
  },
  {
    Icon: GoZap,
    title: "Tiempo real",
    text: "Eventos en vivo con Laravel Reverb + Echo/Pusher y un microservicio WebSocket propio."
  },
  {
    Icon: GoRocket,
    title: "SEO y rendimiento",
    text: "Metadatos por página y renderizado en servidor, con animaciones que no penalizan la carga."
  },
  {
    Icon: GoGear,
    title: "Legal y cookies",
    text: "Aviso legal, política de privacidad, política de cookies y FAQ integradas en el sitio."
  }
];

type ImageSlotProps = {
  src?: string;
  alt: string;
  label: string;
  caption?: string;
  ratio?: string;
};

function ImageSlot({ src, alt, label, caption, ratio = "16 / 9" }: ImageSlotProps) {
  return (
    <figure className="image-slot">
      <div className="image-slot-frame" style={{ aspectRatio: ratio }}>
        {src ? (
          <img src={src} alt={alt} loading="lazy" />
        ) : (
          <div className="image-slot-placeholder">
            <FaRegImage aria-hidden="true" />
            <span>{label}</span>
          </div>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function Proyecto1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <nav className="site-nav" aria-label="Navegación principal">
        <div className="site-nav-item">
          <Link to="/">Sobre mí</Link>
          <div className="nav-options">
            <a href="#company">Company</a>
            <a href="#careers">Careers</a>
          </div>
        </div>
        <div className="site-nav-item">
          <Link to="/proyectos" aria-current="page">
            Proyectos
          </Link>
        </div>
        <ContactNavItem />
      </nav>

      <div className="project-container">
        {/* ---------- Hero ---------- */}
        <header className="project-hero">
          <p className="project-kicker">Proyecto destacado · Web corporativa</p>
          <h1 className="project-title">VECTEF</h1>
          <p className="project-intro">
            Web corporativa para VECTEF, empresa de ventanas y cerramientos de PVC y
            aluminio en Madrid y Castilla-La Mancha: catálogo de productos, proyectos con
            antes y después, solicitud de presupuesto y páginas legales, con contenido
            dinámico, SEO por página y animaciones.
          </p>

          <ul className="tech-chips" aria-label="Tecnologías utilizadas">
            {chips.map(({ Icon, label, tone }) => (
              <li key={label} className={`tech-chip tech-chip--${tone}`}>
                <Icon aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          {(enlaces.demo || enlaces.github) && (
            <div className="hero-ctas">
              {enlaces.demo && (
                <a
                  className="btn btn-primary"
                  href={enlaces.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto en vivo
                  <GoArrowUpRight aria-hidden="true" />
                </a>
              )}
              {enlaces.github && (
                <a
                  className="btn btn-ghost"
                  href={enlaces.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub aria-hidden="true" />
                  Ver código
                </a>
              )}
            </div>
          )}

          <div className="hero-image">
            <ImageSlot
              src={capturaHero.src}
              alt={capturaHero.alt}
              label="Captura: página de inicio de VECTEF"
              caption="Vista general de la web de VECTEF."
            />
          </div>
        </header>

        {/* ---------- Sobre el proyecto ---------- */}
        <section className="project-section" aria-labelledby="sobre-proyecto">
          <p className="section-kicker">Contexto</p>
          <h2 className="section-title" id="sobre-proyecto">
            Sobre el proyecto
          </h2>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                VECTEF necesitaba una presencia web completa para su negocio de ventanas y
                cerramientos: una web corporativa multi-sección que enseñase sus líneas de
                aluminio y PVC, mostrase proyectos reales de instalación y permitiese
                captar clientes mediante un formulario de presupuesto.
              </p>
              <p>
                El sitio se construyó como una aplicación Next.js con el App Router: cada
                producto y cada proyecto tiene su página generada de forma dinámica a
                partir de rutas [slug], con metadatos propios para SEO, y secciones
                específicas como zonas de instalación, preguntas frecuentes y todas las
                páginas legales y de cookies.
              </p>
              <p>
                En el lado del servidor, Laravel actúa como backend, y la comunicación en
                tiempo real se resuelve con Laravel Reverb integrado mediante Laravel Echo
                y Pusher JS, reforzada por un microservicio de WebSockets propio
                desarrollado en Node.js y TypeScript.
              </p>
            </div>

            <dl className="facts-card">
              {datos.map(({ termino, valor }) => (
                <div className="fact" key={termino}>
                  <dt>{termino}</dt>
                  <dd>{valor}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- Reto y solución ---------- */}
        <section className="project-section" aria-labelledby="reto-solucion">
          <p className="section-kicker">El proceso</p>
          <h2 className="section-title" id="reto-solucion">
            Reto y solución
          </h2>

          <div className="duo-grid">
            <article className="duo-card">
              <h3>El reto</h3>
              <p>
                Reunir muchas secciones distintas (catálogo, proyectos, presupuesto, FAQ,
                legal…) en una sola web que cargase rápido, posicionase bien en buscadores
                y mantuviese una identidad visual cuidada, sin duplicar páginas a mano por
                cada producto o proyecto.
              </p>
            </article>
            <article className="duo-card duo-card--solution">
              <h3>La solución</h3>
              <p>
                Una app Next.js con App Router y rutas dinámicas por slug, estilos con
                Tailwind v4, animaciones con GSAP y Motion y visuales WebGL con Three.js y
                OGL. Laravel sirve de backend con Reverb para el tiempo real, y todo el
                conjunto (backend, Reverb y WebSocket) se orquesta con Docker Compose.
              </p>
            </article>
          </div>
        </section>

        {/* ---------- Tecnologías ---------- */}
        <section className="project-section" aria-labelledby="tecnologias">
          <p className="section-kicker">Stack técnico</p>
          <h2 className="section-title" id="tecnologias">
            Tecnologías
          </h2>

          <div className="stack-grid">
            {stack.map(({ Icon, role, title, text }) => (
              <article className="stack-card" key={title}>
                <div className="stack-icon">
                  <Icon aria-hidden="true" />
                </div>
                <p className="stack-role">{role}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Funcionalidades ---------- */}
        <section className="project-section" aria-labelledby="funcionalidades">
          <p className="section-kicker">Qué incluye</p>
          <h2 className="section-title" id="funcionalidades">
            Funcionalidades
          </h2>

          <div className="features-grid">
            {funcionalidades.map(({ Icon, title, text }) => (
              <article className="feature" key={title}>
                <div className="feature-icon">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Galería ---------- */}
        <section className="project-section" aria-labelledby="galeria">
          <p className="section-kicker">Capturas</p>
          <h2 className="section-title" id="galeria">
            Galería
          </h2>

          <div className="gallery-grid">
            {capturasGaleria.map((captura) => (
              <ImageSlot
                key={captura.label}
                src={captura.src}
                alt={captura.caption}
                label={captura.label}
                caption={captura.caption}
                ratio="4 / 3"
              />
            ))}
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="project-footer">
          <Link className="footer-back" to="/proyectos">
            <GoArrowLeft aria-hidden="true" />
            Volver a Proyectos
          </Link>
          <p className="footer-meta">VECTEF · Web corporativa · Next.js + Laravel</p>
        </footer>
      </div>
    </main>
  );
}
