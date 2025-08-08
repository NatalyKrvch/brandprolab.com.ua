import dynamic from 'next/dynamic';

import { useMediaQuery } from '@/hooks';
import { DESKTOP_MEDIA_QUERY, TABLET_MEDIA_QUERY } from '@/styles/constants';

const ControlledCarousel = dynamic(
  () => import('@/components').then(mod => mod.ControlledCarousel),
  { ssr: false },
);

const EndlessCarousel = dynamic(
  () => import('@/components').then(mod => mod.EndlessCarousel),
  { ssr: false },
);

export function useCarouselComponent() {
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const isTablet = useMediaQuery(TABLET_MEDIA_QUERY);
  const isMobile = !isDesktop && !isTablet;

  return isMobile ? ControlledCarousel : EndlessCarousel;
}
