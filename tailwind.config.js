/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        reenie: ['Reenie Beanie', 'system-ui'],
        sanchez: ['Sanchez', 'system-ui'],
        elite: ['Special Elite', 'system-ui'],
        akbar: ['akbar', 'system-ui'],
        alfa: ['Alfa Slab One', 'system-ui'],
      },
      backgroundImage: {
        craft: "url('/src/assets/craft.webp')",
      },
      container: {
        padding: '7%',
      },
      scale: {
        110: '1.1',
      },
      fill: ['hover', 'focus'],
    },
    plugins: [require('@tailwindcss/forms'),],
  },
};