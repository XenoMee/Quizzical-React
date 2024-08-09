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
        ss: '550px',
        sm: '785px',
        md: '1060px',
        lg: '1200px',
        wide: '1440px',
      },

      backgroundImage: {
        blobs: 'url(/images/blue_blob.png), url(/images/yellow_blob.png)',
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
          '.container': {
            '@apply max-w-[70rem] mx-auto py-6 px-5 sm:p-10 lg:max-w-[85rem] wide:max-w-[95rem]': {},
          },

          '.background-blobs': {
            '@apply bg-blobs bg-position-blobs xxs:bg-blobs-size-small md:bg-blobs-size-large bg-no-repeat': {},
          },

          '.h1': {
            '@apply text-blue-900 font-karla text-3xl sm:text-5xl wide:text-7xl font-bold leading-none': {},
          },

          '.h2': {
            '@apply text-blue-900 font-karla text-lg sm:text-xl wide:text-2xl font-bold leading-tight': {},
          },

          '.button': {
            '@apply bg-blue-600 text-white-50 py-4 px-14 rounded-xl cursor-pointer hover:bg-blue-900 transition delay-100 ease-in':
              {},
          },

          '.label-button': {
            '@apply bg-white-50 text-blue-900 font-medium py-2 px-6 border border-blue-600 rounded-xl cursor-pointer text-nowrap has-[input[type="radio"]:checked]:bg-blue-50 has-[input[type="radio"]:checked]:border-blue-50 has-[input[type="radio"]:checked]:hover:bg-blue-900 hover:bg-blue-600 hover:text-white-50 transition delay-100 ease-in-out':
              {},
          },
        }),
        addUtilities({});
    }),
  ],
};
