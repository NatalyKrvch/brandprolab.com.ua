import type { Meta, StoryObj } from '@storybook/react';

import AdaptiveImage from './AdaptiveImage';
import { AdaptiveImageProps } from './types';

const meta: Meta<typeof AdaptiveImage> = {
  title: 'Components/AdaptiveImage',
  component: AdaptiveImage,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    alt: {
      control: 'text',
      description: 'Alt text for the image.',
      table: { type: { summary: 'string' } },
    },
    className: {
      control: 'text',
      description: 'CSS classes applied to the picture and img elements.',
      table: { type: { summary: 'string' } },
    },
    fallbackSrc: {
      control: 'text',
      description:
        'Fallback image URL for browsers that do not support <picture>.',
      table: { type: { summary: 'string' } },
    },
    sources: {
      control: 'object',
      description: 'Array of source objects with srcSet and media properties.',
      table: {
        type: { summary: 'Array<{ srcSet: string; media: string; }>' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<AdaptiveImageProps>;

export const Default: Story = {
  args: {
    alt: 'Example image',
    className: 'max-w-full h-auto rounded-lg',
    fallbackSrc: '/images/fallback.jpg',
    sources: [
      { srcSet: '/images/temp/photo_mobile.png', media: '(max-width: 600px)' },
      {
        srcSet: '/images/temp/photo_tablet.png',
        media: '(min-width: 601px) and (max-width: 1200px)',
      },
      {
        srcSet: '/images/temp/photo_desktop.png',
        media: '(min-width: 1201px)',
      },
    ],
  },
};

export const CustomClass: Story = {
  args: {
    ...Default.args,
    className: 'border border-gray-300 p-2 shadow-lg',
  },
};

export const NoSources: Story = {
  args: {
    alt: 'No sources example',
    className: '',
    fallbackSrc: '/images/fallback-only.jpg',
    sources: [],
  },
};
