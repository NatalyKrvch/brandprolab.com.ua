import clsx from 'clsx';

import { ServiceCardFrontVariant } from '@/components/Cards/ServicesCards';
import { SERVICE_CARD_GRADIENT_INDEX } from '@/styles/constants';

const baseCardClass =
  'h-full max-h-462 min-h-424 w-full min_mobile:max-h-462 min_mobile:min-h-462 tablet:max-h-424 tablet:min-h-400';

const fullWidthClass =
  'tablet:h-400 mid_tablet:col-span-2 desktop:col-span-2 desktop:h-460';

const defaultClass = 'desktop:h-500 desktop:max-h-500';

export const serviceCardClassMap: Record<ServiceCardFrontVariant, string> = {
  [ServiceCardFrontVariant.DEFAULT]: clsx(baseCardClass, defaultClass),
  [ServiceCardFrontVariant.GRADIENT]: clsx(baseCardClass, fullWidthClass),
};

export const cardIndexToVariantMap: Partial<
  Record<number, ServiceCardFrontVariant>
> = {
  [SERVICE_CARD_GRADIENT_INDEX]: ServiceCardFrontVariant.GRADIENT,
};
