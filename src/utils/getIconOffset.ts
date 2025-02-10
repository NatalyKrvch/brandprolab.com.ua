import {
  BACKGROUND_CIRCLE_SIZES,
  ICON_OFFSET_COEFFICIENT,
} from '@/styles/constants';

export function getIconOffset(
  circleSize: 's' | 'm' | 'l',
  screen: 'mobile' | 'tablet' | 'desktop',
) {
  return Math.ceil(
    BACKGROUND_CIRCLE_SIZES[circleSize][screen] / ICON_OFFSET_COEFFICIENT,
  );
}
