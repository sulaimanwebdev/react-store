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
        '4md': "720px",
        '2md': "850px",
        '3md': "964px",
        '2lg': "1160px",
      }
    },
  },

  plugins: [],
}
