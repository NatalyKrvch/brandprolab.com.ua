import type { Meta, StoryObj } from '@storybook/react';

import HeroTextContent from './HeroTextContent';

const meta: Meta<typeof HeroTextContent> = {
  title: 'Components/HeroTextContent',
  component: HeroTextContent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof HeroTextContent>;

export const DarkBackground: Story = {
  args: {
    iconUrl: '/icons/cards/shield.svg',
    title: 'Почни вже сьогодні',
    subtitle: 'і зроби світ кращим',
    description:
      'Це короткий опис для секції hero. Тут можна написати що завгодно.',
    buttonText: 'Дізнатись більше',
    buttonLink: '/more',
    iconClassName: 'mb-6 ml-11',
    titleClassName:
      'px-52 flex flex-col gap-4 text-52 font-bold leading-56 tracking-tight text-white',
    titleSpanClassName: '',
    subtitleClassName:
      'block text-right text-40 font-normal leading-40 tracking-normal',
    descriptionClassName: 'max-w-408 px-2 text-xl font-normal text-white',
    contentWrapperClassName: 'flex flex-col gap-10 px-11 pb-160 pt-11',
    wrapperClassName: 'bg-black p-8',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
