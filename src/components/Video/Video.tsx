import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import {
  VIDEO_IFRAME_TEST_ID,
  VIDEO_PLAY_BUTTON_TEST_ID,
  VIDEO_TEST_ID,
  VIDEO_THUMBNAIL_TEST_ID,
} from '@/lib/testIDs';
import { getYouTubeEmbedUrl } from '@/utils/getYouTubeEmbedUrl';

import {
  getIframeClass,
  getPlayButtonClass,
  getPlayButtonWrapperClass,
  getPlayIconClass,
  getThumbnailImageClass,
  getVideoOverlayBackgroundClass,
  getVideoOverlayWrapperClass,
  getVideoWrapperClass,
} from './helpers/getVideoClasses';
import { useVideoPlayer } from './hooks/useVideoPlayer';
import { VideoProps } from './types';

const Video = ({ videoUrl, thumbnailSrc, className }: VideoProps) => {
  const { isPlaying, handlePlay } = useVideoPlayer();
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <div
      className={twMerge(getVideoWrapperClass(), className)}
      data-testid={VIDEO_TEST_ID}
    >
      <div className={getVideoOverlayWrapperClass(isPlaying)}>
        <div className={getVideoOverlayBackgroundClass()} />
        <Image
          src={thumbnailSrc}
          alt="Video Thumbnail"
          width={280}
          height={210}
          className={getThumbnailImageClass()}
          data-testid={VIDEO_THUMBNAIL_TEST_ID}
        />
        <div className={getPlayButtonWrapperClass()}>
          <button
            className={getPlayButtonClass()}
            onClick={handlePlay}
            aria-label="Play video"
            data-testid={VIDEO_PLAY_BUTTON_TEST_ID}
          >
            <Image
              src="/icons/nav/play.svg"
              alt="Play Button"
              width={74}
              height={74}
              className={getPlayIconClass()}
            />
          </button>
        </div>
      </div>
      {isPlaying && (
        <iframe
          className={getIframeClass()}
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
