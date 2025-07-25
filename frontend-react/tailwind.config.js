/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: ["2rem", { lineHeight: "1.1" }],
        primary: ["1.3rem"],
      },
      colors: {
        "vibrant-red": "#AE1B55",
        "planet-shadow-red": "#341620",
        "primary-white": "#FFFAE1",
        "bright-yellow": "#FFCE74",
        "light-pink": "#FEBCD7",
        "dark-pink": "#95506B",
        "dark-blue": "#001A2E",
        "supplement-white": "#D3C99A",
        "input-grey": "#D9D9D9",
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
