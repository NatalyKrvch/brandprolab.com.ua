import { IconClassType } from '@/styles/constants';

import { IconClassSet } from '../types';

export const getIconClasses = (type: IconClassType): IconClassSet => {
  switch (type) {
    case IconClassType.SERVICES:
      return {
        circleClass: `
          w-[68px] h-[68px]
          tablet:w-[80px] tablet:h-[80px]
          desktop:w-[108px] desktop:h-[108px]
        `,
        iconClass: `
          w-[64px] h-[64px]
          tablet:w-[72px] tablet:h-[72px]
          desktop:w-[96px] desktop:h-[96px]
        `,
        offsets: {
          mobile: 24,
          tablet: 30,
          desktop: 36,
        },
      };

    case IconClassType.EXPERTISE:
      return {
        circleClass: `
          w-[68px] h-[68px]
          tablet:w-[80px] tablet:h-[80px]
          desktop:w-[64px] desktop:h-[64px]
        `,
        iconClass: `
          w-[64px] h-[64px]
          tablet:w-[72px] tablet:h-[72px]
          desktop:w-[64px] desktop:h-[64px]
        `,
        offsets: {
          mobile: 24,
          tablet: 30,
          desktop: 18,
        },
      };

    default:
      return {
        circleClass: '',
        iconClass: '',
        offsets: {
          mobile: 0,
          tablet: 0,
          desktop: 0,
        },
      };
  }
};
