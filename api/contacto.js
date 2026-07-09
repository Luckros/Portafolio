import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Mismas reglas que en el frontend — nunca confíes solo en la validación del cliente.
function validar(body) {
  const errores = {};
  const nombre = (body?.nombre ?? "").trim();
  const email = (body?.email ?? "").trim();
  const mensaje = (body?.mensaje ?? "").trim();

  if (!nombre) errores.nombre = "Falta el nombre.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errores.email = "Email inválido.";
  }
  if (mensaje.length < 10) errores.mensaje = "El mensaje es demasiado corto.";

  return { errores, valores: { nombre, email, mensaje } };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método no permitido." });
  }

  const { errores, valores } = validar(req.body);
  if (Object.keys(errores).length > 0) {
    return res.status(400).json({ errores });
  }

  try {
    await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>", // reemplazar por tu dominio verificado
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: valores.email,
      subject: `Nuevo contacto de ${valores.nombre}`,
      text: `Nombre: ${valores.nombre}\nEmail: ${valores.email}\n\n${valores.mensaje}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return res.status(500).json({ error: "No se pudo enviar el mensaje. Probá de nuevo." });
  }
}
