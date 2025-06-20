'use client';

import 'keen-slider/keen-slider.min.css';

import { Children, isValidElement, type PropsWithChildren } from 'react';

import { PaginationDots } from '@/components/PaginationDots';
import { SLIDE_CLASSNAME, SLIDER_CLASSNAME } from '@/styles/constants';

import { CarouselNavButtons } from './components/CarouselNavButtons';
import { useControlledCarousel } from './hooks/useControlledCarousel';

const ControlledCarousel = ({ children }: PropsWithChildren<{}>) => {
  const {
    sliderRef,
    currentSlideIndex,
    isFirstSlide,
    isLastSlide,
    handleNextSlide,
    handlePreviousSlide,
    goToSlide,
  } = useControlledCarousel();

  const validChildren = Children.toArray(children).filter(isValidElement);

  return (
    <div className="relative" role="group" aria-roledescription="carousel">
      <CarouselNavButtons
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
        onPreviousSlide={handlePreviousSlide}
        onNextSlide={handleNextSlide}
      />

      <div ref={sliderRef} aria-live="polite" className={SLIDER_CLASSNAME}>
        {validChildren.map(child => (
          <div
            tabIndex={0}
            key={child.key}
            className={`${SLIDE_CLASSNAME} mobile:flex mobile:w-full mobile:items-center mobile:justify-center`}
          >
            {child}
          </div>
        ))}
      </div>

      <PaginationDots
        amount={validChildren.length}
        current={currentSlideIndex}
        onDotClick={goToSlide}
        className="mt-4 hidden mobile:flex"
      />
    </div>
  );
};

export default ControlledCarousel;
