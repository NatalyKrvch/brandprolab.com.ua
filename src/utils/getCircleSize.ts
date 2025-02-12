import { BACKGROUND_CIRCLE_SIZES } from '@/styles/constants';
import { getSizeFromConstants } from './getSizeFromConstants';
import { Size, Screen } from '@/lib/types';

export function getCircleSize(circleSize: Size, screen: Screen) {
  return getSizeFromConstants(BACKGROUND_CIRCLE_SIZES, circleSize, screen);
}
