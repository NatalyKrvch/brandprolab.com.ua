import clsx from 'clsx';

import { SERVICE_CARD_GRADIENT_INDEX } from '@/styles/constants';

import type { ServiceCardVariant } from '../types';

const baseCardClass =
  'h-full max-h-462 min-h-424 w-full min_mobile:max-h-462 min_mobile:min-h-462 tablet:max-h-424 tablet:min-h-400';

const fullWidthClass =
  'tablet:h-400 mid_tablet:col-span-2 desktop:col-span-2 desktop:h-460';

const defaultClass = 'desktop:h-500 desktop:max-h-500';

export const serviceCardClassMap: Record<ServiceCardVariant, string> = {
  default: clsx(baseCardClass, defaultClass),
  gradient: clsx(baseCardClass, fullWidthClass),
};

export const cardIndexToVariantMap: Partial<
  Record<number, ServiceCardVariant>
> = {
  [SERVICE_CARD_GRADIENT_INDEX]: 'gradient',
};
