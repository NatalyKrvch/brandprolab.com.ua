import { backgroundCircleSizes } from '@/lib/constants';

export function getCircleSize(
  circleSize: 's' | 'm' | 'l',
  screen: 'mobile' | 'tablet' | 'desktop',
) {
  return backgroundCircleSizes[circleSize][screen];
}
