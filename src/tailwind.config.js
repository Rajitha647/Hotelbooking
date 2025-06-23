/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#2563EB",
          secondary: "#FBBF24",
        },
        fontFamily: {
          outfit: ["Outfit", "sans-serif"],
          playfair: ["Playfair", "serif"],
        },
      },
    },
    plugins: [],
  };
  