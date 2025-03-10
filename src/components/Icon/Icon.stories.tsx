import type { Meta, StoryObj } from '@storybook/react';

import { IconClassType } from '@/styles/constants';

import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    iconURL: {
      control: 'text',
      description: 'URL of the icon image (SVG or raster).',
      table: { type: { summary: 'string' } },
    },
    iconAlt: {
      control: 'text',
      description: 'Alt text for the image.',
      table: { type: { summary: 'string' } },
    },
    circleColor: {
      control: 'text',
      description: 'Tailwind CSS class for circle background.',
      table: { type: { summary: 'string' } },
    },
    type: {
      control: { type: 'radio' },
      options: [IconClassType.SERVICES, IconClassType.EXPERTISE],
      description: 'Predefined size and offset classes.',
      table: { type: { summary: 'SERVICES | EXPERTISE' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const ServicesIcon: Story = {
  args: {
    iconURL: '/icons/cards/check.svg',
    iconAlt: 'Check icon',
    circleColor: 'bg-teal-darkOpacity',
    type: IconClassType.SERVICES,
  },
};

export const ExpertiseIcon: Story = {
  args: {
    iconURL: '/icons/cards/check.svg',
    iconAlt: 'Check icon',
    circleColor: 'bg-teal-light',
    type: IconClassType.EXPERTISE,
  },
};
