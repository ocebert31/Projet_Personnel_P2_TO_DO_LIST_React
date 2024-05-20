/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.js"],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#D1D1D1',
        foregroundColor: '#E7E7E7',
        inputButton: '#545454',
      },
    },
  },
  plugins: [],
}

