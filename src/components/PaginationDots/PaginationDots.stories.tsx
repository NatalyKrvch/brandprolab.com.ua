import type { Meta, StoryObj } from '@storybook/react';

import PaginationDots from './PaginationDots';
import PaginationDotsWithState from './PaginationDotsWithState';

const meta: Meta<typeof PaginationDots> = {
  title: 'Components/PaginationDots',
  component: PaginationDots,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    total: {
      control: { type: 'number' },
      description: 'Total number of dots',
    },
    current: {
      control: { type: 'number' },
      description: 'Currently active dot index',
    },
    onDotClick: {
      action: 'dot clicked',
      description: 'Click handler for dots',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationDots>;

export const Default: Story = {
  render: args => <PaginationDotsWithState {...args} />,
  args: {
    total: 5,
    current: 0,
  },
};
