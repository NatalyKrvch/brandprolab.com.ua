import type { Meta, StoryObj } from '@storybook/react';

import PhotoCard from './PhotoCard';

const meta: Meta<typeof PhotoCard> = {
  title: 'Components/PhotoCard',
  component: PhotoCard,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    photoUrl: {
      control: 'text',
      description: 'URL of the photo to display.',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundUrl: {
      control: 'text',
      description: 'URL of the background image.',
      table: {
        type: { summary: 'string' },
      },
    },
    imageWidth: {
      control: 'number',
      description: 'Width of the photo.',
      table: {
        type: { summary: 'number' },
      },
    },
    imageHeight: {
      control: 'number',
      description: 'Height of the photo.',
      table: {
        type: { summary: 'number' },
      },
    },
    cardHeight: {
      control: 'number',
      description: 'Height of the card.',
      table: {
        type: { summary: 'number' },
      },
    },
    text: {
      control: 'text',
      description: 'Optional text displayed on the card.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PhotoCard>;

export const WithText: Story = {
  args: {
    text: 'Чому мені можна довіряти?',
    photoUrl: '/images/temp/photo-expert.png',
    backgroundUrl: '/images/backgrounds/expert-bg.svg',
    imageWidth: 362,
    imageHeight: 600,
    cardHeight: 744,
  },
};

export const WithoutText: Story = {
  args: {
    photoUrl: '/images/temp/photo-hero.png',
    backgroundUrl: '/images/backgrounds/hero-photocard-bg.svg',
    imageWidth: 512,
    imageHeight: 764,
    cardHeight: 824,
  },
};
