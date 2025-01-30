import { BACKGROUND_CIRCLE_SIZES } from '@/lib/constants';

export function getCircleSize(
  circleSize: 's' | 'm' | 'l',
  screen: 'mobile' | 'tablet' | 'desktop',
) {
  return BACKGROUND_CIRCLE_SIZES[circleSize][screen];
}
