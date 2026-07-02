/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6EFE4",
        hueso: "#EEE3D0",
        ink: "#2A2016",
        tierra: "#6B4226",
        terracota: {
          DEFAULT: "#B2542E",
          deep: "#8B3D1F",
        },
        azul: {
          colonial: "#2C4A5E",
        },
        bronce: "#A8834F",
      },
      fontFamily: {
        display: ["Piazzolla", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Space Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "azulejo": "radial-gradient(circle at 1px 1px, rgba(168,131,79,0.18) 1px, transparent 0)",
      },
      backgroundSize: {
        "azulejo-sm": "18px 18px",
      },
      boxShadow: {
        ficha: "0 1px 0 rgba(42,32,22,0.06), 0 12px 24px -16px rgba(42,32,22,0.35)",
      },
      borderRadius: {
        ficha: "2px",
      },
      transitionTimingFunction: {
        estable: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
