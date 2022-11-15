/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    debugScreens: { position: ['top', 'left'] },
    screens: {
      sm: '375px',
      md: '720px',
      xl: '1200px',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
}
