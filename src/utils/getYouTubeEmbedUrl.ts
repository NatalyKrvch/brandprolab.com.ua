import { YOUTUBE_REGEX } from '@/lib/constants';

export const getYouTubeEmbedUrl = (url: string): string => {
  const match = url.match(YOUTUBE_REGEX);
  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0&playsinline=1&mute=1&modestbranding=1&enablejsapi=1`
    : url;
};
