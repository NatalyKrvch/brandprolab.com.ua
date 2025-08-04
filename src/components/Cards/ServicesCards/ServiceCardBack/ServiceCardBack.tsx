import { SimpleCard } from '@/components/Cards/SimpleCard';
import {
  SERVICE_CARD_BACK_HEADER_TEST_ID,
  SERVICE_CARD_BACK_LIST_ITEM_TEST_ID,
  SERVICE_CARD_BACK_LIST_TEST_ID,
} from '@/lib/testIDs';
import { BACK_CARD_BG_IMAGE_OPACITY } from '@/styles/constants';

import { ServiceCardFrontVariant } from '../ServiceCardFront';
import { serviceCardBackStyleMap } from './styleMaps';
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
  const styles = serviceCardBackStyleMap[variant];

  return (
    <SimpleCard
      decorativeBgImageUrl={bgImageURL}
      decorativeBgImageOpacity={BACK_CARD_BG_IMAGE_OPACITY}
      className={styles.wrapper}
    >
      <h3
        className={styles.header}
        data-testid={SERVICE_CARD_BACK_HEADER_TEST_ID}
      >
        {header}
      </h3>

      <ul className={styles.list} data-testid={SERVICE_CARD_BACK_LIST_TEST_ID}>
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
