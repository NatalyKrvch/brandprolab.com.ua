import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

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
  },
};

export default preview;
