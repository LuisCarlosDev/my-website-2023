/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    gridTemplateRows: {
      layout: '2rem 1fr 1.5rem',
    },
    gridTemplateColumns: {
      editor: '3.5rem 16rem 1fr',
    },
    extend: {
      colors: {
        'bg-text': 'rgba(56, 58, 61, 0.35)',
      },
      keyframes: {
        typewriter: 'left: 100%',
        blink: 'background: transparent',
      },
      animation: {
        typewriter: '2.5s steps(24) 500ms forwards',
        blink: '750ms steps(24) infinite',
      },
    },
    fontFamily: {
      sans: ['Montserrat, sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
