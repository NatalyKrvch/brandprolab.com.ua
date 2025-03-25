import { KeenSliderOptions } from 'keen-slider';

import {
  DESKTOP_MEDIA_QUERY,
  MID_TABLET_MEDIA_QUERY,
  MIN_MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from '@/styles/constants';

type SlidesConfig = NonNullable<KeenSliderOptions['slides']>;

export const BASE_SLIDES_CONFIG: SlidesConfig = {
  origin: 'center',
  perView: 1,
  spacing: 16,
};

export const SLIDER_BREAKPOINTS = {
  [MIN_MOBILE_MEDIA_QUERY]: {
    slides: { perView: 1.5, spacing: 16 },
  },
  [TABLET_MEDIA_QUERY]: {
    slides: { perView: 1.5, spacing: 20 },
  },
  [MID_TABLET_MEDIA_QUERY]: {
    slides: { perView: 2.5, spacing: 20 },
  },
  [DESKTOP_MEDIA_QUERY]: {
    slides: { perView: 3.5, spacing: 24 },
  },
};
