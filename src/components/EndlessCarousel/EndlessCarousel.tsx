import { PropsWithChildren } from 'react';
import Marquee from 'react-fast-marquee';

import {
  ENDLESS_CAROUSEL_CONTENT_TEST_ID,
  ENDLESS_CAROUSEL_TEST_ID,
} from '@/lib/testIDs';

import { EndlessCarouselProps } from './types';

const EndlessCarousel = ({
  children,
  speed = 50,
  pauseOnHover = true,
  gradient = false,
  className = '',
}: PropsWithChildren<EndlessCarouselProps>) => {
  return (
    <div
      data-testid={ENDLESS_CAROUSEL_TEST_ID}
      className={`overflow-hidden ${className}`}
    >
      <Marquee
        data-testid={ENDLESS_CAROUSEL_CONTENT_TEST_ID}
        gradient={gradient}
        speed={speed}
        pauseOnHover={pauseOnHover}
      >
        {children}
      </Marquee>
    </div>
  );
};

export default EndlessCarousel;
