import type { Meta, StoryObj } from '@storybook/react';

import TestimonialCarousel from './TestimonialCarousel';
import type { TestimonialCarouselProps } from './types';

const meta: Meta<typeof TestimonialCarousel> = {
  title: 'Components/TestimonialCarousel',
  component: TestimonialCarousel,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    testimonials: {
      description:
        'An array of testimonial objects to display in the carousel.',
      table: {
        type: {
          summary: 'Array<Testimonial>',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialCarousel>;

export const Default: Story = {
  args: {
    testimonials: [
      {
        text: 'The team was amazing to work with! Highly professional and dedicated.',
        clientName: 'Anna Kovalchuk',
        clientPhotoUrl:
          'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
        clientLink: 'https://linkedin.com/in/annakovalchuk',
      },
      {
        text: 'They exceeded our expectations with the final product.',
        clientName: 'Dmytro Shevchenko',
        clientPhotoUrl:
          'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
        clientLink: 'https://linkedin.com/in/dmytroshevchenko',
      },
      {
        text: 'Great communication and smooth collaboration from start to finish.',
        clientName: 'Olena Bondarenko',
        clientPhotoUrl:
          'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
        clientLink: 'https://linkedin.com/in/olenabondarenko',
      },
      {
        text: 'The team was amazing to work with! Highly professional and dedicated.',
        clientName: 'Anna Kovalchuk',
        clientPhotoUrl:
          'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
        clientLink: 'https://linkedin.com/in/annakovalchuk',
      },
      {
        text: 'They exceeded our expectations with the final product.',
        clientName: 'Dmytro Shevchenko',
        clientPhotoUrl:
          'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
        clientLink: 'https://linkedin.com/in/dmytroshevchenko',
      },
      {
        text: 'Great communication and smooth collaboration from start to finish.',
        clientName: 'Olena Bondarenko',
        clientPhotoUrl:
          'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
        clientLink: 'https://linkedin.com/in/olenabondarenko',
      },
      {
        text: 'The team was amazing to work with! Highly professional and dedicated.',
        clientName: 'Anna Kovalchuk',
        clientPhotoUrl:
          'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
        clientLink: 'https://linkedin.com/in/annakovalchuk',
      },
      {
        text: 'They exceeded our expectations with the final product.',
        clientName: 'Dmytro Shevchenko',
        clientPhotoUrl:
          'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
        clientLink: 'https://linkedin.com/in/dmytroshevchenko',
      },
      {
        text: 'Great communication and smooth collaboration from start to finish.',
        clientName: 'Olena Bondarenko',
        clientPhotoUrl:
          'https://media.vanityfair.com/photos/659d6933b6da4325190e2751/1:1/w_1333,h_1333,c_limit/Lindsay-Lohan.jpg',
        clientLink: 'https://linkedin.com/in/olenabondarenko',
      },
    ],
  } satisfies TestimonialCarouselProps,
};
