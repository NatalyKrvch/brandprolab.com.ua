import { getCircleSize, getIconOffset, getIconSize } from '@/utils';

const screens: Array<'mobile' | 'tablet' | 'desktop'> = [
  'mobile',
  'tablet',
  'desktop',
];

export function getIconComponentStyles(
  size: 's' | 'm' | 'l',
  isIconCentered: boolean,
) {
  return screens.reduce(
    (styles, screen) => {
      styles.circleStyles[screen] = {
        width: `${getCircleSize(size, screen)}px`,
        height: `${getCircleSize(size, screen)}px`,
      };

      styles.iconStyles[screen] = {
        width: `${getIconSize(size, screen)}px`,
        height: `${getIconSize(size, screen)}px`,
        right: isIconCentered ? '0' : `${getIconOffset(size, screen)}px`,
      };

      return styles;
    },
    {
      circleStyles: {} as Record<
        'mobile' | 'tablet' | 'desktop',
        { width: string; height: string }
      >,
      iconStyles: {} as Record<
        'mobile' | 'tablet' | 'desktop',
        { width: string; height: string; right: string }
      >,
    },
  );
}
