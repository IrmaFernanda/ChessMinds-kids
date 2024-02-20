/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '8-100px': 'calc(8 * 100px)',
        '025-100px': 'calc(0.25 * 100px) calc(8*100px)',
        '.25-100px': 'calc(0.25 * 100px)'
      }
    }
  },
  plugins: []
}
