/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       Roboto: ["Open Sans"],
      },

      screens:{
        '2sm': "400px",
        '2md': "850px",
      }
    },
  },

  plugins: [],
}
