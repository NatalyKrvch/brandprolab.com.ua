import type { Meta, StoryObj } from '@storybook/react';

import DiplomaCard from './DiplomaCard';

const meta: Meta<typeof DiplomaCard> = {
  title: 'Components/DiplomaCard',
  component: DiplomaCard,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    diplomaURL: {
      control: 'text',
      description: 'The URL of the diploma image.',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Handler triggered when the diploma is clicked.',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DiplomaCard>;

export const Vertical: Story = {
  args: {
    diplomaURL:
      'https://media.vanityfair.com/photos/60073e65d507f0e0031b84c5/master/w_2560%2Cc_limit/VF0321_Cover_SUB-OPENER.png',
  },
};

export const Horizontal: Story = {
  args: {
    diplomaURL:
      'https://media.vanityfair.com/photos/63e561bc4d9ea7ac2d152348/16:9/w_5791,h_3257,c_limit/VU0323_Cover_EdLetterPage.jpg',
  },
};
