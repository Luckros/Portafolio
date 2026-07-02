const STACK = [
  "React",
  "Vite",
  "JavaScript (ES6+)",
  "REST APIs",
  "Tailwind CSS",
  "Git / CI-CD",
  "Performance & SEO",
  "NodeJS (en proceso)",
];

export default function TechStack() {
  return (
    <section className="border-b border-bronce/20 py-14" aria-label="Tecnologías principales">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-tierra/70">
          Stack principal
        </p>
        <ul className="flex flex-wrap gap-3">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="rounded-ficha border border-bronce/40 bg-hueso px-4 py-2 font-mono text-xs text-tierra"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
