'use client';

import Image from 'next/image';

import { InternalLink } from '../Links';
import { useScrollUpButton } from './hooks/useScrollUpButton';
import type { ScrollUpButtonProps } from './types';

const ScrollUpButton = ({
  sectionId,
  scrollThreshold,
}: ScrollUpButtonProps) => {
  const { isVisible, hasMounted } = useScrollUpButton(scrollThreshold);

  const visibilityClasses = isVisible
    ? 'translate-y-0 opacity-100'
    : 'pointer-events-none translate-y-4 opacity-0';

  if (!hasMounted) return null;

  return (
    <InternalLink
      href={`#${sectionId}`}
      aria-label="Піднятись нагору"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out hover:scale-105 ${visibilityClasses}`}
    >
      <Image
        src="/icons/nav/up.svg"
        alt="Піднятись нагору"
        loading="lazy"
        width={64}
        height={64}
        className="h-48 w-48 tablet:h-54 tablet:w-54 desktop:h-64 desktop:w-64"
      />
    </InternalLink>
  );
};

export default ScrollUpButton;
