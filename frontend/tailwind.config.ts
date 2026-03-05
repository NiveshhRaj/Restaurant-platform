import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f3d2e",   // deep green
        accent: "#d4a017",    // gold
        background: "#f6f1e7" // beige
      },
    },
  },
  plugins: [],
};

export default config;