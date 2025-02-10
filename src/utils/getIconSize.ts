import { ICON_SIZES } from '@/styles/constants';
import { getSizeFromConstants } from './getSizeFromConstants';
import { Screen, Size } from '@/lib/types';

export function getIconSize(iconSize: Size, screen: Screen) {
  return getSizeFromConstants(ICON_SIZES, iconSize, screen);
}
