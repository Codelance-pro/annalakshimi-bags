/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f8f8',
          100: '#efedf0',
          200: '#dad6dc',
          300: '#b9b2bc',
          400: '#978e9c',
          500: '#7c727f',
          600: '#655c68',
          700: '#524952',
          800: '#3c353c',
          900: '#211f22',
          950: '#1a181a',
        },
        secondary: {
          50: '#f4f7f7',
          100: '#e2eaeb',
          200: '#c6d5d7',
          300: '#9fb6b9',
          400: '#718e93',
          500: '#567379',
          600: '#455e63',
          700: '#394c52',
          800: '#313f44',
          900: '#2b373b',
          950: '#1a2327',
        },
        accent: {
          50: '#fdf3f3',
          100: '#fbe8e8',
          200: '#f9d4d4',
          300: '#f5b5b5',
          400: '#ee8a8a',
          500: '#e05e5e',
          600: '#cb4040',
          700: '#ab3333',
          800: '#8f2e2e',
          900: '#772d2d',
          950: '#411515',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
};