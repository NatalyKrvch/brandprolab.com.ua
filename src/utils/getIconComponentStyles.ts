import { getCircleSize, getIconOffset, getIconSize } from '@/utils';

const screens = ['mobile', 'tablet', 'desktop'] as const;

export function getIconComponentStyles(
  size: 's' | 'm' | 'l',
  isIconCentered: boolean,
) {
  return screens.reduce(
    (styles, screen) => {
      const circleSize = `${getCircleSize(size, screen)}px`;
      const iconSize = `${getIconSize(size, screen)}px`;
      const iconOffset = isIconCentered
        ? '0'
        : `${getIconOffset(size, screen)}px`;

      return {
        circleStyles: {
          ...styles.circleStyles,
          [screen]: { width: circleSize, height: circleSize },
        },
        iconStyles: {
          ...styles.iconStyles,
          [screen]: { width: iconSize, height: iconSize, right: iconOffset },
        },
      };
    },
    { circleStyles: {}, iconStyles: {} } as {
      circleStyles: Record<
        'mobile' | 'tablet' | 'desktop',
        { width: string; height: string }
      >;
      iconStyles: Record<
        'mobile' | 'tablet' | 'desktop',
        { width: string; height: string; right: string }
      >;
    },
  );
}
