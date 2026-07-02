import { useState } from "react";
import { NavLink } from "react-router-dom";

const ENLACES = [
  { to: "/", label: "Inicio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
];

function enlaceClase({ isActive }) {
  return [
    "relative px-1 py-2 text-sm tracking-wide transition-colors duration-200",
    isActive ? "text-terracota" : "text-tierra hover:text-ink",
  ].join(" ");
}

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-bronce/25 bg-cream/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Navegación principal"
      >
        <NavLink
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Lucas Rosselli . Desarrollador
        </NavLink>

        {/* Navegación de escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {ENLACES.map((enlace) => (
            <li key={enlace.to}>
              <NavLink to={enlace.to} className={enlaceClase} end={enlace.to === "/"}>
                {enlace.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Botón menú móvil */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-ficha border border-bronce/40 text-ink md:hidden"
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {abierto ? (
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <>
                <line x1="1" y1="4" x2="17" y2="4" stroke="currentColor" strokeWidth="1.5" />
                <line x1="1" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5" />
                <line x1="1" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Navegación móvil */}
      {abierto && (
        <ul
          id="menu-movil"
          className="flex flex-col gap-1 border-t border-bronce/25 bg-cream px-6 py-4 md:hidden"
        >
          {ENLACES.map((enlace) => (
            <li key={enlace.to}>
              <NavLink
                to={enlace.to}
                end={enlace.to === "/"}
                className={enlaceClase}
                onClick={() => setAbierto(false)}
              >
                {enlace.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
