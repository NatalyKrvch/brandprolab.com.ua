import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    fullWidth: {
      control: { type: 'boolean' },
      description:
        'If true, the container will span the full width of the screen.',
    },
    children: {
      control: { type: 'text' },
      description: 'The content to be rendered inside the container.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    fullWidth: false,
    children: (
      <div className="text-base">
        This is a default container with max-width 1224px.
      </div>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: <div className="text-base">This is a full-width container.</div>,
  },
};
