import type { PropsWithChildren } from 'react';
import Marquee from 'react-fast-marquee';

import {
  ENDLESS_CAROUSEL_CONTENT_TEST_ID,
  ENDLESS_CAROUSEL_TEST_ID,
} from '@/lib/testIDs';
import { ENDLESS_CAROUSEL_SPEED } from '@/styles/constants';

import type { EndlessCarouselProps } from './types';

const EndlessCarousel = ({
  children,
  speed = ENDLESS_CAROUSEL_SPEED,
  pauseOnHover = true,
  gradient = false,
  className = '',
}: PropsWithChildren<EndlessCarouselProps>) => {
  return (
    <div
      data-testid={ENDLESS_CAROUSEL_TEST_ID}
      className={`overflow-hidden ${className}`}
      aria-roledescription="carousel"
      role="group"
    >
      <Marquee
        data-testid={ENDLESS_CAROUSEL_CONTENT_TEST_ID}
        gradient={gradient}
        speed={speed}
        pauseOnHover={pauseOnHover}
        play={true}
      >
        {children}
      </Marquee>
    </div>
  );
};

export default EndlessCarousel;
