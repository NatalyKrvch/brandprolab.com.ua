import { ButtonColor } from '../types';

export const buttonVariantClassMap: Record<ButtonColor, string> = {
  [ButtonColor.TEAL]:
    'bg-teal-dark text-white hover:outline-8 hover:outline-teal-darkTranslucent active:bg-black',
  [ButtonColor.WHITE]:
    'bg-white font-normal text-blue-default hover:outline-8 hover:outline-whiteOpacity active:bg-teal-light',
};
