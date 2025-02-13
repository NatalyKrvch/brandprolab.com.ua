import type { Meta, StoryObj } from '@storybook/react';

import List from './List';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    list: {
      control: {
        type: 'object',
      },
      description: 'An array of strings representing list items.',
      table: {
        type: { summary: 'string[]' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    list: ['High quality services', 'Affordable pricing', 'Friendly support'],
  },
};

export const CustomizableList: Story = {
  args: {
    list: ['Custom item 1', 'Custom item 2'],
  },
};
