import { Screen, Size } from '@/lib/types';

export function getSizeFromConstants<T>(
  constants: Record<Size, Record<Screen, T>>,
  size: Size,
  screen: Screen,
): T {
  return constants[size][screen];
}
