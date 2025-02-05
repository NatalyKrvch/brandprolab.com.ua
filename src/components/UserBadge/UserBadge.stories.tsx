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
      description: 'Name of the user displayed next to the badge.',
      table: {
        type: { summary: 'string' },
      },
    },
    userPhotoUrl: {
      control: 'text',
      description: `URL of the user's profile picture.`,
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserBadge>;

export const Default: Story = {
  args: {
    userName: 'John Doe',
    userPhotoUrl: 'https://via.placeholder.com/100',
  },
};
