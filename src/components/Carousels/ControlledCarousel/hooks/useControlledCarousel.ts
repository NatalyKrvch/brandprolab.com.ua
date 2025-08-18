'use client';

import type { KeenSliderInstance, KeenSliderOptions } from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

import { SLIDER_RIGHT_SHIFT } from '@/styles/constants';

import {
  BASE_SLIDES_CONFIG,
  SLIDER_BREAKPOINTS,
} from '../configs/carouselConfig';

export const useControlledCarousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const onSlideChanged = (slider: KeenSliderInstance) => {
    const idx = slider.track.details.rel;
    const slidesCount = slider.track.details.slides.length;
    setCurrentSlideIndex(idx);
    setIsFirstSlide(idx === 0);
    setIsLastSlide(idx === slidesCount - SLIDER_RIGHT_SHIFT);
  };

  const [sliderRef, instanceRef] = useKeenSlider<
    HTMLDivElement,
    KeenSliderOptions
  >({
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
