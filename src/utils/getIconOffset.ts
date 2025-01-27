import { backgroundCircleSizes, iconOffsetCoefficient } from '@/lib/constants';

export function getIconOffset(
  circleSize: 's' | 'm' | 'l',
  screen: 'mobile' | 'tablet' | 'desktop',
) {
  return Math.ceil(
    backgroundCircleSizes[circleSize][screen] / iconOffsetCoefficient,
  );
}
