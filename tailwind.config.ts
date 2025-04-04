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
        '22': '22px',
        '28': '28px',
        '32': '32px',
        '44': '44px',
        '52': '52px',
      },
      lineHeight: {
        '18': '18px',
        '22': '22px',
        '26': '26px',
        '44': '44px',
        '54': '54px',
      },
      spacing: {
        '40': '40px',
        '36': '36px',
        '44': '44px',
        '52': '52px',
        '60': '60px',
        '72': '72px',
        '80': '80px',
        '190': '190px',
        '216': '216px',
        '240': '240px',
        '300': '300px',
        '314': '314px',
        '336': '336px',
        '400': '400px',
        '408': '408px',
        '482': '482px',
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0em',
        wide: '0.02em',
        wider: '0.05em',
      },
      colors: {
        whiteOpacity: 'rgba(255, 255, 255, 0.3)',

        black: '#253737',

        teal: {
          dark: '#06BCAD',
          darkOpacity: 'rgba(6, 188, 173, 0.1)',
          darkTranslucent: 'rgba(6, 188, 173, 0.3)',
          medium: '#0BDAC9',
          light: '#E7FAF9',
          fog: '#47EDFF',
          fogOpacity: '#1D81B2',
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
        tablet: { min: '600px', max: '1224px' },
        desktop: { min: '1224px' },
      },
      maxWidth: {
        container: '1224px',
      },
      width: {
        '280': '280px',
        '400': '400px',
        '480': '480px',
      },
      height: {
        '210': '210px',
        '300': '300px',
        '360': '360px',
      },
      translate: {
        '-18': '-18px',
        '-24': '-24px',
        '-30': '-30px',
        '-36': '-36px',
      },
    },
  },
  plugins: [],
} satisfies Config;
