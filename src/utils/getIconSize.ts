import { iconSizes } from '@/lib/constants';

export function getIconSize(
  iconSize: 's' | 'm' | 'l',
  screen: 'mobile' | 'tablet' | 'desktop',
) {
  return iconSizes[iconSize][screen];
}
