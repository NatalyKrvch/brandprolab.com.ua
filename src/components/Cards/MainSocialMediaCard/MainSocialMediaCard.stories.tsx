import type { Meta, StoryObj } from '@storybook/react';

import MainSocialMediaCard from './MainSocialMediaCard';
import { MainSocialMediaCardProps } from './types';

const meta: Meta<typeof MainSocialMediaCard> = {
  title: 'Components/MainSocialMediaCard',
  component: MainSocialMediaCard,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    desktopPhotoURL: {
      control: 'text',
      description: 'URL of the desktop version of the photo.',
      table: { type: { summary: 'string' } },
    },
    tabletPhotoURL: {
      control: 'text',
      description: 'URL of the tablet version of the photo.',
      table: { type: { summary: 'string' } },
    },
    mobilePhotoURL: {
      control: 'text',
      description: 'URL of the mobile version of the photo (fallback).',
      table: { type: { summary: 'string' } },
    },
    iconURL: {
      control: 'text',
      description: 'URL of the social media icon.',
      table: { type: { summary: 'string' } },
    },
    platformName: {
      control: 'text',
      description: 'Name of the social media platform.',
      table: { type: { summary: 'string' } },
    },
    description: {
      control: 'text',
      description: 'Short description text under the title.',
      table: { type: { summary: 'string' } },
    },
    platformURL: {
      control: 'text',
      description: 'Link URL to the platform page.',
      table: { type: { summary: 'string' } },
    },
  },
};

export default meta;

type Story = StoryObj<MainSocialMediaCardProps>;

export const Default: Story = {
  args: {
    desktopPhotoURL: '/images/temp/photo_desktop.png',
    tabletPhotoURL: '/images/temp/photo_tablet.png',
    mobilePhotoURL: '/images/temp/photo_mobile.png',
    iconURL: '/icons/cards/socialMedia/insta.svg',
    platformName: 'Facebook',
    description: 'Connect with friends and the world around you.',
    platformURL: 'https://www.facebook.com',
  },
};
