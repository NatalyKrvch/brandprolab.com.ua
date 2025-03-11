import Image from 'next/image';

import {
  DIPLOMA_CARD_TEST_ID,
  DIPLOMA_IMAGE_TEST_ID,
  DIPLOMA_OVERLAY_TEST_ID,
} from '@/lib/testIDs';

import {
  getDiplomaCardImageClass,
  getDiplomaCardImageWrapperClass,
  getDiplomaCardOverlayClass,
  getDiplomaCardWrapperClass,
} from './helpers/getDiplomaCardClasses';
import { DiplomaCardProps } from './types';

const DiplomaCard = ({ diplomaURL, onClick }: DiplomaCardProps) => {
  return (
    <div
      className={getDiplomaCardWrapperClass()}
      data-testid={DIPLOMA_CARD_TEST_ID}
    >
      <div className={getDiplomaCardImageWrapperClass()}>
        <div
          onClick={onClick}
          onKeyDown={e => e.key === 'Enter' && onClick?.()}
          className={getDiplomaCardOverlayClass()}
          data-testid={DIPLOMA_OVERLAY_TEST_ID}
        ></div>
        <Image
          src={diplomaURL}
          role="button"
          tabIndex={0}
          alt="Diploma"
          width={168}
          height={168}
          className={getDiplomaCardImageClass()}
          loading="lazy"
          data-testid={DIPLOMA_IMAGE_TEST_ID}
        />
      </div>
    </div>
  );
};

export default DiplomaCard;
