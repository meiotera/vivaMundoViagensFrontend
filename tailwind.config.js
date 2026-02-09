/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", "sans-serif"],
      },
      colors: {
        cor: "yellow",
        pizza: "#000",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
