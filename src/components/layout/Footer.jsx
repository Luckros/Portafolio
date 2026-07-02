import RejaDivider from "../ui/RejaDivider";

const ANIO = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-24 bg-hueso">
      <RejaDivider className="pt-10" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 pb-10 text-center">
        <p className="font-display text-lg text-ink">¿Construimos algo juntos?</p>
        <a
          href="mailto:hola@tudominio.com"
          className="subrayado-terracota text-tierra hover:text-terracota"
        >
          hola@tudominio.com
        </a>
        <p className="mt-4 font-mono text-xs text-tierra/70">
          © {ANIO} · Diseñado y desarrollado a mano, en Buenos Aires.
        </p>
      </div>
    </footer>
  );
}
