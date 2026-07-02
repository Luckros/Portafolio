/**
 * ProjectCard
 * Tarjeta reutilizable en formato "ficha de expediente".
 * Sirve tanto para proyectos con sitio en vivo (React) como para
 * proyectos fundacionales sin URL pública — el botón de acción
 * cambia según lo que el proyecto tenga disponible.
 */
export default function ProjectCard({ proyecto, compacta = false }) {
  const { numero, titulo, categoria, resumen, stack, url, repo } = proyecto;

  return (
    <article className="group flex flex-col justify-between rounded-ficha border border-bronce/30 bg-hueso p-8 shadow-ficha transition-transform duration-300 ease-estable hover:-translate-y-1">
      <div>
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-bronce">Expediente Nº {numero}</span>
          <span className="rounded-full border border-azul-colonial/40 px-3 py-1 font-mono text-[11px] text-azul-colonial">
            {categoria}
          </span>
        </div>

        <h3 className="font-display text-2xl text-ink">{titulo}</h3>
        <p className="mt-3 text-sm leading-relaxed text-tierra">{resumen}</p>

        {!compacta && proyecto.focoTecnico && (
          <ul className="mt-4 space-y-1.5">
            {proyecto.focoTecnico.map((punto) => (
              <li key={punto} className="flex gap-2 text-sm text-tierra">
                <span aria-hidden="true" className="mt-1 text-bronce">
                  —
                </span>
                {punto}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-ficha bg-cream px-3 py-1 font-mono text-[11px] text-tierra"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex items-center gap-5">
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-terracota transition-colors duration-200 group-hover:text-terracota-deep"
          >
            Visitar sitio en vivo
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-azul-colonial transition-colors duration-200 hover:text-ink"
          >
            Ver código
          </a>
        )}
        {!url && !repo && (
          <span className="font-mono text-xs text-tierra/60">
            Repositorio privado / proyecto de práctica
          </span>
        )}
      </div>
    </article>
  );
}
