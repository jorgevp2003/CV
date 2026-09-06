import { useEffect, useRef, useState } from "react";
import "./ContactNavItem.css";

type ContactLink = {
  label: string;
  url: string;
  href?: string;
};

const contactLinks: ContactLink[] = [
  {
    label: "Gmail",
    url: "jvpfp2003@gmail.com",
    href: "mailto:jvpfp2003@gmail.com"
  },
  { label: "GitHub", url: "https://github.com/jorgevp2003" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/jorge-v%C3%A1zquez-poto-aab78826b/"
  }
];

export default function ContactNavItem() {
  const [activeLink, setActiveLink] = useState<ContactLink | null>(null);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!activeLink) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveLink(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeLink]);

  const openLink = (link: ContactLink) => {
    setCopied(false);
    setActiveLink(link);
  };

  const copyLink = async () => {
    if (!activeLink) return;
    try {
      await navigator.clipboard.writeText(activeLink.url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // El portapapeles no está disponible (p. ej. contexto no seguro)
    }
  };

  return (
    <>
      <div className="site-nav-item">
        <a href="#contacto">Contacto</a>
        <div className="nav-options">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href ?? link.url}
              onClick={(event) => {
                event.preventDefault();
                openLink(link);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {activeLink && (
        <div className="link-modal-overlay" onClick={() => setActiveLink(null)}>
          <div
            ref={dialogRef}
            className="link-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Enlace de ${activeLink.label}`}
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="link-modal-close"
              onClick={() => setActiveLink(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <p className="link-modal-label">{activeLink.label}</p>
            <p className="link-modal-url">{activeLink.url}</p>
            <div className="link-modal-actions">
              <a
                className="link-modal-button link-modal-button--open"
                href={activeLink.href ?? activeLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir enlace
              </a>
              <button
                type="button"
                className="link-modal-button link-modal-button--copy"
                onClick={copyLink}
              >
                {copied ? "¡Copiado!" : "Copiar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
