import type { Meta, StoryObj } from '@storybook/react';

import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content of the label.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
};

export const CustomText: Story = {
  args: {
    children: 'Custom Label Text',
  },
};
