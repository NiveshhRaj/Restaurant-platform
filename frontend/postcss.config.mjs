
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      colors: {
        primary: "#0f3d2e",   // deep green
        accent: "#d4a017",    // gold
        background: "#f6f1e7" // beige
      },
    },
  },
};

export default config;
