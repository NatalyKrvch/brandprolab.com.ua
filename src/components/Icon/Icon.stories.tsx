import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['s', 'm', 'l'],
      description: 'Defines the size of the icon.',
      table: {
        type: { summary: 's | m | l' },
      },
    },
    iconURL: {
      control: 'text',
      description: 'The URL of the icon image.',
      table: {
        type: { summary: 'string' },
      },
    },
    iconAlt: {
      control: 'text',
      description: 'Alternative text for the icon.',
      table: {
        type: { summary: 'string' },
      },
    },
    isIconCentered: {
      control: 'boolean',
      description: 'Determines if the icon is centered.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    circleColor: {
      control: 'text',
      description: 'Defines the background color of the circle.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Small: Story = {
  args: {
    size: 's',
    iconURL: '/icons/nav/hand.svg',
    iconAlt: 'Small Icon',
    isIconCentered: true,
    circleColor: 'bg-red-500',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    iconURL: '/icons/nav/hand.svg',
    iconAlt: 'Medium Icon',
    isIconCentered: false,
    circleColor: 'bg-blue-500',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    iconURL: '/icons/nav/hand.svg',
    iconAlt: 'Large Icon',
    circleColor: 'bg-teal-darkOpacity',
  },
};
