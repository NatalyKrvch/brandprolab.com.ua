'use client';

import Image from 'next/image';

import { ImageLightbox } from '@/components/ImageLightbox';
import { useToggleModal } from '@/hooks';
import {
  DIPLOMA_CARD_TEST_ID,
  DIPLOMA_IMAGE_TEST_ID,
  DIPLOMA_OVERLAY_TEST_ID,
} from '@/lib/testIDs';

import type { DiplomaCardProps } from './types';

const DiplomaCard = ({ colorDiplomaURL, bwDiplomaURL }: DiplomaCardProps) => {
  const { isOpen, open, close } = useToggleModal();

  return (
    <>
      <div
        className="hover:transition-color w-fit overflow-hidden rounded-24 border border-gray-medium p-3 hover:border-teal-dark hover:duration-500"
        data-testid={DIPLOMA_CARD_TEST_ID}
      >
        <div className="relative h-216 w-auto max-w-full overflow-hidden rounded-2xl tablet:h-230">
          <div
            onClick={open}
            className="absolute inset-0 z-10 overflow-hidden bg-teal-fog opacity-20 transition-opacity duration-300 hover:cursor-pointer hover:opacity-30 hover:transition-opacity hover:duration-300"
            data-testid={DIPLOMA_OVERLAY_TEST_ID}
            role="button"
            tabIndex={0}
          ></div>

          <Image
            src={bwDiplomaURL}
            alt="Diploma"
            width={168}
            height={168}
            className="h-full w-auto object-contain"
            loading="lazy"
            data-testid={DIPLOMA_IMAGE_TEST_ID}
          />
        </div>
      </div>

      <ImageLightbox open={isOpen} onClose={close} imageUrl={colorDiplomaURL} />
    </>
  );
};

export default DiplomaCard;
