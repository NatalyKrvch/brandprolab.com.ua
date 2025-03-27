import type { Meta, StoryObj } from '@storybook/react';

import ControlledCarousel from './ControlledCarousel';

const meta: Meta<typeof ControlledCarousel> = {
  title: 'Components/ControlledCarousel',
  component: ControlledCarousel,
};

export default meta;
type Story = StoryObj<typeof ControlledCarousel>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto my-10 max-w-3xl py-8">
      <ControlledCarousel>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray-100 p-6 text-center text-lg font-medium"
          >
            Слайд {index + 1}
          </div>
        ))}
      </ControlledCarousel>
    </div>
  ),
};
