/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#ffcc21',
          400: '#ff963c',
          500: '#ea6c00',
        },
        secondary: {
          300: '#8fe9d0',
        },
        dark: {
          500: '#414141',
          600: '#2e2e2e',
        },
        gray: {
          400: '#777',
        },
      },
      fontFamily: {
        noto: ['Noto Sans JP'],
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
