import dynamic from 'next/dynamic';

import { useMediaQuery } from '@/hooks';
import {
  AMOUNT_OF_CASES_WORDS_DESKTOP,
  AMOUNT_OF_CASES_WORDS_MOBILE,
  AMOUNT_OF_CASES_WORDS_TABLET,
} from '@/lib/constants';
import { DESKTOP_MEDIA_QUERY, TABLET_MEDIA_QUERY } from '@/styles/constants';
import { splitLeadingWords } from '@/utils';

const ControlledCarousel = dynamic(
  () => import('@/components').then(mod => mod.ControlledCarousel),
  { ssr: false },
);
const EndlessCarousel = dynamic(
  () => import('@/components').then(mod => mod.EndlessCarousel),
  { ssr: false },
);

export function useCasesSection(description: string) {
  const { leadingWords, rest } = splitLeadingWords(description, 1);
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);
  const isMobile = !isDesktop && !isTablet;

  const wordsToDisplay = isDesktop
    ? AMOUNT_OF_CASES_WORDS_DESKTOP
    : isTablet
      ? AMOUNT_OF_CASES_WORDS_TABLET
      : AMOUNT_OF_CASES_WORDS_MOBILE;

  const CarouselComponent = isMobile ? ControlledCarousel : EndlessCarousel;

  return { leadingWords, rest, wordsToDisplay, CarouselComponent };
}
