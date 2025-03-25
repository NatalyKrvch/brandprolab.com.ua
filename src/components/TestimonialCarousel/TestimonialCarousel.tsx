import 'keen-slider/keen-slider.min.css';

import { useMemo } from 'react';

import { SLIDE_CLASSNAME, SLIDER_CLASSNAME } from '@/styles/constants';
import { generateRandomId } from '@/utils/generateRandomId';

import { TestimonialCard } from '../Cards/TestimonialCard';
import { CarouselNavButtons } from '../CarouselNavButtons';
import { PaginationDots } from '../PaginationDots';
import { useTestimonialCarousel } from './hooks/useTestimonialCarousel';
import { TestimonialCarouselProps } from './types';

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const sliderId = useMemo(() => generateRandomId(), []);

  const {
    sliderRef,
    currentSlideIndex,
    isFirstSlide,
    isLastSlide,
    handleNextSlide,
    handlePreviousSlide,
    goToSlide,
  } = useTestimonialCarousel();

  return (
    <div className="relative">
      <CarouselNavButtons
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
        onPreviousSlide={handlePreviousSlide}
        onNextSlide={handleNextSlide}
      />

      <div ref={sliderRef} className={SLIDER_CLASSNAME}>
        {testimonials.map((testimonial, index) => (
          <div key={`${sliderId}-slide-${index}`} className={SLIDE_CLASSNAME}>
            <TestimonialCard {...testimonial} className="h-240 desktop:h-300" />
          </div>
        ))}
      </div>

      <PaginationDots
        total={testimonials.length}
        current={currentSlideIndex}
        onDotClick={goToSlide}
        className="mt-4 hidden mobile:flex"
      />
    </div>
  );
};

export default TestimonialCarousel;
