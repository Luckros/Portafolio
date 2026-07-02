import { proyectosReact, proyectosFundacionales } from "../data/projects";
import ProjectCard from "../components/proyectos/ProjectCard";
import RejaDivider from "../components/ui/RejaDivider";

export default function Proyectos() {
  return (
    <main id="contenido-principal">
      {/* Encabezado de la página */}
      <section className="border-b border-bronce/20 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracota">
            Archivo de proyectos
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
            Cada proyecto es un caso de estudio, no una demo.
          </h1>
          <p className="mt-4 max-w-xl text-tierra">
            Organizado en dos etapas: los productos en React que reflejan cómo
            trabajo hoy, y los proyectos fundacionales en JavaScript puro que
            muestran de dónde vengo.
          </p>
        </div>
      </section>

      {/* Etapa 1 — React */}
      <section className="py-20" aria-labelledby="react-titulo">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-10 flex items-baseline gap-4">
            <span className="font-mono text-xs text-bronce">Etapa 01</span>
            <h2 id="react-titulo" className="font-display text-2xl text-ink">
              Aplicaciones web con React
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proyectosReact.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} compacta />
            ))}
          </div>
        </div>
      </section>

      <RejaDivider />

      {/* Etapa 2 — Vanilla JS */}
      <section className="py-20" aria-labelledby="fundacionales-titulo">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-10 flex items-baseline gap-4">
            <span className="font-mono text-xs text-bronce">Etapa 00</span>
            <h2 id="fundacionales-titulo" className="font-display text-2xl text-ink">
              Proyectos fundacionales — Vanilla JS
            </h2>
          </header>
          <p className="mb-10 max-w-2xl text-sm text-tierra">
            Antes de trabajar con frameworks, resolví estos problemas con
            JavaScript puro. Los mantengo visibles porque ahí se ve el
            fundamento: manejo del DOM, asincronismo y lógica de negocio sin
            atajos.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {proyectosFundacionales.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} compacta />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
