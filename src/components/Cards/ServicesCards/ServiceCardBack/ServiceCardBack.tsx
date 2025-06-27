import { SimpleCard } from '@/components/Cards/SimpleCard';
import {
  SERVICE_CARD_BACK_HEADER_TEST_ID,
  SERVICE_CARD_BACK_LIST_ITEM_TEST_ID,
  SERVICE_CARD_BACK_LIST_TEST_ID,
} from '@/lib/testIDs';
import { BACK_CARD_BG_IMAGE_OPACITY } from '@/styles/constants';

import { ServiceCardFrontVariant } from '../ServiceCardFront';
import type { ServiceCardBackProps } from './types';

const ServiceCardBack = ({
  header,
  list,
  backgroundImageUrl,
  variant = ServiceCardFrontVariant.DEFAULT,
}: ServiceCardBackProps) => {
  const bgImageURL =
    variant === ServiceCardFrontVariant.GRADIENT
      ? backgroundImageUrl
      : undefined;

  return (
    <SimpleCard
      decorativeBgImageUrl={bgImageURL}
      decorativeBgImageOpacity={BACK_CARD_BG_IMAGE_OPACITY}
      className="flex h-full flex-col gap-4 bg-blue-dark p-6 tablet:p-8 mid_tablet:border-none desktop:gap-6 desktop:border-none desktop:p-10"
    >
      <h3
        className="text-lg font-bold leading-5 text-teal-medium min_mobile:text-base tablet:text-2xl tablet:leading-6 mid_tablet:max-w-600 mid_tablet:text-xl desktop:max-w-600 desktop:text-2xl desktop:leading-6"
        data-testid={SERVICE_CARD_BACK_HEADER_TEST_ID}
      >
        {header}
      </h3>

      <ul
        className="list-disc space-y-1.5 pl-5 text-sm font-extralight leading-18 tracking-normal text-white min_mobile:text-xs tablet:text-base tablet:leading-6 mid_tablet:max-w-540 mid_tablet:text-sm mid_tablet:leading-4 desktop:max-w-544 desktop:text-lg desktop:leading-5"
        data-testid={SERVICE_CARD_BACK_LIST_TEST_ID}
      >
        {list.map(item => (
          <li key={item} data-testid={SERVICE_CARD_BACK_LIST_ITEM_TEST_ID}>
            {item}
          </li>
        ))}
      </ul>
    </SimpleCard>
  );
};

export default ServiceCardBack;
