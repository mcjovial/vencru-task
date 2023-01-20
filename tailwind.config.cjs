/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './dist/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#101828',
        secondary: '#667085'
      },
    },
  },
  plugins: [],
};
