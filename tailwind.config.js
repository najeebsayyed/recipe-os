/** @type {import('tailwindcss').Config} */
const theme = require('./src/theme').default;
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
    },
  },
  plugins: [],
};
