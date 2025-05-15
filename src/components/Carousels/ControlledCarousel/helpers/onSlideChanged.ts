import { KeenSliderInstance } from 'keen-slider';
import { Dispatch, SetStateAction } from 'react';

import { SLIDER_LEFT_SHIFT, SLIDER_RIGHT_SHIFT } from '@/lib/constants';

interface OnSlideChangedParams {
  setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
  setIsFirstSlide: Dispatch<SetStateAction<boolean>>;
  setIsLastSlide: Dispatch<SetStateAction<boolean>>;
}

export const createOnSlideChanged =
  ({
    setCurrentSlideIndex,
    setIsFirstSlide,
    setIsLastSlide,
  }: OnSlideChangedParams) =>
  (slider: KeenSliderInstance) => {
    const index = slider.track.details.rel;
    const maxIndex = slider.track.details.maxIdx - SLIDER_RIGHT_SHIFT;

    setCurrentSlideIndex(index);
    setIsFirstSlide(index === SLIDER_LEFT_SHIFT);
    setIsLastSlide(index === maxIndex);
  };
