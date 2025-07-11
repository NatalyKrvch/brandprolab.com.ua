import Image from 'next/image';

import {
  PHOTO_CARD_IMAGE_TEST_ID,
  PHOTO_CARD_TEXT_TEST_ID,
} from '@/lib/testIDs';

import { SimpleCard } from '../SimpleCard';
import type { PhotoCardProps } from './types';

const PhotoCard = ({
  photoUrl,
  backgroundUrl,
  cardHeight,
  imageWidth,
  imageHeight,
  text,
  photoAlt = 'Photo',
  hasPriority = false,
}: PhotoCardProps) => {
  return (
    <SimpleCard
      backgroundImageUrl={backgroundUrl}
      className="relative"
      style={{ height: `${cardHeight}px` }}
    >
      {text && (
        <div
          className="absolute left-4 top-4 ml-36 mt-44 w-80 text-44 font-bold leading-44 tracking-tight text-white"
          data-testid={PHOTO_CARD_TEXT_TEST_ID}
        >
          {text}
        </div>
      )}

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
      >
        <Image
          src={photoUrl}
          fill
          className="object-cover"
          alt={photoAlt}
          priority={hasPriority}
          data-testid={PHOTO_CARD_IMAGE_TEST_ID}
        />
      </div>
    </SimpleCard>
  );
};

export default PhotoCard;
