import clsx from 'clsx';

import { ServiceCardFrontVariant } from '@/components/Cards/ServicesCards';
import { SERVICE_CARD_GRADIENT_INDEX } from '@/styles/constants';

const baseCardClass =
  'h-full max-h-462 min-h-424 w-full min_mobile:max-h-462 min_mobile:min-h-462 tablet:max-h-424 tablet:min-h-400';

const fullWidthClass =
  'tablet:h-400 mid_tablet:col-span-2 desktop:col-span-2 desktop:h-460';

const defaultClass = 'desktop:h-500 desktop:max-h-500';

const expertiseClass =
  'w-full min_mobile:h-[320px] min_mobile:w-[288px] [@media(min-width:380px)_and_(max-width:500px)]:h-[320px] [@media(min-width:380px)_and_(max-width:500px)]:w-[350px] [@media(min-width:500px)_and_(max-width:600px)]: h-[400px] w-[350px] [@media(min-width:500px)_and_(max-width:600px)]:h-[320px] [@media(min-width:500px)_and_(max-width:600px)]:w-[460px] [@media(min-width:600px)_and_(max-width:900px)]:h-[320px] [@media(min-width:600px)_and_(max-width:900px)]:w-[550px] tablet:h-[320px] tablet:w-[415px] mid_tablet:h-[320px] mid_tablet:w-[490px] desktop:h-[360px] desktop:w-[336px]';

export const serviceCardClassMap: Record<ServiceCardFrontVariant, string> = {
  [ServiceCardFrontVariant.DEFAULT]: clsx(baseCardClass, defaultClass),
  [ServiceCardFrontVariant.GRADIENT]: clsx(baseCardClass, fullWidthClass),
  [ServiceCardFrontVariant.BASE]: expertiseClass,
};

export const cardIndexToVariantMap: Partial<
  Record<number, ServiceCardFrontVariant>
> = {
  [SERVICE_CARD_GRADIENT_INDEX]: ServiceCardFrontVariant.GRADIENT,
};
