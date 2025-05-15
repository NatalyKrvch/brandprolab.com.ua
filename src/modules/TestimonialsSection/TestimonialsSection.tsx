'use client';

import dynamic from 'next/dynamic';

import { TestimonialCard } from '@/components';
import { urlFor } from '@/sanity/lib/image';

import { TestimonialsSectionProps } from './types';

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
    <section>
      <div className="mx-14 mb-36 flex tablet:mx-120 tablet:mb-40 desktop:mx-150 desktop:mb-80">
        <h2 className="text-center text-32 font-bold leading-34 tracking-tight text-teal-dark tablet:text-left tablet:text-40 tablet:leading-none desktop:text-left desktop:text-56 desktop:leading-none">
          {title}
        </h2>
      </div>
      <ControlledCarousel>
        {testimonials.map(person => {
          const smallPhotoSrc = urlFor(person.smallPhoto).url();
          return (
            <TestimonialCard
              key={person._key}
              text={person.review}
              clientName={person.personName}
              clientPhotoUrl={smallPhotoSrc}
              clientLink={person.link}
              className="h-300"
            />
          );
        })}
      </ControlledCarousel>
    </section>
  );
};

export default TestimonialsSection;
