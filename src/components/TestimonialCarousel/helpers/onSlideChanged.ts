import { KeenSliderInstance } from 'keen-slider';
import { Dispatch, SetStateAction } from 'react';

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
    const maxIndex = slider.track.details.maxIdx;

    setCurrentSlideIndex(index);
    setIsFirstSlide(index === 0);
    setIsLastSlide(index === maxIndex);
  };
