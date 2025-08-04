import type { Meta, StoryObj } from '@storybook/react';

import ServiceCardFront from '../ServiceCardFront/ServiceCardFront';

const meta: Meta<typeof ServiceCardFront> = {
  title: 'Components/ServiceCardFront',
  component: ServiceCardFront,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    iconURL: {
      control: 'text',
      description: 'The URL of the icon displayed at the top right.',
      table: {
        type: { summary: 'string' },
      },
    },
    header: {
      control: 'text',
      description: 'The main title of the card.',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: 'A label displayed under the title.',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'The main descriptive text of the card.',
      table: {
        type: { summary: 'string' },
      },
    },
    callToActionText: {
      control: 'text',
      description:
        'A call-to-action displayed as underlined text at the bottom.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceCardFront>;

export const Default: Story = {
  args: {
    iconURL: '/icons/cards/hand.svg',
    header: 'Why Choose Us?',
    label: 'Our Expertise',
    description:
      'We provide professional services with years of experience and a passion for excellence.',
    callToActionText: 'Learn More',
  },
};
