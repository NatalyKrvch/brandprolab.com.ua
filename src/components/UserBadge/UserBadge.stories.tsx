import type { Meta, StoryObj } from '@storybook/react';

import UserBadge from './UserBadge';

const meta: Meta<typeof UserBadge> = {
  title: 'Components/UserBadge',
  component: UserBadge,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    userName: {
      control: 'text',
      description: 'The name of the user to display.',
      table: {
        type: { summary: 'string' },
      },
    },
    userPhotoUrl: {
      control: 'text',
      description: 'The URL of the user’s profile image.',
      table: {
        type: { summary: 'string' },
      },
    },
    userLink: {
      control: 'text',
      description:
        'The external link to the user’s profile. If empty, the badge is not clickable.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserBadge>;

export const WithLink: Story = {
  args: {
    userName: 'Jane Doe',
    userPhotoUrl:
      'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
    userLink: 'https://example.com/profile/jane',
  },
};

export const WithoutLink: Story = {
  args: {
    userName: 'Anastasia Smith',
    userPhotoUrl:
      'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
    userLink: '',
  },
};
