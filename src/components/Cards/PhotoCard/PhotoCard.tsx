import Image from 'next/image';

import {
  PHOTO_CARD_IMAGE_TEST_ID,
  PHOTO_CARD_TEXT_TEST_ID,
} from '@/lib/testIDs';

import { SimpleCard } from '../SimpleCard';
import type { PhotoCardProps } from './types';

const PhotoCard = ({ text, photoUrl, backgroundUrl }: PhotoCardProps) => {
  return (
    <SimpleCard
      backgroundImageUrl={backgroundUrl}
      className="relative h-[824px]"
    >
      {text && (
        <div
          className="absolute left-4 top-4 ml-36 mt-44 w-80 text-44 font-bold leading-44 tracking-tight text-black"
          data-testid={PHOTO_CARD_TEXT_TEST_ID}
        >
          {text}
        </div>
      )}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Image
          src={photoUrl}
          width={200}
          height={200}
          alt="Photo"
          data-testid={PHOTO_CARD_IMAGE_TEST_ID}
        />
      </div>
    </SimpleCard>
  );
};

export default PhotoCard;
