/**
 * RejaDivider
 * Elemento visual de firma: un patrón inspirado en las rejas de hierro
 * forjado de los patios coloniales, usado como separador entre secciones
 * en lugar de una línea genérica.
 */
export default function RejaDivider({ className = "" }) {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className={`flex items-center justify-center py-2 ${className}`}
    >
      <svg
        width="220"
        height="20"
        viewBox="0 0 220 20"
        fill="none"
        className="text-bronce/60"
      >
        <line x1="0" y1="10" x2="70" y2="10" stroke="currentColor" strokeWidth="1" />
        <line x1="150" y1="10" x2="220" y2="10" stroke="currentColor" strokeWidth="1" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M${80 + i * 15} 2 C ${84 + i * 15} 7, ${76 + i * 15} 13, ${80 + i * 15} 18`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
        <circle cx="110" cy="10" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}
