import { ROUNDED_CLASSES } from '@/styles/constants';

export const getVideoWrapperClass = () =>
  `relative overflow-hidden h-210 w-280 tablet:h-300 tablet:w-400 desktop:h-360 desktop:w-480 ${ROUNDED_CLASSES}`;

export const getVideoOverlayWrapperClass = (isPlaying: boolean) =>
  `absolute inset-0 transition-opacity duration-500 ${
    isPlaying ? 'pointer-events-none opacity-0' : 'opacity-100'
  }`;

export const getVideoOverlayBackgroundClass = () =>
  `absolute inset-0 bg-teal-fogOpacity opacity-50 ${ROUNDED_CLASSES}`;

export const getThumbnailImageClass = () =>
  `h-full w-full object-cover ${ROUNDED_CLASSES}`;

export const getPlayButtonWrapperClass = () =>
  'absolute inset-0 flex items-center justify-center';

export const getPlayButtonClass = () =>
  'rounded-full shadow-lg transition hover:scale-105';

export const getPlayIconClass = () => 'h-20 w-20';

export const getIframeClass = () => `h-full w-full ${ROUNDED_CLASSES}`;
