/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'main' : "#82A3A1",
          'secondary' : "#465362",
          'accentOne' : "#011936",
          'accentTwo' : "#CDE5B4",
        }
      },
    },
    plugins: [],
  }