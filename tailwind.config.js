/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#fff',
      'black': '#000',
      'lightorange': '#ffe2d6',
      'bg': '#b6bbc4',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    spacing:{
      '10':'10px',
      '20':'20px',
      '30':'30px',
      '50':'50px',
      '70':'70px',
      '100':'100px',
      '130':'130px',
      '150':'150px',
      '1000':'1000px',
    },
    extend: {},
  },
  plugins: [],
}

