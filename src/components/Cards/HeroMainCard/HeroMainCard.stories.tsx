import type { Meta, StoryObj } from '@storybook/react';

import HeroMainCard from './HeroMainCard';

const meta: Meta<typeof HeroMainCard> = {
  title: 'Cards/HeroMainCard',
  component: HeroMainCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeroMainCard>;

export const Primary: Story = {
  args: {
    title: 'Відкрий нові можливості',
    subtitle: 'з нашим сервісом',
    description:
      'Це головна картка з яскравим заголовком, підзаголовком і кнопкою дії.',
    buttonText: 'Спробувати зараз',
    buttonLink: '/try-now',
    iconURL: '/icons/rocket.svg',
  },
};
