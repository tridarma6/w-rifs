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
        'white': '#FFFFFF',
        'biru-hijau': '#6AD5BF',
      },
      width: {
        '1261': '1261px',
        '1171': '1171px',
        '648' : '648px',
        '489' : '489px',
        '559' : '559px',
        '353' : '353px',
        '200': '200px',
        '182' : '182px',
      },
      height: {
        '94': '94px',
        '323': '323px',
        '218' : '218px',
        '130' : '130px',
        '161' : '161px',
      },
      fontSize: {
        '32' : '32px',
      },
      letterSpacing: {
        '2' : '0.02em',
        '4': '0.04em',
        widest: '.25em',
      },
      rotate: {
        '16.82': '16.82deg',
      },
      marginLeft: {
        '395' : '395px',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
