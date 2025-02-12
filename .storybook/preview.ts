import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import 'src/styles/globals.css';

const customViewports = {
  smallMobile: {
    name: 'Small Mobile',
    styles: {
      width: '380px',
      height: '568px',
    },
  },
  largeMobile: {
    name: 'Large Mobile',
    styles: {
      width: '440px',
      height: '896px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '744px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '800px',
    },
  },
  widescreen: {
    name: 'Widescreen',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'focusable-controls', enabled: true },
          { id: 'interactive-supports-focus', enabled: true },
          { id: 'image-alt', enabled: true },
          { id: 'heading-order', enabled: true },
        ],
      },
      options: {
        wcagVersion: 2.1,
        includedImpacts: ['minor', 'moderate', 'serious', 'critical'],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
        { name: 'gray', value: '#f0f0f0' },
      ],
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;
