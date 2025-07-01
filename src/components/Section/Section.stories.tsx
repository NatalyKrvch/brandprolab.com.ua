import type { Meta, StoryObj } from '@storybook/react';

import { ContainerVariant } from '@/components/Container';

import Section from './Section';

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    containerVariant: {
      control: { type: 'select' },
      options: Object.values(ContainerVariant),
    },
    className: {
      control: 'text',
    },
    containerClassName: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    children: <p>Default section content</p>,
  },
};

export const FullWidthContainer: Story = {
  args: {
    containerVariant: ContainerVariant.FULL,
    children: <p>Full width content</p>,
  },
};

export const WithCustomClasses: Story = {
  args: {
    className: 'bg-gray-100 py-8',
    containerClassName: 'border border-dashed border-red-500',
    children: <p>Section with custom styles</p>,
  },
};
