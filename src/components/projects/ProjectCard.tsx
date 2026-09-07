import { Link } from "react-router-dom";
import { FaGithub, FaRegImage } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import "./ProjectCard.css";

export interface ProjectCardProps {
  title: string;
  description: string;
  /** Imagen del proyecto: importada de assets o URL externa. Si falta, se muestra un hueco. */
  image?: string;
  imageAlt?: string;
  /** Enlace al repositorio del proyecto */
  githubUrl: string;
  /** Ruta interna de la página de detalle (p. ej. "/proyecto1"). Si existe, el botón y la imagen abren esa página. */
  detailPath?: string;
  /** URL del proyecto real desplegado (demo / producción). Solo se usa si no hay detailPath. */
  liveUrl?: string;
  tech?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  imageAlt = "",
  githubUrl,
  detailPath,
  liveUrl,
  tech = []
}: ProjectCardProps) {
  const media = image ? (
    <img src={image} alt={imageAlt || `Captura del proyecto ${title}`} loading="lazy" />
  ) : (
    <div className="project-card-media-placeholder">
      <FaRegImage aria-hidden="true" />
      <span>Añade aquí la imagen</span>
    </div>
  );

  return (
    <article className="project-card">
      <div className="project-card-media">
        {detailPath ? (
          <Link
            className="project-card-media-link"
            to={detailPath}
            aria-label={`Abrir el proyecto ${title}`}
          >
            {media}
          </Link>
        ) : (
          media
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>

        {tech.length > 0 && (
          <ul className="project-card-tech" aria-label="Tecnologías utilizadas">
            {tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="project-card-links">
        <a
          className="project-card-link project-card-link--github"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Código de ${title} en GitHub`}
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
        {detailPath ? (
          <Link
            className="project-card-link project-card-link--live"
            to={detailPath}
            aria-label={`Ver el proyecto ${title}`}
          >
            Ver proyecto
            <GoArrowUpRight aria-hidden="true" />
          </Link>
        ) : (
          liveUrl && (
            <a
              className="project-card-link project-card-link--live"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar ${title}`}
            >
              Ver proyecto
              <GoArrowUpRight aria-hidden="true" />
            </a>
          )
        )}
      </div>
    </article>
  );
}
