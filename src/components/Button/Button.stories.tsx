import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content inside the button.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    color: {
      control: { type: 'radio' },
      options: ['white', 'teal'],
      description: 'Defines the button color.',
      table: {
        type: { summary: 'white | teal' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const White: Story = {
  args: {
    children: 'White Button',
    color: 'white',
  },
};

export const Teal: Story = {
  args: {
    children: 'Teal Button',
    color: 'teal',
  },
};
