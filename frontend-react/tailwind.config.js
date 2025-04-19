/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vibrant-red": "#AE1B55",
        "planet-shadow-red": "#341620",
        "primary-white": "#FFFAE1",
        "bright-yellow": "#FFCE74",
        "light-pink": "#FEBCD7",
        "dark-pink": "#95506B",
        "dark-blue": "#001A2E",
      },
      fontFamily: {
        header: ["Mitr", "sans-serif"],
        primary: ["Open Sans", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
