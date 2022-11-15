/** @type {import('tailwindcss').Config} */

module.exports = {
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
    // colors: {
    //   base: '#FDBE00',
    //   dark: '575757',
    //   'gray-scale': {
    //     1: '#F7FAFC',
    //     2: '#F7F7F7',
    //     3: '#EDEDED',
    //   },
    //   white: '#FFFFFF',
    // },
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
}
