import { ICON_SIZES } from '@/styles/constants';

export function getIconSize(
  iconSize: 's' | 'm' | 'l',
  screen: 'mobile' | 'tablet' | 'desktop',
) {
  return ICON_SIZES[iconSize][screen];
}
