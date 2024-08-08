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
        xxs: '320px',
        xs: '375px',
        wide: '1440px',
      },

      backgroundImage: {
        blobs: 'url(./images/blue_blob.png), url(./images/yellow_blob.png)',
      },

      backgroundPosition: {
        'position-blobs': '-50px bottom, right top',
      },

      backgroundSize: {
        'blobs-size-small': '200px 145px, 200px 145px',
        'blobs-size-large': '300px 235px, 300px 235px',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({}),
        addComponents({
          '.background-blobs': {
            '@apply bg-blobs bg-position-blobs xxs:bg-blobs-size-small md:bg-blobs-size-large bg-no-repeat': {},
          },

          '.h1': {
            '@apply text-blue-900 font-karla text-3xl sm:text-5xl font-bold leading-none': {},
          },

          '.h2': {
            '@apply text-blue-900 font-karla text-lg sm:text-xl font-bold leading-none': {},
          },

          '.button': {
            '@apply bg-blue-600 text-white-50 py-4 px-16 rounded-xl': {},
          },
        }),
        addUtilities({});
    }),
  ],
};
