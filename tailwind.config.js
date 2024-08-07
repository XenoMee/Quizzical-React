/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      karla: 'var(--font-karla)',
      inter: 'var(--font-inter)',
    },

    extend: {
      colors: {
        wrong: '#F8BCBC',
        correct: '#94D7A2',
        blue: {
          25: '#DBDEF0',
          50: '#D6DBF5',
          600: '#4D5B9E',
          900: '#293264',
        },

        white: {
          50: '#F5F7FB',
        },
      },

      screens: {
        wide: '1440px',
      },

      backgroundImage: {
        blueBlob: 'url("./images/blue_blob.png")',
        yellowBlob: 'url("./images/yellow_blob.png")',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({}),
        addComponents({
          '.h1': {
            '@apply text-blue-900 font-karla text-2xl md:text-3xl font-bold leading-none': {},
          },

          '.h2': {
            '@apply text-blue-900 font-karla text-lg md:text-xl font-bold leading-none': {},
          },

          '.button': {
            '@apply bg-blue-600 text-white-50 py-3 px-10': {},
          },
        }),
        addUtilities({});
    }),
  ],
};
