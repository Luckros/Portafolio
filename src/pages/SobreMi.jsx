import { Link } from "react-router-dom";
import RejaDivider from "../components/ui/RejaDivider";

const ENFOQUE = [
  {
    titulo: "Arquitectura antes que código",
    texto:
      "Antes de escribir un componente, pienso en cómo va a crecer: qué se reutiliza, qué se rompe si el negocio cambia de idea y qué le va a costar entender a la próxima persona que abra el repo.",
  },
  {
    titulo: "El detalle que no se nota, se siente",
    texto:
      "Un focus visible bien puesto, un estado de carga que no salta, un espaciado consistente. Nadie te va a felicitar por eso, pero es la diferencia entre un producto que se siente terminado y uno que no.",
  },
  {
    titulo: "Resolver el problema, no la tarea",
    texto:
      "Antes de aceptar un requerimiento tal cual llega, pregunto qué problema de negocio hay detrás. A veces la mejor solución técnica es la que evita construir algo.",
  },
];

const TRAYECTORIA = [
  {
    etapa: "Fundamentos",
    titulo: "JavaScript sin atajos",
    texto:
      "Aprendí a manipular el DOM, gestionar estado a mano y consumir APIs con Fetch antes de tocar un framework — construyendo un carrito de compras, un buscador de películas y un gestor de tareas desde cero.",
  },
  {
    etapa: "Especialización",
    titulo: "React con foco en producto",
    texto:
      "Pasé a React para construir interfaces con estado más complejo, pero sin perder de vista que cada decisión técnica tiene que servir a un objetivo de negocio medible: conversión, retención, performance.",
  },
  {
    etapa: "Hoy",
    titulo: "Ingeniería con criterio",
    texto:
      "Trabajo pensando en quien va a mantener el código después que yo: nombres claros, componentes chicos con una sola responsabilidad, y documentación que explica el porqué, no solo el qué.",
  },
];

export default function SobreMi() {
  return (
    <main id="contenido-principal">
      {/* Encabezado narrativo */}
      <section className="border-b border-bronce/20 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracota">
            Sobre mí
          </p>
          <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
            Estudié informática. Aprendí que el software lo usan personas.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-tierra">
            Mi formación es técnica, pero mi criterio se afinó resolviendo
            problemas reales: un formulario que la gente abandonaba, un
            listado que tardaba demasiado en cargar, un flujo que confundía
            más de lo que ayudaba. Cada uno de esos problemas me enseñó algo
            que ningún curso enseña del todo: que el código correcto es el
            que resuelve el problema de alguien, no el que luce mejor en un
            repositorio.
          </p>
        </div>
      </section>

      {/* Enfoque / valores */}
      <section className="py-20" aria-labelledby="enfoque-titulo">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="enfoque-titulo" className="mb-10 font-display text-2xl text-ink">
            Cómo encaro un problema
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {ENFOQUE.map((item) => (
              <div
                key={item.titulo}
                className="rounded-ficha border border-bronce/30 bg-hueso p-7"
              >
                <h3 className="font-display text-lg text-ink">{item.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-tierra">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RejaDivider />

      {/* Trayectoria */}
      <section className="py-20" aria-labelledby="trayectoria-titulo">
        <div className="mx-auto max-w-3xl px-6">
          <h2 id="trayectoria-titulo" className="mb-10 font-display text-2xl text-ink">
            Mi trayectoria técnica
          </h2>
          <ol className="space-y-10 border-l border-bronce/30 pl-8">
            {TRAYECTORIA.map((paso) => (
              <li key={paso.etapa} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-terracota"
                />
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-bronce">
                  {paso.etapa}
                </span>
                <h3 className="mt-1 font-display text-xl text-ink">{paso.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tierra">{paso.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Cierre / CTA */}
      <section className="border-t border-bronce/20 py-16 text-center">
        <div className="mx-auto max-w-xl px-6">
          <p className="font-display text-2xl text-ink">
            Si buscás a alguien que piense antes de codear, sigamos hablando.
          </p>
          <Link
            to="/proyectos"
            className="mt-6 inline-flex items-center gap-2 rounded-ficha bg-terracota px-6 py-3 text-sm font-medium text-cream transition-colors duration-200 ease-estable hover:bg-terracota-deep"
          >
            Ver mis proyectos
          </Link>
        </div>
      </section>
    </main>
  );
}
