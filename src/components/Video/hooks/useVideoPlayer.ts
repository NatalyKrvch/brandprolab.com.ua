'use client';

import { useState } from 'react';

import { getYouTubeEmbedUrl } from '@/utils';

export const useVideoPlayer = (videoUrl: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(videoUrl).trim();

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return {
    isPlaying,
    handlePlay,
    embedUrl,
  };
};
