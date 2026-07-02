import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main id="contenido-principal" className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracota">
        Expediente no encontrado
      </p>
      <h1 className="mt-3 font-display text-4xl text-ink">Error 404</h1>
      <p className="mt-4 max-w-md text-tierra">
        La página que buscás no existe o fue movida de lugar.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-ficha bg-terracota px-6 py-3 text-sm font-medium text-cream transition-colors duration-200 ease-estable hover:bg-terracota-deep"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
