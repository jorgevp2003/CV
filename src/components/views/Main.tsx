import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactNavItem from "../contact/ContactNavItem";
import cvImage from "../../assets/cv-img.jpeg";
import "./Main.css";




const experiencia = [
  {
    cargo: "Desarrollo de software",
    empresa: "Capgemini",
    etiqueta: "Prácticas",
    detalle:
      "Prácticas en la empresa desarrollando con Java y Spring Boot, y con Node.js."
  },
  {
    cargo: "Soporte técnico y sistemas",
    empresa: "TSK · Polonia",
    etiqueta: "Erasmus+",
    detalle:
      "Configuración de servidores y atención a clientes en sus domicilios, resolviendo incidencias de fibra óptica."
  }
];

const estudios = [
  {
    titulo: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
    estado: "En curso",
    detalle: "Grado Superior de desarrollo de aplicaciones."
  },
  {
    titulo: "Sistemas Microinformáticos y Redes (SMR)",
    estado: "Finalizado",
    detalle:
      "Grado Medio de sistemas y redes, con Erasmus+ en Polonia (prácticas en TSK)."
  }
];

const tecnologias = ["Java", "Spring Boot", "Node.js", "Python", "SQL", "Oracle", "AWS", "HTML", "CSS", "TypeScript", "JavaScript"];

const FULL_NAME = "Jorge Vazquez";

export default function Main() {
  const [typedName, setTypedName] = useState("");
  const [cursorHidden, setCursorHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedName(FULL_NAME);
      setCursorHidden(true);
      return;
    }

    let index = 0;
    let intervalId: number | undefined;
    let hideCursorTimeout: number | undefined;
    const startDelay = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setTypedName(FULL_NAME.slice(0, index));
        if (index >= FULL_NAME.length) {
          window.clearInterval(intervalId);
          hideCursorTimeout = window.setTimeout(() => setCursorHidden(true), 1800);
        }
      }, 90);
    }, 400);

    return () => {
      window.clearTimeout(startDelay);
      if (intervalId !== undefined) window.clearInterval(intervalId);
      if (hideCursorTimeout !== undefined) window.clearTimeout(hideCursorTimeout);
    };
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
          <Link to="/proyectos">Proyectos</Link>
        </div>
        <ContactNavItem />
      </nav>
    
      <section id="sobre-mi" className="profile-slots" aria-label="Presentación">
        <div className="profile-slot profile-photo-slot">
          <img src={cvImage} alt="Foto de Jorge Vázquez" />
        </div>
        <div className="profile-slot profile-details">
          <div className="profile-name" aria-label={FULL_NAME}>
            <span className="profile-name-inner" aria-hidden="true">
              <span className="profile-name-ghost">{FULL_NAME}</span>
              <span className="profile-name-typed">
                {typedName}
                <span className={cursorHidden ? "name-cursor name-cursor-hidden" : "name-cursor"}></span>
              </span>
            </span>
          </div>
          <div className="profile-text-slot">
            <p className="profile-kicker">Portfolio personal</p>
            <p className="profile-intro">
              Soy desarrollador de aplicaciones y me apasiona este sector: cada proyecto es
              para mí una oportunidad de seguir formándome y de mejorar. Destaco en el
              trabajo en equipo y en el liderazgo; me gusta escuchar, coordinar y sacar lo
              mejor de cada grupo. Esta web es mi carta de presentación: aquí muestro cómo
              trabajo y lo que construyo.
            </p>
          </div>
        </div>
      </section>
      
      <div className="home-sections">
        <section id="experiencia" aria-label="Experiencia">
          <header className="section-header">
            <p className="section-kicker">Trayectoria</p>
            <h2 className="section-title">Experiencia</h2>
          </header>
          <div className="timeline">
            {experiencia.map((item) => (
              <article className="timeline-item" key={item.empresa}>
                <div className="timeline-head">
                  <h3 className="timeline-role">{item.cargo}</h3>
                  <span className="section-badge">{item.etiqueta}</span>
                </div>
                <p className="timeline-place">{item.empresa}</p>
                <p className="timeline-detail">{item.detalle}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="estudios" aria-label="Estudios">
          <header className="section-header">
            <p className="section-kicker">Formación</p>
            <h2 className="section-title">Estudios</h2>
          </header>
          <div className="study-grid">
            {estudios.map((item) => (
              <article className="study-card" key={item.titulo}>
                <div className="timeline-head">
                  <h3 className="timeline-role">{item.titulo}</h3>
                  <span className="section-badge">{item.estado}</span>
                </div>
                <p className="timeline-detail">{item.detalle}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tecnologias" aria-label="Tecnologías">
          <header className="section-header">
            <p className="section-kicker">Stack</p>
            <h2 className="section-title">Tecnologías</h2>
          </header>
          <ul className="tech-list">
            {tecnologias.map((tech) => (
              <li className="tech-chip" key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
      </div>

    </main>
  );
}
