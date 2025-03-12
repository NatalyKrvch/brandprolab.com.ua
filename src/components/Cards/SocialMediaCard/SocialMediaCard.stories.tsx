import type { Meta, StoryObj } from '@storybook/react';

import { MainSocialCardColor } from '@/styles/constants';

import SocialMediaCard from './SocialMediaCard';

const meta: Meta<typeof SocialMediaCard> = {
  title: 'Components/SocialMediaCard',
  component: SocialMediaCard,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    iconURL: {
      control: 'text',
      description: 'The URL of the icon to be displayed inside the circle.',
      table: { type: { summary: 'string' } },
    },
    socialMediaURL: {
      control: 'text',
      description: 'URL to open when card is clicked.',
      table: { type: { summary: 'string' } },
    },
    label: {
      control: 'text',
      description: 'Title or label of the social media platform.',
      table: { type: { summary: 'string' } },
    },
    description: {
      control: 'text',
      description: 'Short description or message for the card.',
      table: { type: { summary: 'string' } },
    },
    mainColor: {
      control: { type: 'select' },
      options: Object.values(MainSocialCardColor),
      description: 'Main theme color for text and icon background.',
      table: { type: { summary: 'MainSocialCardColor' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialMediaCard>;

export const Default: Story = {
  args: {
    iconURL: '/icons/cards/socialMedia/insta.svg',
    socialMediaURL: 'https://www.instagram.com/',
    label: 'Instagram',
    description: 'Stay updated with the latest design & brand tips.',
    mainColor: MainSocialCardColor.BLUE,
  },
};
