import clsx from 'clsx';

import { SERVICE_CARD_FULL_WIDTH_INDEX } from '@/styles/constants';

export const getFrontCardClasses = (index: number) =>
  clsx(
    'h-full max-h-462 min-h-424 w-full min_mobile:max-h-462 min_mobile:min-h-462 tablet:max-h-424 tablet:min-h-400',
    index === SERVICE_CARD_FULL_WIDTH_INDEX
      ? 'tablet:h-400 mid_tablet:col-span-2 desktop:col-span-2 desktop:h-460'
      : 'desktop:h-500 desktop:max-h-500',
  );

export const getFrontCardVariantClasses = (index: number) => {
  return index === SERVICE_CARD_FULL_WIDTH_INDEX ? 'gradient' : 'default';
};
