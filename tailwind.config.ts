import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hohBlue: "#1d4ed8",
        hohDark: "#0f172a",
        hohGreen: "#16a34a",
        hohOrange: "#f97316",
        hohGray: "#6b7280"
      }
    }
  },
  plugins: []
};

export default config;

