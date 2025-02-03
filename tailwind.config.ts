import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mariupol: ['Mariupol', 'sans-serif'],
        symbols: ['Mariupol-Symbols', 'sans-serif'],
      },
      fontSize: {
        sm: '16px',
        base: '18px',
        lg: '22px',
        xl: '32px',
        '2xl': '52px',
      },
      colors: {
        white: '#FFFFFF',
        black: '#253737',
        teal: {
          dark: '#06BCAD',
          darkOpacity: 'rgba(6, 188, 173, 0.1)',
          medium: '#0BDAC9',
          light: '#E7FAF9',
          lightOpacity: 'rgba(231, 250, 249, 0.8)',
        },
        gray: {
          dark: '#425A62',
          medium: '#B2DCDC',
          light: '#F5F9F9',
        },
        blue: {
          default: '#156FBA',
          dark: '#32607D',
        },
        red: {
          default: '#D44C62',
        },
      },
      screens: {
        mobile: { max: '599px' },
        tablet: { min: '600px', max: '1223px' },
        desktop: { min: '1224px' },
      },
    },
  },
  plugins: [],
} satisfies Config;
