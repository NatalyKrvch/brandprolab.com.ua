'use client';

import { useState } from 'react';

export const useVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return {
    isPlaying,
    handlePlay,
  };
};
