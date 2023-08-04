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
        accent: "#E88C1F",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
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