import { Screen, Size } from '@/lib/types';
import { ICON_SIZES } from '@/styles/constants';

import { getSizeFromConstants } from './getSizeFromConstants';

export function getIconSize(iconSize: Size, screen: Screen) {
  return getSizeFromConstants(ICON_SIZES, iconSize, screen);
}
