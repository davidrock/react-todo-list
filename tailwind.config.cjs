/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFF',
      gray: {
        100: '#F2F2F2',
        200: '#D9D9D9',
        300: '#808080',
        400: '#333333',
        500: '#262626',
        600: '#1A1A1A',
        700: '#0D0D0D',
      },
      purple: {
        DEFAULT: '#8284FA',
        dark: '#5E60CE',
      },
      blue: {
        DEFAULT: '#4EA8DE',
        dark: '#1E6F9F',
      },
      danger: '#E25858',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-radix')()],
};
