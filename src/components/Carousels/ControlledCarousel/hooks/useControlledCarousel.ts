'use client';

import type { KeenSliderOptions } from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

import {
  BASE_SLIDES_CONFIG,
  SLIDER_BREAKPOINTS,
} from '../configs/carouselConfig';
import { createOnSlideChanged } from '../helpers/onSlideChanged';

export const useControlledCarousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const onSlideChanged = createOnSlideChanged({
    setCurrentSlideIndex,
    setIsFirstSlide,
    setIsLastSlide,
  });

  const [sliderRef, instanceRef] = useKeenSlider<
    HTMLDivElement,
    KeenSliderOptions
  >({
    mode: 'free-snap',
    slides: BASE_SLIDES_CONFIG,
    breakpoints: SLIDER_BREAKPOINTS,
    slideChanged: onSlideChanged,
  });

  const goToSlide = (index: number) => {
    instanceRef.current?.moveToIdx(index);
  };

  const handleNextSlide = () => {
    instanceRef.current?.next();
  };

  const handlePreviousSlide = () => {
    instanceRef.current?.prev();
  };

  return {
    sliderRef,
    currentSlideIndex,
    isFirstSlide,
    isLastSlide,
    handleNextSlide,
    handlePreviousSlide,
    goToSlide,
  };
};
