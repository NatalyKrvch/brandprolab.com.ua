import type { Meta, StoryObj } from '@storybook/react';

import CarouselNavButtons from './CarouselNavButtons';

const meta: Meta<typeof CarouselNavButtons> = {
  title: 'Components/CarouselNavButtons',
  component: CarouselNavButtons,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    isFirstSlide: {
      control: 'boolean',
      description: 'Whether the current slide is the first one.',
    },
    isLastSlide: {
      control: 'boolean',
      description: 'Whether the current slide is the last one.',
    },
    onPreviousSlide: {
      action: 'Previous clicked',
      description: 'Callback when previous button is clicked.',
    },
    onNextSlide: {
      action: 'Next clicked',
      description: 'Callback when next button is clicked.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CarouselNavButtons>;

const StoryWrapper = (args: any) => (
  <div className="relative h-[200px] w-[1200px] bg-gray-200">
    <CarouselNavButtons {...args} />
  </div>
);

export const Default: Story = {
  args: {
    isFirstSlide: false,
    isLastSlide: false,
  },
  render: StoryWrapper,
};

export const OnlyNextVisible: Story = {
  args: {
    isFirstSlide: true,
    isLastSlide: false,
  },
  render: StoryWrapper,
};

export const OnlyPreviousVisible: Story = {
  args: {
    isFirstSlide: false,
    isLastSlide: true,
  },
  render: StoryWrapper,
};

export const NoneVisible: Story = {
  args: {
    isFirstSlide: true,
    isLastSlide: true,
  },
  render: StoryWrapper,
};
