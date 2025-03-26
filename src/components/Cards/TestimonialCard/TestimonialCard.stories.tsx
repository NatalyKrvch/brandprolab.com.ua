import type { Meta, StoryObj } from '@storybook/react';

import TestimonialCard from './TestimonialCard';

const meta: Meta<typeof TestimonialCard> = {
  title: 'Components/TestimonialCard',
  component: TestimonialCard,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The testimonial text content.',
      table: {
        type: { summary: 'string' },
      },
    },
    clientName: {
      control: 'text',
      description: 'The name of the client giving the testimonial.',
      table: {
        type: { summary: 'string' },
      },
    },
    clientPhotoUrl: {
      control: 'text',
      description: 'The URL of the client’s profile image.',
      table: {
        type: { summary: 'string' },
      },
    },
    clientLink: {
      control: 'text',
      description:
        'A link to the client’s profile. If empty, the badge is not clickable.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const WithClientLink: Story = {
  args: {
    text: 'This is an amazing service! Highly recommend it to everyone.',
    clientName: 'Jane Doe',
    clientPhotoUrl:
      'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
    clientLink: 'https://example.com/profile/jane',
  },
};

export const NoClientInfo: Story = {
  args: {
    text: 'Great product! It exceeded my expectations.',
    clientName: '',
    clientPhotoUrl: '',
    clientLink: '',
  },
};
