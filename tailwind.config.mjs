/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2F7',
          100: '#D4DFEB',
          200: '#A9BFDA',
          300: '#7E9FC8',
          400: '#5380B6',
          500: '#2D6AAF',
          600: '#1B3A5C',
          700: '#162F4A',
          800: '#112438',
          900: '#0C1926',
          950: '#070D14',
        },
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
