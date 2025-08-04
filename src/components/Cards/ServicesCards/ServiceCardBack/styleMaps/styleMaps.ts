import { ServiceCardFrontVariant } from '@/components/Cards/ServicesCards';

import type { ServiceCardBackComponentsListType } from '../types';

const defaultBackStyles: ServiceCardBackComponentsListType = {
  wrapper:
    'flex h-full flex-col gap-4 bg-blue-dark p-6 tablet:p-8 mid_tablet:border-none desktop:gap-6 desktop:border-none desktop:p-10',
  header:
    'text-lg font-bold leading-5 text-teal-medium min_mobile:text-base tablet:text-2xl tablet:leading-6 mid_tablet:max-w-600 mid_tablet:text-xl desktop:max-w-600 desktop:text-2xl desktop:leading-6',
  list: 'list-disc space-y-1.5 pl-5 text-sm font-extralight leading-18 tracking-normal text-white min_mobile:text-xs tablet:text-base tablet:leading-6 mid_tablet:max-w-540 mid_tablet:text-sm mid_tablet:leading-4 desktop:max-w-544 desktop:text-lg desktop:leading-5',
};

const gradientBackStyles: ServiceCardBackComponentsListType = defaultBackStyles;

const baseBackStyles: ServiceCardBackComponentsListType = {
  wrapper:
    'flex h-full flex-col gap-4 bg-blue-dark p-6 tablet:p-8 mid_tablet:border-none desktop:gap-6 desktop:border-none desktop:pt-8 desktop:pb-7 desktop:pr-22 desktop:pl-7',
  header:
    'text-lg font-bold leading-5 text-teal-medium tablet:text-2xl tablet:leading-6 mid_tablet:max-w-600 mid_tablet:text-xl desktop:max-w-600 desktop:text-2xl desktop:leading-6',
  list: 'list-disc space-y-1.5 pl-5 text-sm font-extralight leading-18 tracking-normal text-white tablet:text-base tablet:leading-6 desktop:max-w-544 desktop:text-lg desktop:leading-5',
};

export const serviceCardBackStyleMap: Record<
  ServiceCardFrontVariant,
  ServiceCardBackComponentsListType
> = {
  [ServiceCardFrontVariant.DEFAULT]: defaultBackStyles,
  [ServiceCardFrontVariant.GRADIENT]: gradientBackStyles,
  [ServiceCardFrontVariant.BASE]: baseBackStyles,
};
