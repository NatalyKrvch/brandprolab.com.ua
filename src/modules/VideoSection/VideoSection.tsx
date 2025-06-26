import {
  Button,
  ExternalLink,
  Label,
  SprayBackground,
  Video,
} from '@/components';
import { normalizeImageURL, normalizeText } from '@/utils';

import type { VideoSectionProps } from './types';

const VideoSection = ({ videoData }: VideoSectionProps) => {
  const {
    title,
    label,
    description,
    buttonText,
    buttonLink,
    VideoLink,
    videoCover,
  } = videoData;

  return (
    <section className="flex flex-col items-center desktop:grid desktop:grid-cols-2 desktop:gap-24 desktop:px-36">
      <div className="flex flex-col items-center text-center desktop:items-start desktop:text-left">
        <Label className="mb-6 px-5 py-2 text-sm font-normal leading-none tracking-normal tablet:mb-10 tablet:text-lg desktop:mb-8 desktop:text-lg desktop:leading-none">
          {normalizeText(label)}
        </Label>

        <h2 className="mb-4 px-10 text-center text-32 font-bold leading-34 tracking-tight text-black tablet:mb-8 tablet:max-w-610 tablet:text-42 tablet:leading-none desktop:mb-8 desktop:max-w-456 desktop:px-0 desktop:text-left desktop:text-52 desktop:leading-54">
          {normalizeText(title)}
        </h2>

        <div className="tablet:max-w-480 relative mb-8 flex w-full max-w-400 justify-center desktop:hidden">
          <SprayBackground className="-left-30 -top-250 h-650 w-full -rotate-30 tablet:-left-30 tablet:-top-350 tablet:h-1000 tablet:w-full tablet:-rotate-45" />
          <Video
            videoUrl={VideoLink.trim()}
            thumbnailSrc={normalizeImageURL(videoCover)}
          />
        </div>

        <p className="mb-6 w-280 text-center text-sm font-normal leading-18 tracking-normal text-gray-dark tablet:w-480 tablet:max-w-482 tablet:text-lg tablet:leading-6 desktop:mb-14 desktop:w-456 desktop:text-left desktop:text-lg desktop:leading-6">
          {normalizeText(description)}
        </p>

        <ExternalLink
          aria-label="Перейти до запису на консультацію"
          className="w-200 tablet:w-314 desktop:w-400"
          href={buttonLink.trim()}
        >
          <Button>{normalizeText(buttonText)}</Button>
        </ExternalLink>
      </div>

      <div className="relative hidden w-full justify-center desktop:flex">
        <SprayBackground className="-rotate-30 desktop:-top-350 desktop:h-1020 desktop:w-full" />
        <Video
          videoUrl={VideoLink.trim()}
          thumbnailSrc={normalizeImageURL(videoCover)}
        />
      </div>
    </section>
  );
};

export default VideoSection;
