import { IconClassType } from '@/lib/constants';

import { IconClassSet } from '../types';

export const getIconClasses = (type: IconClassType): IconClassSet => {
  const baseCircleClass =
    'relative flex items-center justify-center rounded-full';
  const baseIconClass = 'absolute';

  switch (type) {
    case IconClassType.SERVICES:
      return {
        circleClass: `${baseCircleClass} w-68 h-68 tablet:w-80 tablet:h-80 desktop:w-108 desktop:h-108`,
        iconClass: `${baseIconClass} w-64 h-64 tablet:w-72 tablet:h-72 desktop:w-96 desktop:h-96 -translate-x-24 tablet:-translate-x-30 desktop:-translate-x-36`,
      };

    case IconClassType.EXPERTISE:
      return {
        circleClass: `${baseCircleClass} w-68 h-68 tablet:w-80 tablet:h-80 desktop:w-64 desktop:h-64`,
        iconClass: `${baseIconClass} w-64 h-64 tablet:w-72 tablet:h-72 desktop:w-64 desktop:h-64 -translate-x-24 tablet:-translate-x-30 desktop:-translate-x-18`,
      };

    case IconClassType.SOCIAL_MEDIA:
      return {
        circleClass: `${baseCircleClass} w-36 h-36 tablet:w-42 tablet:h-42 desktop:w-48 desktop:h-48`,
        iconClass: `${baseIconClass} w-22 h-22 tablet:w-28 tablet:h-28 desktop:w-32 desktop:h-32`,
      };

    default:
      return {
        circleClass: baseCircleClass,
        iconClass: baseIconClass,
      };
  }
};
