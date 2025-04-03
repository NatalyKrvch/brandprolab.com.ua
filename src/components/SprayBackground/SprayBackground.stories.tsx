import type { Meta, StoryObj } from '@storybook/react';

import SprayBackground from './SprayBackground';

const meta: Meta<typeof SprayBackground> = {
  title: 'Components/SprayBackground',
  component: SprayBackground,
  tags: ['autodocs'],
  args: {
    className: 'top-[-100px] left-[-100px] w-[600px] h-[600px]',
  },
};

export default meta;

type Story = StoryObj<typeof SprayBackground>;

export const Default: Story = {};
