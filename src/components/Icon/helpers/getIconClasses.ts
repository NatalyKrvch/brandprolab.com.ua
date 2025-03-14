import { IconClassType } from '@/lib/constants';

import { IconClassSet } from '../types';

export const getIconClasses = (type: IconClassType): IconClassSet => {
  const baseCircleClass =
    'relative flex items-center justify-center rounded-full';
  const baseIconClass = 'absolute';

  switch (type) {
    case IconClassType.SERVICES:
      return {
        circleClass: `${baseCircleClass} w-[68px] h-[68px] tablet:w-[80px] tablet:h-[80px] desktop:w-[108px] desktop:h-[108px]`,
        iconClass: `${baseIconClass} w-[64px] h-[64px] tablet:w-[72px] tablet:h-[72px] desktop:w-[96px] desktop:h-[96px] translate-x-[-24px] tablet:translate-x-[-30px] desktop:translate-x-[-36px]`,
      };

    case IconClassType.EXPERTISE:
      return {
        circleClass: `${baseCircleClass} w-[68px] h-[68px] tablet:w-[80px] tablet:h-[80px] desktop:w-[64px] desktop:h-[64px]`,
        iconClass: `${baseIconClass} w-[64px] h-[64px] tablet:w-[72px] tablet:h-[72px] desktop:w-[64px] desktop:h-[64px] translate-x-[-24px] tablet:translate-x-[-30px] desktop:translate-x-[-18px]`,
      };

    case IconClassType.SOCIAL_MEDIA:
      return {
        circleClass: `${baseCircleClass} w-[36px] h-[36px] tablet:w-[42px] tablet:h-[42px] desktop:w-[48px] desktop:h-[48px]`,
        iconClass: `${baseIconClass} w-[22px] h-[22px] tablet:w-[28px] tablet:h-[28px] desktop:w-[32px] desktop:h-[32px]`,
      };

    default:
      return {
        circleClass: baseCircleClass,
        iconClass: baseIconClass,
      };
  }
};
