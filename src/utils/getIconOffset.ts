import {
  BACKGROUND_CIRCLE_SIZES,
  ICON_OFFSET_COEFFICIENT,
} from '@/styles/constants';
import { getSizeFromConstants } from './getSizeFromConstants';
import { Screen, Size } from '@/lib/types';

export function getIconOffset(circleSize: Size, screen: Screen) {
  return Math.ceil(
    getSizeFromConstants(BACKGROUND_CIRCLE_SIZES, circleSize, screen) /
      ICON_OFFSET_COEFFICIENT,
  );
}
