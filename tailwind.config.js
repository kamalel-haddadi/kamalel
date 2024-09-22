/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}"
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./dist/*.{html,js}'],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('C:/Users/elhad/Documents/Personal_Protfolio/node_modules/taos/plugin.js')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

