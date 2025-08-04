import type { Meta, StoryObj } from '@storybook/react';

import ServiceCardBack from '../ServiceCardBack/ServiceCardBack';

const meta: Meta<typeof ServiceCardBack> = {
  title: 'Components/ServiceCardBack',
  component: ServiceCardBack,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    header: {
      control: 'text',
      description: 'The title displayed at the top of the card.',
      table: {
        type: { summary: 'string' },
      },
    },
    list: {
      control: { type: 'object' },
      description: 'A list of items displayed in the card.',
      table: {
        type: { summary: 'string[]' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCardBack>;

export const Default: Story = {
  args: {
    header: 'Основні переваги',
    list: [
      'Глибокий аналіз',
      'Професійний підхід',
      'Перевірена інформація',
      'Експертні висновки',
    ],
  },
};
