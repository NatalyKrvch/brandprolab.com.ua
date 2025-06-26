import { cardIndexToVariantMap } from '../styleMaps';
import type { ServiceCardVariant } from '../types';

export const getCardVariantByIndex = (index: number): ServiceCardVariant =>
  cardIndexToVariantMap[index] ?? 'default';
