import { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactNavItem from "../contact/ContactNavItem";
import ProjectCard from "../projects/ProjectCard";
import type { ProjectCardProps } from "../projects/ProjectCard";
import "./Main.css";
import "./Proyectos.css";

/*
  Rellena aquí tus 3 proyectos reales.
  Para la imagen, guarda la captura en src/assets e impórtala:
    import miCaptura from "../../assets/mi-captura.png";
  y pásala en el campo `image`. Si lo dejas vacío se muestra el hueco.
*/
const proyectos: ProjectCardProps[] = [
  {
    title: "VECTEF",
    description:
      "Web corporativa para una empresa de ventanas y cerramientos de PVC y aluminio: catálogo de productos, proyectos, presupuesto online y tiempo real.",
    githubUrl: "https://github.com/jorgevp2003/vectef",
    detailPath: "/proyecto1",
    tech: ["Next.js", "React", "TypeScript", "Laravel", "Docker"]
  },
  {
    title: "Proyecto 2",
    description:
      "Explica aquí qué hace el proyecto, qué problema resuelve y qué tecnologías usaste.",
    githubUrl: "https://github.com/tu-usuario/proyecto-2",
    liveUrl: "https://proyecto-2.tu-dominio.com",
    tech: ["Node.js", "Express"]
  },
  {
    title: "Proyecto 3",
    description:
      "Explica aquí qué hace el proyecto, qué problema resuelve y qué tecnologías usaste.",
    githubUrl: "https://github.com/tu-usuario/proyecto-3",
    liveUrl: "https://proyecto-3.tu-dominio.com",
    tech: ["Python", "Flask"]
  }
];

export default function Proyectos() {
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

      <section id="proyectos" className="projects-section" aria-label="Proyectos de programación">
        <header className="projects-header">
          <p className="projects-kicker">Portfolio</p>
          <h1 className="projects-title">Proyectos</h1>
          <p className="projects-intro">
            Una selección de proyectos reales que he construido: el código está en GitHub y
            puedes probarlos en vivo.
          </p>
        </header>

        <div className="projects-grid">
          {proyectos.map((proyecto) => (
            <ProjectCard key={proyecto.title} {...proyecto} />
          ))}
        </div>
      </section>
    </main>
  );
}
