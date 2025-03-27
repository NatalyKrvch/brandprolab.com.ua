import type { Meta, StoryObj } from '@storybook/react';

import EndlessCarousel from './EndlessCarousel';

const meta: Meta<typeof EndlessCarousel> = {
  title: 'Components/EndlessCarousel',
  component: EndlessCarousel,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof EndlessCarousel>;

export const Default: Story = {
  args: {
    children: Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className="bg-primary mx-4 rounded-md px-6 py-4 text-white shadow"
        data-testid="carousel-item"
      >
        Відгук #{i + 1}
      </div>
    )),
  },
};

export const FastAndGradient: Story = {
  args: {
    speed: 100,
    gradient: true,
    children: Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className="bg-secondary mx-4 rounded-md px-6 py-4 text-white shadow"
      >
        Відгук #{i + 1}
      </div>
    )),
  },
};
