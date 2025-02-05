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
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '32': '32px',
        '52': '52px',
      },
      lineHeight: {
        '26': '26px',
      },
      letterSpacing: {
        '0.4': '0.4px',
        '0.44': '0.44px',
        '0.48': '0.48px',
      },
      colors: {
        white: '#FFFFFF',
        whiteOpacity: 'rgba(255, 255, 255, 0.3)',

        black: '#253737',

        teal: {
          dark: '#06BCAD',
          darkOpacity: 'rgba(6, 188, 173, 0.1)',
          darkTranslucent: 'rgba(6, 188, 173, 0.3)',
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
      borderRadius: {
        '24': '24px',
        '32': '32px',
        '40': '40px',
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
