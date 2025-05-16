import dynamic from 'next/dynamic';

import { useMediaQuery } from '@/hooks';
import {
  AMOUNT_OF_CASES_WORDS_DESKTOP,
  AMOUNT_OF_CASES_WORDS_MOBILE,
  AMOUNT_OF_CASES_WORDS_TABLET,
} from '@/lib/constants';
import { DESKTOP_MEDIA_QUERY, TABLET_MEDIA_QUERY } from '@/styles/constants';
import { splitFirstWord } from '@/utils';

const ControlledCarousel = dynamic(
  () => import('@/components').then(mod => mod.ControlledCarousel),
  { ssr: false },
);
const EndlessCarousel = dynamic(
  () => import('@/components').then(mod => mod.EndlessCarousel),
  { ssr: false },
);

export function useCasesSection(description: string) {
  const { firstWord, rest } = splitFirstWord(description);
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);
  const isMobile = !isDesktop && !isTablet;

  const wordsToDisplay = isDesktop
    ? AMOUNT_OF_CASES_WORDS_DESKTOP
    : isTablet
      ? AMOUNT_OF_CASES_WORDS_TABLET
      : AMOUNT_OF_CASES_WORDS_MOBILE;

  const CarouselComponent = isMobile ? ControlledCarousel : EndlessCarousel;

  return { firstWord, rest, wordsToDisplay, CarouselComponent };
}
