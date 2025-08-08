'use client';

import { useEffect, useState } from 'react';

export const useScrollUpButton = (scrollThreshold: number) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      setIsVisible(window.scrollY > scrollThreshold);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return { isVisible, hasMounted };
};
