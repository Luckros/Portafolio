// Fuente única de verdad para los proyectos.
// Se reutiliza en Home (destacados) y en /proyectos (catálogo completo).

export const proyectosReact = [
  {
    id: "compro-autos-ya",
    numero: "01",
    titulo: "Compro Autos Ya",
    categoria: "React · Producto",
    resumen:
      "Landing de alta conversión para el sector automotriz, pensada para tráfico mayormente móvil.",
    enfoqueProducto:
      "Captación de leads para compra-venta de autos: cada decisión de UI está subordinada a bajar la fricción del formulario de contacto.",
    focoTecnico: [
      "Optimización SEO técnico y Core Web Vitals",
      "Arquitectura mobile-first",
      "Formularios eficientes de captura de leads",
      "Performance auditado con Lighthouse",
    ],
    stack: ["React", "Vite", "SEO", "Lighthouse"],
    url: "https://www.comproautosya.com.ar/",
    tipo: "produccion",
  },
  {
    id: "los-arcanos",
    numero: "02",
    titulo: "Los Arcanos",
    categoria: "React · Interactivo",
    resumen:
      "Aplicación interactiva de astrología/entretenimiento con lógica de aleatoriedad y estado dinámico.",
    enfoqueProducto:
      "Experiencia lúdica que depende de la fluidez de la interfaz para sostener la inmersión del usuario.",
    focoTecnico: [
      "Manejo de estado complejo en React",
      "Lógica de aleatoriedad controlada",
      "Renderizado condicional fluido",
      "Animaciones de interfaz y deploy continuo (Vercel)",
    ],
    stack: ["React", "Vercel", "State Management"],
    url: "https://los-arcanos.vercel.app/",
    tipo: "produccion",
  },
  {
    id: "brokers-ar",
    numero: "03",
    titulo: "Brokers AR",
    categoria: "React · Producto",
    resumen:
      "Landing de captación de leads para créditos y seguros dirigida al sector público argentino.",
    enfoqueProducto:
      "Convertir visitas de un público muy segmentado (empleados estatales, fuerzas de seguridad) en consultas calificadas, minimizando la fricción del formulario.",
    focoTecnico: [
      "Formulario de captación con selects dependientes por área laboral",
      "Integración de contacto directo vía WhatsApp",
      "Secciones de prueba social (testimonios) y FAQ para reducir objeciones",
      "Diseño mobile-first orientado a conversión",
    ],
    stack: ["React", "SEO", "Lead Generation"],
    url: "https://www.brokersar.com.ar/",
    tipo: "produccion",
  },
];

export const proyectosFundacionales = [
  {
    id: "ecommerce-shopping-cart",
    numero: "04",
    titulo: "E-Commerce App",
    categoria: "Vanilla JS · Fundacional",
    resumen: "Carrito de compras con gestión de estado en tiempo real sin frameworks.",
    focoTecnico: [
      "Manipulación avanzada del DOM",
      "Métodos de arrays para añadir, quitar y calcular totales",
      "Persistencia básica de datos",
    ],
    stack: ["JavaScript", "HTML", "CSS"],
    url: "https://luckros.github.io/Mi-portafolio/carrito-compras/index.html",
    tipo: "fundacional",
  },
  {
    id: "movie-search-app",
    numero: "05",
    titulo: "Movie Search App",
    categoria: "Vanilla JS · Fundacional",
    resumen: "Buscador de películas consumiendo la API pública de OMDB.",
    focoTecnico: [
      "Consumo de REST APIs con Fetch",
      "Asincronismo con async/await",
      "Estados de carga y manejo de errores",
    ],
    stack: ["JavaScript", "OMDB API", "Fetch API"],
    url: "https://luckros.github.io/Mi-portafolio/buscador-peliculas/index.html",
    tipo: "fundacional",
  },
  {
    id: "task-manager",
    numero: "06",
    titulo: "Task Manager",
    categoria: "Vanilla JS · Fundacional",
    resumen: "Gestor de tareas con operaciones CRUD completas y persistencia en sesión.",
    focoTecnico: [
      "CRUD completo (crear, leer, actualizar, borrar)",
      "Persistencia en sessionStorage",
      "Lógica de negocio sin dependencias externas",
    ],
    stack: ["JavaScript", "sessionStorage"],
    url: "https://luckros.github.io/Mi-portafolio/todo-list/index.html",
    tipo: "fundacional",
  },
];

export const todosLosProyectos = [...proyectosReact, ...proyectosFundacionales];
