import { ButtonColor } from '../types';

export const getButtonClasses = (color: ButtonColor = 'teal') => {
  const base =
    'w-full rounded-full py-3 text-xl font-medium leading-26 tracking-wide outline-none transition-all duration-300 hover:outline-offset-0 tablet:py-5 tablet:text-22 desktop:py-6 desktop:text-2xl';

  const variant =
    color === 'white'
      ? 'bg-white text-blue-default hover:outline-8 hover:outline-whiteOpacity active:bg-teal-light'
      : 'bg-teal-dark text-white hover:outline-8 hover:outline-teal-darkTranslucent active:bg-black';

  return `${base} ${variant}`;
};
