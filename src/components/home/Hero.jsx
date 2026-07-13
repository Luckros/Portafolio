import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="textura-azulejo relative overflow-hidden border-b border-bronce/20"
      aria-labelledby="hero-titulo"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracota">
          Desarrollador Frontend · React
        </p>

        <h1
          id="hero-titulo"
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl md:text-6xl"
        >
          Construyo interfaces que resuelven problemas de negocio,
          <span className="text-terracota"> no solo pantallas bonitas.</span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-tierra">
          Diseño y desarrollo productos web con React, priorizando decisiones
          arquitectónicas claras, manejo de estado consistente y performance
          medible — desde la primera línea de código hasta el deploy.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            to="/proyectos"
            className="inline-flex items-center justify-center gap-2 rounded-ficha bg-terracota px-6 py-3 text-sm font-medium text-cream shadow-ficha transition-colors duration-200 ease-estable hover:bg-terracota-deep"
          >
            Ver casos de estudio
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>

          <a
            href="/CV-Lucas-Rosselli.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-ficha border border-bronce/50 px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 ease-estable hover:border-azul-colonial hover:text-azul-colonial"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
