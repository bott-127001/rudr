/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        deepteal: {
          500: '#004D40',
          700: '#00332A',
        },
        warmamber: {
          400: '#FFB300',
          600: '#FF8F00',
        },
        offwhite: {
          50: '#FAF9F6',
          100: '#F5F3EE',
        },
        mahogany: {
          700: '#4A1C1C',
          900: '#2E0B0B',
        },
        mutedgold: {
          300: '#D4AF37',
          500: '#B8860B',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

