/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      roboto_thin: ['Roboto-Thin'],
      roboto_light: ['Roboto-Light'],
      roboto_regular: ['Roboto-Regular'],
      roboto_medium: ['Roboto-Medium'],
      roboto_bold: ['Roboto-Bold'],
      roboto_black: ['Roboto-Black'],
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      list_decoration: '#000'
    },
    extend: {},
  },
  plugins: [],
}

