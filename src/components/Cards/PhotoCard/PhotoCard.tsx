import Image from 'next/image';

import {
  PHOTO_CARD_IMAGE_TEST_ID,
  PHOTO_CARD_TEXT_TEST_ID,
} from '@/lib/testIDs';

import { SimpleCard } from '../SimpleCard';
import {
  getPhotoCardClassName,
  getPhotoCardImageWrapperClassName,
  getPhotoCardTextClassName,
  getPhotoClassName,
} from './helpers/getPhotoCardClasses';
import type { PhotoCardProps } from './types';

const PhotoCard = ({
  photoUrl,
  backgroundUrl,
  cardHeight,
  imageWidth,
  imageHeight,
  text,
}: PhotoCardProps) => {
  return (
    <SimpleCard
      backgroundImageUrl={backgroundUrl}
      className={getPhotoCardClassName()}
      style={{ height: `${cardHeight}px` }}
    >
      {text && (
        <div
          className={getPhotoCardTextClassName()}
          data-testid={PHOTO_CARD_TEXT_TEST_ID}
        >
          {text}
        </div>
      )}

      <div
        className={getPhotoCardImageWrapperClassName()}
        style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
      >
        <Image
          src={photoUrl}
          fill
          className={getPhotoClassName()}
          alt="Photo"
          data-testid={PHOTO_CARD_IMAGE_TEST_ID}
        />
      </div>
    </SimpleCard>
  );
};

export default PhotoCard;
