import { Screen, Size } from '@/lib/types';
import { BACKGROUND_CIRCLE_SIZES } from '@/styles/constants';

import { getSizeFromConstants } from './getSizeFromConstants';

export function getCircleSize(circleSize: Size, screen: Screen) {
  return getSizeFromConstants(BACKGROUND_CIRCLE_SIZES, circleSize, screen);
}
