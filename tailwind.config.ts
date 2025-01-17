import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#253737',
        teal: {
          dark: '#06BCAD',
          medium: '#0BDAC9',
          light: '#E7FAF9',
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
    },
  },
  plugins: [],
} satisfies Config;
