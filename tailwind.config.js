import {colors, nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#328AC9',
        'white': '#FFFFFF'
      },
      width: {
        '1171': '1171px',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
