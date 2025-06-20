'use client';

import { useState } from 'react';

export const useFlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(prev => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      handleFlip();
    }
  };

  return {
    flipped,
    handleFlip,
    handleKeyDown,
  };
};
