'use client';

import dynamic from 'next/dynamic';

import { TestimonialCard } from '@/components';
import { AMOUNT_OF_TESTIMONIALS_WORDS } from '@/lib/constants';
import { normalizeImageURL, normalizeText } from '@/utils';

import type { TestimonialsSectionProps } from './types';

const TestimonialsSection = ({
  testimonialsData,
}: TestimonialsSectionProps) => {
  const { title, testimonials } = testimonialsData;

  const ControlledCarousel = dynamic(
    () =>
      import('@/components/Carousels/ControlledCarousel').then(
        mod => mod.ControlledCarousel,
      ),
    { ssr: false },
  );

  return (
    <>
      <div className="mx-14 mb-36 flex tablet:mx-120 tablet:mb-40 desktop:mx-150 desktop:mb-80">
        <h2 className="text-center text-32 font-bold leading-34 tracking-tight text-teal-dark tablet:text-left tablet:text-40 tablet:leading-none desktop:text-left desktop:text-56 desktop:leading-none">
          {normalizeText(title)}
        </h2>
      </div>
      <ControlledCarousel aria-label="Відгуки" aria-roledescription="carousel">
        {testimonials.map(person => (
          <TestimonialCard
            key={person._key}
            text={normalizeText(person.review)}
            clientName={normalizeText(person.personName)}
            clientPhotoUrl={normalizeImageURL(person.smallPhoto)}
            clientLink={person.link.trim()}
            amountOfWordsToDisplay={AMOUNT_OF_TESTIMONIALS_WORDS}
            className="h-240 w-314 tablet:h-280 tablet:w-330 desktop:h-300 desktop:w-442"
          />
        ))}
      </ControlledCarousel>
    </>
  );
};

export default TestimonialsSection;
