/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: '#d87d4a',
        lightOrange: '#FBAF85',
        lightBlack: '#101010',
        darkWhite: '#f1f1f1',
        lightWhite: '#fafafa',
        white: '#ffffff',
        black: '#000000',
      },

      fontFamily: {
        sans: [
          '"Manrope", sans-serif',
        ]
      },

      fontSize: {
        base: '15px',
        lg: '40px', 
        xl: '56px'

      },

      fontWeight: {
        normal: 400, 
        bold: 700, 
        medium: 500,  
      },


    },
  },
  plugins: [],
}