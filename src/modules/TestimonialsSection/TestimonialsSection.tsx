'use client';

import dynamic from 'next/dynamic';

import { TestimonialCard, TestimonialModal } from '@/components';
import { normalizeText } from '@/utils';

import { useTestimonialsSection } from './hooks/useTestimonialsSection';
import type { TestimonialsSectionProps } from './types';

const ControlledCarousel = dynamic(
  () =>
    import('@/components/Carousels/ControlledCarousel').then(
      mod => mod.ControlledCarousel,
    ),
  { ssr: false },
);

const TestimonialsSection = ({
  testimonialsData,
}: TestimonialsSectionProps) => {
  const {
    title,
    normalizedTestimonials,
    selectedTestimonial,
    handleCloseModal,
    handleReadMoreClick,
  } = useTestimonialsSection(testimonialsData);

  if (!testimonialsData) return null;

  return (
    <>
      <div className="mx-14 mb-36 flex tablet:mx-120 tablet:mb-40 desktop:mx-150 desktop:mb-80">
        <h2 className="text-center text-32 font-bold leading-34 tracking-tight text-teal-dark tablet:text-left tablet:text-40 tablet:leading-none desktop:text-left desktop:text-56 desktop:leading-none">
          {normalizeText(title)}
        </h2>
      </div>

      <ControlledCarousel aria-label="Відгуки" aria-roledescription="carousel">
        {normalizedTestimonials.map(testimonial => (
          <TestimonialCard
            key={testimonial.key}
            text={testimonial.text}
            clientName={testimonial.clientName}
            clientPhotoUrl={testimonial.clientPhotoUrl}
            clientLink={testimonial.clientLink}
            onReadMore={() => handleReadMoreClick(testimonial)}
            className="h-240 w-314 tablet:h-280 tablet:w-330 desktop:h-300 desktop:w-442"
          />
        ))}
      </ControlledCarousel>

      <TestimonialModal
        isOpen={!!selectedTestimonial}
        onClose={handleCloseModal}
        testimonial={selectedTestimonial}
      />
    </>
  );
};

export default TestimonialsSection;
