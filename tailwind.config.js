/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,js}"],
  theme: {
    extend: {
      width: {
        '100vw': '100vw',
        '80vw': '80vw'
      },
      fontFamily: {
        kanit: ['Kanit', 'Roboto'],
        rubik: ['Rubik']
      },
      display: ["group-hover"],
      borderWidth: {
        1: '1px'
      }
    },
    colors: {
      'white0': '#FFFFFF',
      'white': '#ededed',
      'black': '#030303',
      'gray': '#686963',
      'green': '#46624c',
      'brown': '#d6d1c3',
      'pink': '#d7bbbd'
    }
  },
  plugins: [],
}