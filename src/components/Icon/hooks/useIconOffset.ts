import { useMediaQuery } from '@/hooks/useMediaQuery';
import { IconClassType } from '@/lib/constants';

import { getIconClasses } from '../helpers/getIconClasses';

export const useIconOffset = (type: IconClassType) => {
  const isTablet = useMediaQuery('(min-width: 600px) and (max-width: 1223px)');
  const isDesktop = useMediaQuery('(min-width: 1224px)');

  const { offsets } = getIconClasses(type);

  const offset = isDesktop
    ? offsets.desktop
    : isTablet
      ? offsets.tablet
      : offsets.mobile;

  return offset;
};
