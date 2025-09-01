'use client';

import Image from 'next/image';

import { ExternalLink } from '@/components/Links';
import { ModalWrapper } from '@/components/Modals/ModalWrapper';
import {
  TESTIMONIAL_MODAL_IMAGE_TEST_ID,
  TESTIMONIAL_MODAL_NAME_TEST_ID,
  TESTIMONIAL_MODAL_POSITION_TEST_ID,
  TESTIMONIAL_MODAL_TEXT_TEST_ID,
} from '@/lib/testIDs';
import { formatTextWithListItems } from '@/utils';

import type { TestimonialModalProps } from './types';

const TestimonialModal = ({
  isOpen,
  onClose,
  testimonial,
}: TestimonialModalProps) => {
  const formattedText = formatTextWithListItems(testimonial?.text || '');

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      {testimonial && (
        <div className="flex flex-col gap-2 desktop:gap-4">
          <Image
            data-testid={TESTIMONIAL_MODAL_IMAGE_TEST_ID}
            src={testimonial.clientPhotoUrl}
            alt={testimonial.clientName}
            width={100}
            height={100}
            priority
            className="absolute left-4 top-[-10px] h-96 w-96 rounded-full object-cover tablet:left-7 tablet:top-[-15px] tablet:h-108 tablet:w-108 desktop:left-30 desktop:top-[-20px] desktop:h-144 desktop:w-144"
          />

          <div className="absolute left-120 top-4 max-w-144 leading-none tablet:left-150 tablet:top-5 tablet:max-w-250 desktop:left-200 desktop:top-7 desktop:max-w-216">
            <ExternalLink href={testimonial.clientLink}>
              <p
                data-testid={TESTIMONIAL_MODAL_NAME_TEST_ID}
                className="transition-color-fast mb-2 text-lg font-semibold leading-none hover:text-teal-dark tablet:mb-1 tablet:text-xl desktop:mb-3 desktop:text-22"
              >
                {testimonial.clientName}
              </p>
            </ExternalLink>

            <p
              data-testid={TESTIMONIAL_MODAL_POSITION_TEST_ID}
              className="text-sm leading-none tablet:text-base tablet:leading-none desktop:text-lg desktop:leading-none"
            >
              {testimonial.clientPosition}
            </p>
          </div>

          <p
            data-testid={TESTIMONIAL_MODAL_TEXT_TEST_ID}
            className="mt-12 whitespace-pre-line text-sm text-gray-dark tablet:mt-14 tablet:text-base desktop:mt-80 desktop:text-lg"
          >
            {formattedText}
          </p>
        </div>
      )}
    </ModalWrapper>
  );
};

export default TestimonialModal;
