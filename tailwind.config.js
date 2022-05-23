const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*{html,js,jsx}'],
  theme: {
    colors: {
      ...colors
    },
    fontFamily: {
      anton: "'Anton', sans-serif",
      robotoSlab: "'Roboto Slab', serif",
      ubuntu: "'Ubuntu', sans-serif",
    }
  },
  plugins: [],
}
