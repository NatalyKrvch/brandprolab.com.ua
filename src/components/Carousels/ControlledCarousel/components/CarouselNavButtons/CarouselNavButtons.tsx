'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import {
  CAROUSEL_NAV_NEXT_TEST_ID,
  CAROUSEL_NAV_PREV_TEST_ID,
  CAROUSEL_NAV_WRAPPER_TEST_ID,
} from '@/lib/testIDs';

import {
  fadeMotionProps,
  fadeNextButtonMotionProps,
} from './configs/motionConfig';
import type { CarouselNavButtonsProps } from './types';

const CarouselNavButtons = ({
  isFirstSlide,
  isLastSlide,
  onPreviousSlide,
  onNextSlide,
}: CarouselNavButtonsProps) => {
  return (
    <div
      role="group"
      aria-label="Навігація каруселі"
      className="absolute hidden gap-2 tablet:-top-80 tablet:right-16 tablet:flex desktop:-top-130 desktop:right-56 desktop:flex"
      data-testid={CAROUSEL_NAV_WRAPPER_TEST_ID}
    >
      <AnimatePresence>
        {!isFirstSlide && (
          <motion.button
            key="prev"
            aria-label="Попередній слайд"
            onClick={onPreviousSlide}
            {...fadeMotionProps}
            data-testid={CAROUSEL_NAV_PREV_TEST_ID}
          >
            <Image
              src="/icons/nav/row.svg"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="h-40 w-40 rotate-180 desktop:h-44 desktop:w-44"
            />
          </motion.button>
        )}

        {!isLastSlide && (
          <motion.button
            key="next"
            aria-label="Наступний слайд"
            onClick={onNextSlide}
            {...fadeNextButtonMotionProps}
            data-testid={CAROUSEL_NAV_NEXT_TEST_ID}
          >
            <Image
              src="/icons/nav/row.svg"
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="h-40 w-40 desktop:h-44 desktop:w-44"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarouselNavButtons;
