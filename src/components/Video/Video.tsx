'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import {
  VIDEO_IFRAME_TEST_ID,
  VIDEO_PLAY_BUTTON_TEST_ID,
  VIDEO_TEST_ID,
  VIDEO_THUMBNAIL_TEST_ID,
} from '@/lib/testIDs';
import { ROUNDED_CLASSES } from '@/styles/constants';

import { useVideoPlayer } from './hooks/useVideoPlayer';
import { VideoProps } from './types';

const Video = ({ videoUrl, thumbnailSrc, className }: VideoProps) => {
  const { isPlaying, handlePlay, embedUrl } = useVideoPlayer(videoUrl);

  return (
    <div
      className={twMerge(
        `relative h-210 w-280 overflow-hidden tablet:h-300 tablet:w-400 desktop:h-360 desktop:w-480 ${ROUNDED_CLASSES}`,
        className,
      )}
      data-testid={VIDEO_TEST_ID}
    >
      <div
        className={twMerge(
          'absolute inset-0 transition-opacity duration-500',
          isPlaying ? 'pointer-events-none opacity-0' : 'opacity-100',
        )}
      >
        <div
          className={`absolute inset-0 bg-teal-fogOpacity opacity-50 ${ROUNDED_CLASSES}`}
        />
        <Image
          src={thumbnailSrc}
          alt="Video Thumbnail"
          width={280}
          height={210}
          className={`h-full w-full object-cover ${ROUNDED_CLASSES}`}
          data-testid={VIDEO_THUMBNAIL_TEST_ID}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="rounded-full shadow-lg transition hover:scale-105"
            onClick={handlePlay}
            aria-label="Play video"
            data-testid={VIDEO_PLAY_BUTTON_TEST_ID}
          >
            <Image
              src="/icons/nav/play.svg"
              alt="Play Button"
              width={74}
              height={74}
            />
          </button>
        </div>
      </div>
      {isPlaying && (
        <iframe
          className={`h-full w-full ${ROUNDED_CLASSES}`}
          src={embedUrl}
          title="Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          data-testid={VIDEO_IFRAME_TEST_ID}
        />
      )}
    </div>
  );
};

export default Video;
