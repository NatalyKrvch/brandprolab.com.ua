import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#253737',
        whiteOpacity: 'rgba(255, 255, 255, 0.3)',

        blue: {
          default: '#156FBA',
          dark: '#32607D',
        },

        gray: {
          dark: '#425A62',
          medium: '#B2DCDC',
          light: '#F5F9F9',
        },

        red: {
          default: '#D44C62',
        },

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
      },

      fontFamily: {
        mariupol: ['Mariupol', 'sans-serif'],
        symbols: ['Mariupol-Symbols', 'sans-serif'],
      },

      fontSize: {
        '22': '22px',
        '28': '28px',
        '32': '32px',
        '40': '40px',
        '42': '42px',
        '44': '44px',
        '52': '52px',
        '56': '56px',
      },

      letterSpacing: {
        tight: '-0.02em',
        normal: '0em',
        wide: '0.02em',
        wider: '0.05em',
      },

      lineHeight: {
        '14': '14px',
        '18': '18px',
        '22': '22px',
        '26': '26px',
        '34': '34px',
        '44': '44px',
        '54': '54px',
      },

      spacing: {
        '20': '20px',
        '28': '28px',
        '30': '30px',
        '36': '36px',
        '40': '40px',
        '44': '44px',
        '52': '52px',
        '60': '60px',
        '72': '72px',
        '80': '80px',
        '120': '120px',
        '150': '150px',
        '190': '190px',
        '200': '200px',
        '216': '216px',
        '240': '240px',
        '250': '250px',
        '280': '280px',
        '300': '300px',
        '314': '314px',
        '336': '336px',
        '350': '350px',
        '400': '400px',
        '408': '408px',
        '482': '482px',
      },

      width: {
        '22': '22px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '42': '42px',
        '48': '48px',
        '64': '64px',
        '68': '68px',
        '72': '72px',
        '80': '80px',
        '96': '96px',
        '108': '108px',
        '200': '200px',
        '280': '280px',
        '314': '314px',
        '400': '400px',
        '408': '408px',
        '442': '442px',
        '456': '456px',
        '464': '464px',
        '480': '480px',
        '800': '800px',
      },

      height: {
        '22': '22px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
        '42': '42px',
        '48': '48px',
        '64': '64px',
        '68': '68px',
        '72': '72px',
        '80': '80px',
        '96': '96px',
        '108': '108px',
        '210': '210px',
        '240': '240px',
        '300': '300px',
        '360': '360px',
        '600': '600px',
        '650': '650px',
        '700': '700px',
        '800': '800px',
        '1000': '1000px',
        '1020': '1020px',
      },

      maxWidth: {
        container: '1224px',
        '314': '314px',
        '400': '400px',
        '408': '408px',
        '442': '442px',
        '456': '456px',
        '482': '482px',
        '610': '610px',
        '800': '800px',
      },

      borderRadius: {
        '24': '24px',
        '32': '32px',
        '40': '40px',
      },

      translate: {
        '-18': '-18px',
        '-24': '-24px',
        '-30': '-30px',
        '-36': '-36px',
      },
      rotate: {
        '30': '30deg',
      },

      screens: {
        mobile: { max: '599px' },
        tablet: { min: '600px', max: '1224px' },
        desktop: { min: '1224px' },
      },
    },
  },
  plugins: [],
} satisfies Config;
