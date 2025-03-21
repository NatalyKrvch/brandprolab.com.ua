import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { CarouselNavButtonsProps } from './types';

const CarouselNavButtons = ({
  isFirstSlide,
  isLastSlide,
  onPrev,
  onNext,
}: CarouselNavButtonsProps) => {
  return (
    <div className="absolute right-0 hidden gap-2 tablet:-top-[60px] tablet:flex desktop:-top-[80px] desktop:flex">
      <AnimatePresence mode="wait">
        {!isFirstSlide && (
          <motion.button
            key="prev"
            onClick={onPrev}
            initial={{ opacity: 0, rotate: -15 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/icons/nav/row.svg"
              alt="Попередній слайд"
              width={0}
              height={0}
              className="h-[40px] w-[40px] rotate-180 desktop:h-[44px] desktop:w-[44px]"
            />
          </motion.button>
        )}

        {!isLastSlide && (
          <motion.button
            key="next"
            onClick={onNext}
            initial={{ opacity: 0, rotate: 15 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/icons/nav/row.svg"
              alt="Наступний слайд"
              width={0}
              height={0}
              className="h-[40px] w-[40px] desktop:h-[44px] desktop:w-[44px]"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarouselNavButtons;
