import { type IconClassSet, IconClassType } from '../types';

const baseCircleClass =
  'relative flex items-center justify-center rounded-full';
const baseIconClass = 'absolute';

export const iconClassMap: Record<IconClassType, IconClassSet> = {
  [IconClassType.SERVICES]: {
    circleClass: `${baseCircleClass} w-68 h-68 tablet:w-80 tablet:h-80 desktop:w-108 desktop:h-108`,
    iconClass: `${baseIconClass} w-16 h-16 tablet:w-72 tablet:h-72 desktop:w-96 desktop:h-96 -translate-x-24 tablet:-translate-x-30 desktop:-translate-x-36`,
  },

  [IconClassType.EXPERTISE]: {
    circleClass: `${baseCircleClass} w-12 h-12 tablet:w-14 tablet:h-14 desktop:w-16 desktop:h-16`,
    iconClass: `${baseIconClass} w-52 h-52 tablet:w-60 tablet:h-60 desktop:w-16 desktop:h-16 -translate-x-3 tablet:-translate-x-4 desktop:-translate-x-18`,
  },

  [IconClassType.SOCIAL_MEDIA]: {
    circleClass: `${baseCircleClass} w-36 h-36 tablet:w-42 tablet:h-42 desktop:w-12 desktop:h-12`,
    iconClass: `${baseIconClass} w-22 h-22 tablet:w-28 tablet:h-28 desktop:w-8 desktop:h-8`,
  },

  [IconClassType.SOCIAL_MEDIA_MAIN]: {
    circleClass: `${baseCircleClass} w-12 h-12 tablet:w-52 tablet:h-52 desktop:w-60 desktop:h-60`,
    iconClass: `${baseIconClass} w-28 h-28 tablet:w-8 tablet:h-8 desktop:w-36 desktop:h-36`,
  },
};
