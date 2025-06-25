import { SimpleCard } from '@/components/Cards/SimpleCard';
import { Icon } from '@/components/Icon';
import { Label } from '@/components/Label';
import { UnderlinedText } from '@/components/UnderlinedText';
import { IconClassType } from '@/lib/constants';
import {
  SERVICE_CARD_FRONT_DESCRIPTION_TEST_ID,
  SERVICE_CARD_FRONT_HEADER_TEST_ID,
} from '@/lib/testIDs';
import { FRONT_CARD_BG_IMAGE_OPACITY } from '@/styles/constants';

import { getServiceCardFrontStyles } from './helpers/getServiceCardFrontStyles';
import type { ServiceCardFrontProps } from './types';

const ServiceCardFront = ({
  label,
  header,
  iconURL,
  description,
  whiteIconURL,
  callToActionText,
  backgroundImageUrl,
  variant = 'default',
}: ServiceCardFrontProps) => {
  const styles = getServiceCardFrontStyles(variant);
  const bgImageURL = variant === 'gradient' ? backgroundImageUrl : undefined;

  return (
    <SimpleCard
      borderColor="border-teal-dark"
      backgroundColor={styles.background}
      decorativeBgImageUrl={bgImageURL}
      decorativeBgImageOpacity={FRONT_CARD_BG_IMAGE_OPACITY}
      className="flex flex-col gap-4 p-7 tablet:gap-0 mid_tablet:gap-0 desktop:gap-0 desktop:p-8"
    >
      <div aria-hidden="true" className="flex items-center justify-end">
        <Icon
          iconURL={iconURL}
          type={IconClassType.SERVICES}
          className={styles.icon}
        />

        <Icon
          iconURL={whiteIconURL}
          type={IconClassType.SERVICES}
          className={styles.whiteIcon}
          circleColor="bg-whiteOpacity"
        />
      </div>

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h3
            className={styles.header}
            data-testid={SERVICE_CARD_FRONT_HEADER_TEST_ID}
          >
            {header}
          </h3>

          <Label className={styles.label}>{label}</Label>

          <p
            className={styles.description}
            data-testid={SERVICE_CARD_FRONT_DESCRIPTION_TEST_ID}
          >
            {description}
          </p>
        </div>

        <button
          aria-label={`Переглянути деталі про ${header}`}
          className="px-1 text-left desktop:px-2"
        >
          <UnderlinedText className={styles.underlined}>
            {callToActionText}
          </UnderlinedText>
        </button>
      </div>
    </SimpleCard>
  );
};

export default ServiceCardFront;
