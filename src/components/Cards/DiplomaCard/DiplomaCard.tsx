import Image from 'next/image';

import {
  DIPLOMA_CARD_TEST_ID,
  DIPLOMA_IMAGE_TEST_ID,
  DIPLOMA_OVERLAY_TEST_ID,
} from '@/lib/testIDs';

import { DiplomaCardProps } from './types';

const DiplomaCard = ({ diplomaURL, onClick }: DiplomaCardProps) => {
  return (
    <div
      className="w-fit rounded-24 border border-gray-medium p-2"
      data-testid={DIPLOMA_CARD_TEST_ID}
    >
      <div className="relative h-108 w-auto max-w-full overflow-hidden rounded-3xl">
        <div
          onClick={onClick}
          onKeyDown={e => e.key === 'Enter' && onClick?.()}
          className="absolute inset-0 z-10 bg-teal-fog opacity-20 transition-opacity duration-300 hover:cursor-pointer hover:opacity-0"
          data-testid={DIPLOMA_OVERLAY_TEST_ID}
        ></div>

        <Image
          src={diplomaURL}
          role="button"
          tabIndex={0}
          alt="Diploma"
          width={168}
          height={168}
          className="h-full w-auto object-contain"
          loading="lazy"
          data-testid={DIPLOMA_IMAGE_TEST_ID}
        />
      </div>
    </div>
  );
};

export default DiplomaCard;
