import { KeenSliderOptions } from 'keen-slider';

type SlidesConfig = NonNullable<KeenSliderOptions['slides']>;

export const BASE_SLIDES_CONFIG: SlidesConfig = {
  origin: 'center',
  perView: 1.25,
  spacing: 16,
};

export const SLIDER_BREAKPOINTS = {
  '(max-width: 480px)': {
    slides: { perView: 1, spacing: 0 },
  },

  '(min-width: 481px) and (max-width: 540px)': {
    slides: { perView: 1.5, spacing: 0, origin: 0.1 },
  },

  '(min-width: 540px) and (max-width: 600px)': {
    slides: { perView: 1.5, spacing: -40, origin: 0.1 },
  },

  '(min-width: 601px) and (max-width: 650px)': {
    slides: { perView: 1.7, spacing: 0, origin: 0.1 },
  },

  '(min-width: 651px) and (max-width: 741px)': {
    slides: { perView: 1.8, spacing: -10, origin: 0.1 },
  },

  '(min-width: 741px) and (max-width: 800px)': {
    slides: { perView: 2, spacing: 0, origin: 0.1 },
  },

  '(min-width: 801px) and (max-width: 871px)': {
    slides: { perView: 2.3, spacing: 0, origin: 0.1 },
  },

  '(min-width: 871px) and (max-width: 929px)': {
    slides: { perView: 2.5, spacing: 0, origin: 0.1 },
  },

  '(min-width: 930px) and (max-width: 980px)': {
    slides: { perView: 2.7, spacing: 0, origin: 0.1 },
  },

  '(min-width: 981px) and (max-width: 1024px)': {
    slides: { perView: 2.9, spacing: 10, origin: 0.1 },
  },

  '(min-width: 1025px) and (max-width: 1120px)': {
    slides: { perView: 3.05, spacing: -3, origin: 0.1 },
  },

  '(min-width: 1120px) and (max-width: 1151px)': {
    slides: { perView: 3.2, spacing: 0, origin: 0.1 },
  },

  '(min-width: 1151px) and (max-width: 1190px)': {
    slides: { perView: 3.09, spacing: -10, origin: 0.1 },
  },

  '(min-width: 1190px) and (max-width: 1224px)': {
    slides: { perView: 3.2, spacing: -10, origin: 0.1 },
  },

  '(min-width: 1224px) and (max-width: 1340px)': {
    slides: { perView: 2.7, spacing: 10, origin: 0.1 },
  },

  '(min-width: 1340px) and (max-width: 1420px)': {
    slides: { perView: 2.9, spacing: 20, origin: 0.1 },
  },

  '(min-width: 1420px) and (max-width: 1500px)': {
    slides: { perView: 3.09, spacing: 0, origin: 0.1 },
  },

  '(min-width: 1500px)': {
    slides: { perView: 3.35, spacing: 0, origin: 0.1 },
  },
};
