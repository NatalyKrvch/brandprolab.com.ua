import { useMemo } from 'react';
import { getCircleSize, getIconOffset, getIconSize } from '@/utils';

export const useIconStyles = (
  size: 's' | 'm' | 'l',
  isIconCentered: boolean,
) => {
  return useMemo(() => {
    const circleStyles = {
      mobile: {
        width: `${getCircleSize(size, 'mobile')}px`,
        height: `${getCircleSize(size, 'mobile')}px`,
      },
      tablet: {
        width: `${getCircleSize(size, 'tablet')}px`,
        height: `${getCircleSize(size, 'tablet')}px`,
      },
      desktop: {
        width: `${getCircleSize(size, 'desktop')}px`,
        height: `${getCircleSize(size, 'desktop')}px`,
      },
    };

    const iconStyles = {
      mobile: {
        width: `${getIconSize(size, 'mobile')}px`,
        height: `${getIconSize(size, 'mobile')}px`,
        right: isIconCentered ? '0' : `${getIconOffset(size, 'mobile')}px`,
      },
      tablet: {
        width: `${getIconSize(size, 'tablet')}px`,
        height: `${getIconSize(size, 'tablet')}px`,
        right: isIconCentered ? '0' : `${getIconOffset(size, 'tablet')}px`,
      },
      desktop: {
        width: `${getIconSize(size, 'desktop')}px`,
        height: `${getIconSize(size, 'desktop')}px`,
        right: isIconCentered ? '0' : `${getIconOffset(size, 'desktop')}px`,
      },
    };

    return { circleStyles, iconStyles };
  }, [size, isIconCentered]);
};
