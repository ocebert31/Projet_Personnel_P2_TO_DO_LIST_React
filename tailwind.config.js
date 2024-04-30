/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.js"],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#E7E7E7', // Remplacez par votre propre valeur hexadécimale
        foregroundColor: '#D1D1D1',
        borderContent: '5D5D5D',
      },
    },
  },
  plugins: [],
}

