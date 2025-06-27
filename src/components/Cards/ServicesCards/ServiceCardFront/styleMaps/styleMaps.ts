import clsx from 'clsx';

import {
  ServiceCardComponentsListType,
  ServiceCardFrontVariant,
} from '../types';

export const serviceCardFrontStyleMap: Record<
  ServiceCardFrontVariant,
  ServiceCardComponentsListType
> = {
  [ServiceCardFrontVariant.DEFAULT]: {
    background:
      'bg-white mid_tablet:hover:bg-gradient-to-b mid_tablet:hover:from-white mid_tablet:hover:via-white mid_tablet:hover:to-gray-light desktop:hover:bg-gradient-to-b desktop:hover:from-white desktop:hover:via-white desktop:hover:to-gray-light',

    header: clsx(
      'max-w-300 px-1 text-26 font-bold leading-26 tablet:max-w-350 tablet:text-28 tablet:leading-7 desktop:max-w-350 desktop:text-32 desktop:leading-8',
      'text-black',
    ),

    description: clsx(
      'px-1 pt-3 text-base font-normal leading-22 tablet:max-w-[500px] desktop:max-w-[500px] desktop:text-lg',
      'text-black',
    ),

    label:
      'text-14 font-normal leading-14 tracking-normal text-blue-dark tablet:text-base tablet:leading-4 desktop:px-5 desktop:text-lg desktop:leading-18',

    underlined:
      'font-bold desktop:text-lg mid_tablet:group-hover:text-blue-dark desktop:group-hover:text-blue-dark',

    icon: 'block',

    whiteIcon: 'hidden',
  },

  [ServiceCardFrontVariant.GRADIENT]: {
    background:
      'mid_tablet:bg-gradient-to-r mid_tablet:from-teal-dark mid_tablet:to-blue-default desktop:bg-gradient-to-r desktop:from-teal-dark desktop:to-blue-default',

    header: clsx(
      'max-w-300 px-1 text-26 font-bold leading-26 tablet:max-w-350 tablet:text-28 tablet:leading-7 desktop:max-w-350 desktop:text-32 desktop:leading-8',
      'mid_tablet:text-3xl mid_tablet:text-white desktop:text-4xl desktop:text-white',
    ),

    description: clsx(
      'px-1 pt-3 text-base font-normal leading-22 tablet:max-w-[500px] desktop:max-w-[500px] desktop:text-lg',
      'mid_tablet:text-white desktop:text-white',
    ),

    label:
      'text-14 font-normal leading-14 tracking-normal text-blue-dark tablet:text-base tablet:leading-4 desktop:px-5 desktop:text-lg desktop:leading-18',

    underlined:
      'font-bold mid_tablet:text-white desktop:text-lg desktop:text-white',

    icon: 'block mid_tablet:hidden desktop:hidden',

    whiteIcon: 'hidden mid_tablet:block desktop:block',
  },
};

export const serviceCardFrontBorderColorMap: Record<
  ServiceCardFrontVariant,
  string
> = {
  [ServiceCardFrontVariant.DEFAULT]: 'border-teal-dark',
  [ServiceCardFrontVariant.GRADIENT]:
    'border-teal-dark mid_tablet:border-none desktop:border-none',
};
