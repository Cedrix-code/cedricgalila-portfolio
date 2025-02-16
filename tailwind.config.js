/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0e181b",
        secondary: "#9aa9b4",
        tertiary: "#212d36",
        accent: "#b5b5a4",
        orange: "#E88C1F",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
      },
      boxShadow: {
        card: "0px 0px 80px -20px #1e2235",
      },
      screens: {  
        xs: "480px",
      },
    },
  },
  plugins: [],
};