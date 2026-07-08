import { useState } from "react";

const CANALES = [
  {
    label: "Email",
    valor: "lucasarosselli@gmail.com",
    href: "mailto:lucasarosselli@gmail.com",
  },
  {
    label: "LinkedIn",
    valor: "lucas-rosselli",
    href: "https://www.linkedin.com/in/lucas-rosselli/",
  },
  {
    label: "GitHub",
    valor: "Luckros",
    href: "https://github.com/Luckros",
  },
];

const ESTADO_INICIAL = { nombre: "", email: "", mensaje: "" };

function validar(valores) {
  const errores = {};
  if (!valores.nombre.trim()) {
    errores.nombre = "Contame cómo te llamás.";
  }
  if (!valores.email.trim()) {
    errores.email = "Necesito un email para responderte.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email)) {
    errores.email = "Ese email no parece válido.";
  }
  if (!valores.mensaje.trim() || valores.mensaje.trim().length < 10) {
    errores.mensaje = "Contame un poco más — al menos unas palabras de contexto.";
  }
  return errores;
}

export default function Contacto() {
  const [valores, setValores] = useState(ESTADO_INICIAL);
  const [errores, setErrores] = useState({});
  const [estadoEnvio, setEstadoEnvio] = useState("idle"); // idle | enviando | enviado

  function actualizar(campo) {
    return (e) => setValores((prev) => ({ ...prev, [campo]: e.target.value }));
  }

  async function manejarEnvio(e) {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    if (Object.keys(erroresValidacion).length > 0) return;

    setEstadoEnvio("enviando");
    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
        nombre: formData.name,
        email: formData.email,
      mensaje: formData.message
  }),
});

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setErrores(data.errores ?? {});
        setEstadoEnvio("error");
        return;
      }

      setEstadoEnvio("enviado");
      setValores(ESTADO_INICIAL);
    } catch (error) {
      setEstadoEnvio("error");
    }
}

  return (
    <main id="contenido-principal">
      <section className="border-b border-bronce/20 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracota">
            Contacto
          </p>
          <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
            Hablemos de tu próximo proyecto.
          </h1>
          <p className="mt-4 max-w-xl text-tierra">
            Contame qué estás construyendo o qué problema necesitás resolver.
            Respondo personalmente, sin intermediarios.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
          {/* Formulario */}
          <form
            noValidate
            onSubmit={manejarEnvio}
            className="rounded-ficha border border-bronce/30 bg-hueso p-8 shadow-ficha"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-ink">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={valores.nombre}
                  onChange={actualizar("nombre")}
                  aria-invalid={Boolean(errores.nombre)}
                  aria-describedby={errores.nombre ? "nombre-error" : undefined}
                  className="mt-2 w-full rounded-ficha border border-bronce/40 bg-cream px-4 py-3 text-sm text-ink placeholder:text-tierra/50"
                  placeholder="Tu nombre"
                />
                {errores.nombre && (
                  <p id="nombre-error" className="mt-1.5 text-xs text-terracota-deep">
                    {errores.nombre}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={valores.email}
                  onChange={actualizar("email")}
                  aria-invalid={Boolean(errores.email)}
                  aria-describedby={errores.email ? "email-error" : undefined}
                  className="mt-2 w-full rounded-ficha border border-bronce/40 bg-cream px-4 py-3 text-sm text-ink placeholder:text-tierra/50"
                  placeholder="tu@email.com"
                />
                {errores.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-terracota-deep">
                    {errores.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-ink">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={5}
                  value={valores.mensaje}
                  onChange={actualizar("mensaje")}
                  aria-invalid={Boolean(errores.mensaje)}
                  aria-describedby={errores.mensaje ? "mensaje-error" : undefined}
                  className="mt-2 w-full resize-none rounded-ficha border border-bronce/40 bg-cream px-4 py-3 text-sm text-ink placeholder:text-tierra/50"
                  placeholder="Contame en qué estás trabajando..."
                />
                {errores.mensaje && (
                  <p id="mensaje-error" className="mt-1.5 text-xs text-terracota-deep">
                    {errores.mensaje}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={estadoEnvio === "enviando"}
                className="w-full rounded-ficha bg-terracota px-6 py-3 text-sm font-medium text-cream transition-colors duration-200 ease-estable hover:bg-terracota-deep disabled:cursor-not-allowed disabled:opacity-60"
              >
                {estadoEnvio === "enviando" ? "Enviando..." : "Enviar mensaje"}
              </button>

              <p role="status" aria-live="polite" className="text-sm text-azul-colonial">
                {estadoEnvio === "enviado" &&
                  "¡Gracias! Recibí tu mensaje y te voy a responder a la brevedad."}
              </p>
              {estadoEnvio === "error" && (
                <p role="alert" className="text-sm text-terracota-deep">
                   Algo falló al enviar el mensaje. Probá de nuevo o escribime directamente a mi email.
                   </p>
                  )}
            </div>
          </form>

          {/* Canales directos */}
          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-tierra/70">
                También podés escribirme por
              </p>
              <ul className="mt-4 space-y-3">
                {CANALES.map((canal) => (
                  <li key={canal.label}>
                    <a
                      href={canal.href}
                      target={canal.href.startsWith("http") ? "_blank" : undefined}
                      rel={canal.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-baseline justify-between border-b border-bronce/20 pb-3 text-sm"
                    >
                      <span className="text-tierra">{canal.label}</span>
                      <span className="subrayado-terracota text-ink group-hover:text-terracota">
                        {canal.valor}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-ficha border border-bronce/30 bg-hueso p-6">
              <p className="font-display text-lg text-ink">Tiempo de respuesta</p>
              <p className="mt-2 text-sm leading-relaxed text-tierra">
                Suelo responder dentro de las 24–48 horas hábiles. Si es
                urgente, aclaralo en el mensaje.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
