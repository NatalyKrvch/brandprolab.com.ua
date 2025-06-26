import type { ButtonColor } from '../types';

export const buttonVariantClassMap: Record<ButtonColor, string> = {
  teal: 'bg-teal-dark text-white hover:outline-8 hover:outline-teal-darkTranslucent active:bg-black',
  white:
    'bg-white font-normal text-blue-default hover:outline-8 hover:outline-whiteOpacity active:bg-teal-light',
};
