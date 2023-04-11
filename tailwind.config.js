/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '468px',
      sm: '580px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        dark: 'rgb(14,28,20)',
        darker: 'rgb(11,22,15)',
        darkest: 'rgb(9,18,13)',
        blue: 'rgb(32,42,60)',
        accent: '#10c4bb',
        ratinggreen: '#008000'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}