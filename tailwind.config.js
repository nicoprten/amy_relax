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
      'gray': '#D3D3D3',
      'gray0': '#F4F6F4',
      'green': '#46624c',
      'green0': '#5A7D7C',
      'brown': '#d6d1c3',
      'brown-dark': '#8C5E58',
      'pink': '#d7bbbd',
      'violet': '#7A6174',
      'violet-light': '#8C7284',
      'blue': '#181E23',
      'red': '#C16E70'
    }
  },
  plugins: [],
}