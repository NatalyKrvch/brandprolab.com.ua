import { IconClassType } from '@/components/Icon';

import {
  type ServiceCardComponentsListType,
  ServiceCardFrontVariant,
} from '../types';

const defaultStyles: ServiceCardComponentsListType = {
  wrapper:
    'group flex flex-col gap-4 p-7 tablet:gap-0 mid_tablet:gap-0 desktop:gap-0 desktop:p-8',

  background:
    'bg-white mid_tablet:hover:bg-gradient-to-b mid_tablet:hover:from-white mid_tablet:hover:via-white mid_tablet:hover:to-gray-light desktop:hover:bg-gradient-to-b desktop:hover:from-white desktop:hover:via-white desktop:hover:to-gray-light',

  header:
    'max-w-300 px-1 text-26 font-bold leading-26 tablet:max-w-350 tablet:text-28 tablet:leading-7 desktop:max-w-350 desktop:text-32 desktop:leading-8 text-black',

  headerLayout: 'flex flex-col mb-3 desktop:mb-4',

  iconContainer: 'flex items-center justify-end',

  description:
    'px-1 pt-3 text-base font-normal leading-22 tablet:max-w-[500px] desktop:max-w-[500px] desktop:text-lgctext-black',

  label:
    'text-14 font-normal leading-14 tracking-normal text-blue-dark tablet:text-base tablet:leading-4 desktop:px-5 desktop:text-lg desktop:leading-18',

  underlined:
    'font-bold desktop:text-lg mid_tablet:group-hover:text-blue-dark desktop:group-hover:text-blue-dark',

  icon: '',

  iconType: IconClassType.SERVICES,

  whiteIcon: 'hidden',

  button: 'px-1 text-left desktop:px-2',
};

const gradientStyles: ServiceCardComponentsListType = {
  wrapper:
    'group flex flex-col gap-4 p-7 tablet:gap-0 mid_tablet:gap-0 desktop:gap-0 desktop:p-8',

  background:
    'mid_tablet:bg-gradient-to-r mid_tablet:from-teal-dark mid_tablet:to-blue-default desktop:bg-gradient-to-r desktop:from-teal-dark desktop:to-blue-default',

  header:
    'max-w-300 px-1 text-26 font-bold leading-26 tablet:max-w-350 tablet:text-28 tablet:leading-7 desktop:max-w-350 desktop:text-32 desktop:leading-8 mid_tablet:text-3xl mid_tablet:text-white desktop:text-4xl desktop:text-white',
  headerLayout: 'mb-3 desktop:mb-4',

  iconContainer: 'flex items-center justify-end',

  description:
    'px-1 pt-3 text-base font-normal leading-22 tablet:max-w-[500px] desktop:max-w-[500px] desktop:text-lg mid_tablet:text-white desktop:text-white',

  label:
    'text-14 font-normal leading-14 tracking-normal text-blue-dark tablet:text-base tablet:leading-4 desktop:px-5 desktop:text-lg desktop:leading-18',

  underlined:
    'font-bold mid_tablet:text-white desktop:text-lg desktop:text-white',

  icon: 'block mid_tablet:hidden desktop:hidden',

  iconType: IconClassType.SERVICES,

  whiteIcon: 'hidden mid_tablet:block desktop:block',

  button: 'px-1 text-left desktop:px-2',
};

const baseStyles: ServiceCardComponentsListType = {
  wrapper: 'group w-full flex flex-col pt-22 pr-5 pl-7 pb-7',

  background:
    'bg-white mid_tablet:hover:bg-gradient-to-b mid_tablet:hover:from-white mid_tablet:hover:via-white mid_tablet:hover:to-gray-light desktop:hover:bg-gradient-to-b desktop:hover:from-white desktop:hover:via-white desktop:hover:to-gray-light',

  header:
    'max-w-300 font-bold text-22 leading-6 tablet:max-w-350 desktop:max-w-350 desktop:text-2xl desktop:leading-26 text-black',

  headerLayout: 'flex flex-row-reverse items-center justify-between',

  iconContainer: '',

  description:
    'pt-7 pr-6 text-base font-normal leading-5 tracking-wide tracking-normal tablet:pt-8 tablet:pr-72 tablet:max-w-[500px] desktop:pt-6 desktop:max-w-[500px] desktop:text-lg desktop:leading-6 text-black',

  underlined:
    'font-bold leading-4 desktop:text-base mid_tablet:group-hover:text-blue-dark desktop:group-hover:text-blue-dark',

  icon: 'inline align-middle mr-2',

  iconType: IconClassType.EXPERTISE,

  whiteIcon: '',

  label: '',

  button: 'text-left',
};

export const serviceCardFrontStyleMap: Record<
  ServiceCardFrontVariant,
  ServiceCardComponentsListType
> = {
  [ServiceCardFrontVariant.DEFAULT]: defaultStyles,
  [ServiceCardFrontVariant.GRADIENT]: gradientStyles,
  [ServiceCardFrontVariant.BASE]: baseStyles,
};

export const serviceCardFrontBorderColorMap: Record<
  ServiceCardFrontVariant,
  string
> = {
  [ServiceCardFrontVariant.DEFAULT]: 'border-teal-dark',
  [ServiceCardFrontVariant.GRADIENT]:
    'border-teal-dark mid_tablet:border-none desktop:border-none',
  [ServiceCardFrontVariant.BASE]: 'border-gray-medium',
};
