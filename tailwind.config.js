/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
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
