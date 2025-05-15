'use client';

import 'keen-slider/keen-slider.min.css';

import {
  Children,
  isValidElement,
  type PropsWithChildren,
  useMemo,
} from 'react';

import { PaginationDots } from '@/components/PaginationDots';
import { SLIDE_CLASSNAME, SLIDER_CLASSNAME } from '@/styles/constants';
import { generateRandomId } from '@/utils/generateRandomId';

import { CarouselNavButtons } from './components/CarouselNavButtons';
import { useControlledCarousel } from './hooks/useControlledCarousel';

const ControlledCarousel = ({ children }: PropsWithChildren<{}>) => {
  const sliderId = useMemo(() => generateRandomId(), []);

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
    <div className="relative">
      <CarouselNavButtons
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
        onPreviousSlide={handlePreviousSlide}
        onNextSlide={handleNextSlide}
      />

      <div ref={sliderRef} className={SLIDER_CLASSNAME}>
        {validChildren.map((child, index) => (
          <div key={`${sliderId}-slide-${index}`} className={SLIDE_CLASSNAME}>
            {child}
          </div>
        ))}
      </div>

      <PaginationDots
        total={validChildren.length}
        current={currentSlideIndex}
        onDotClick={goToSlide}
        className="mt-4 hidden mobile:flex"
      />
    </div>
  );
};

export default ControlledCarousel;
