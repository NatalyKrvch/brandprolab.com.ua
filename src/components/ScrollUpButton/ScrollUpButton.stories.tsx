import type { Meta, StoryObj } from '@storybook/react';

import ScrollUpButton from './ScrollUpButton';

const meta: Meta<typeof ScrollUpButton> = {
  title: 'Components/ScrollUpButton',
  component: ScrollUpButton,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    sectionId: 'hero',
    scrollThreshold: 100,
  },
};

export default meta;
type Story = StoryObj<typeof ScrollUpButton>;

export const Default: Story = {
  render: args => (
    <div style={{ height: '200vh', background: '#f0f0f0' }}>
      <section
        id="hero"
        style={{
          height: '100vh',
          background: '#add8e6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
        }}
      >
        Hero Section
      </section>
      <ScrollUpButton {...args} />
    </div>
  ),
};
