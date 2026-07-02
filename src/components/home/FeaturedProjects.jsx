import { Link } from "react-router-dom";
import { proyectosReact } from "../../data/projects";
import ProjectCard from "../proyectos/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="py-20" aria-labelledby="destacados-titulo">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracota">
              Casos de estudio
            </p>
            <h2 id="destacados-titulo" className="mt-2 font-display text-3xl text-ink">
              Proyectos destacados
            </h2>
          </div>
          <Link
            to="/proyectos"
            className="hidden subrayado-terracota text-sm text-tierra hover:text-terracota sm:block"
          >
            Ver catálogo completo
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {proyectosReact.slice(0, 2).map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} compacta />
          ))}
        </div>

        <Link
          to="/proyectos"
          className="mt-8 inline-block subrayado-terracota text-sm text-tierra hover:text-terracota sm:hidden"
        >
          Ver catálogo completo
        </Link>
      </div>
    </section>
  );
}
