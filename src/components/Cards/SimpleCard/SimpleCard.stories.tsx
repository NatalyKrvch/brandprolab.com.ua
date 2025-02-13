import type { Meta, StoryObj } from '@storybook/react';
import SimpleCard from './SimpleCard';

const meta: Meta<typeof SimpleCard> = {
  title: 'Components/SimpleCard',
  component: SimpleCard,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content inside the card.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional classes for styling.',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'select' },
      options: ['bg-white', 'bg-teal-dark', 'bg-gray-light', 'bg-red-default'],
      description: 'Background color of the card.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SimpleCard>;

export const ColoredCard: Story = {
  args: {
    children: 'This card has a colored background.',
    backgroundColor: 'bg-teal-dark',
    className: 'p-6 text-white',
  },
};
