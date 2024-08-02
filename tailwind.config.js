/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        'custom-container': '1980px',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.custom-container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1980px',
          },
        }
      })
    },
    function ({ addUtilities}) {
      addUtilities({
        '.scroll-smooth': {
          'scroll-behavior': "smooth",
        },
      });
    },
  ],
};

