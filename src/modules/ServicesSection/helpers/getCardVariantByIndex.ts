import { ServiceCardFrontVariant } from '@/components/Cards/ServicesCards';

import { cardIndexToVariantMap } from '../styleMaps';

export const getCardVariantByIndex = (index: number): ServiceCardFrontVariant =>
  cardIndexToVariantMap[index] ?? ServiceCardFrontVariant.DEFAULT;
