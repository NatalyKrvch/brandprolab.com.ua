import { SimpleCard } from '@/components/Cards/SimpleCard';
import { Icon } from '@/components/Icon';
import { Label } from '@/components/Label';
import { UnderlinedText } from '@/components/UnderlinedText';
import { IconClassType } from '@/lib/constants';
import {
  FLIP_CARD_FRONT_DESCRIPTION_TEST_ID,
  FLIP_CARD_FRONT_HEADER_TEST_ID,
} from '@/lib/testIDs';

import {
  getCardClass,
  getDescriptionClass,
  getHeaderClass,
  getIconWrapperClass,
  getLabelClass,
} from './helpers/getFlipCardFrontClasses';
import type { FlipCardFrontProps } from './types';

const FlipCardFront = ({
  iconURL,
  header,
  label,
  description,
  callToAction,
}: FlipCardFrontProps) => {
  return (
    <SimpleCard borderColor="border-teal-dark" className={getCardClass()}>
      <div className={getIconWrapperClass()}>
        <Icon iconURL={iconURL} type={IconClassType.SERVICES} />
      </div>
      <p
        className={getHeaderClass()}
        data-testid={FLIP_CARD_FRONT_HEADER_TEST_ID}
      >
        {header}
      </p>
      <Label className={getLabelClass()}>{label}</Label>
      <p
        className={getDescriptionClass()}
        data-testid={FLIP_CARD_FRONT_DESCRIPTION_TEST_ID}
      >
        {description}
      </p>
      <UnderlinedText>{callToAction}</UnderlinedText>
    </SimpleCard>
  );
};

export default FlipCardFront;
