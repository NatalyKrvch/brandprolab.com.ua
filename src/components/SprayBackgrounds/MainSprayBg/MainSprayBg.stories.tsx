import type { Meta, StoryObj } from '@storybook/react';

import MainSprayBg from '.';

const meta: Meta<typeof MainSprayBg> = {
  title: 'Components/SprayBackground',
  component: MainSprayBg,
  tags: ['autodocs'],
  args: {
    className: 'top-[-100px] left-[-100px] w-[600px] h-[600px]',
  },
};

export default meta;

type Story = StoryObj<typeof MainSprayBg>;

export const Default: Story = {};
