/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    colors: {
      "orange-600": "#FB5A26",
      "orange-500": "#FF7143",
      "orange-300": "#FFA98D",
      "red": "red",
      "green": "green",
      "dark": "#253239",
      "blue": "#2D66F5",
      "blueSky": "#96B1F6",
      "whiteSky": "#D1DDF2",
      "white": "#EBF0F8",
      "gray": "#79889C",
      "transparent": "rgba(0,0,0,0)",
    },
    extend: {
      container: {
        center: true
      }
    },
  },
  plugins: [],
}
