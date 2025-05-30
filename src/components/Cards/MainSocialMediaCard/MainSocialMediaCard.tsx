import { AdaptiveImage } from '@/components/AdaptiveImage';
import { PictureSource } from '@/components/AdaptiveImage/types';
import { Icon } from '@/components/Icon';
import { ExternalLink } from '@/components/Links';
import { IconClassType } from '@/lib/constants';
import {
  DESKTOP_MEDIA_QUERY,
  MainSocialCardColor,
  TABLET_MEDIA_QUERY,
} from '@/styles/constants';

import { SimpleCard } from '../SimpleCard';
import { MainSocialMediaCardProps } from './types';

const MainSocialMediaCard = ({
  desktopPhotoURL,
  tabletPhotoURL,
  mobilePhotoURL,
  iconURL,
  platformName,
  description,
  platformURL,
}: MainSocialMediaCardProps) => {
  const sources: PictureSource[] = [
    { srcSet: desktopPhotoURL, media: DESKTOP_MEDIA_QUERY },
    { srcSet: tabletPhotoURL, media: TABLET_MEDIA_QUERY },
  ];

  return (
    <ExternalLink href={platformURL}>
      <SimpleCard
        backgroundColor="bg-gradient-to-bl overflow-hidden tablet:bg-gradient-to-br desktop:bg-gradient-to-br from-teal-light to-gray-light"
        className="flex h-auto flex-wrap content-start items-start justify-between tablet:flex-row-reverse tablet:flex-nowrap tablet:items-center tablet:justify-center tablet:pr-8 desktop:relative desktop:flex-row-reverse desktop:flex-nowrap desktop:items-start desktop:justify-end desktop:gap-0 desktop:pr-8"
      >
        <div className="flex items-start gap-4 pl-4 pt-6 mobile:min-w-0 mobile:flex-1 desktop:absolute desktop:left-240 desktop:flex-col desktop:gap-6 desktop:pb-9 desktop:pr-9 desktop:pt-9">
          <Icon
            circleColor={`bg-${MainSocialCardColor.BLUE}`}
            iconURL={iconURL}
            type={IconClassType.SOCIAL_MEDIA_MAIN}
          />

          <div className="z-10">
            <p className="mb-1 text-28 font-bold leading-none tracking-normal text-blue-default tablet:text-4xl tablet:leading-none tablet:tracking-normal desktop:px-2 desktop:text-5xl desktop:leading-none desktop:tracking-normal">
              {platformName}
            </p>

            <p className="min-w-196 text-sm font-normal leading-4 tracking-normal text-gray-dark mobile:max-w-250 tablet:min-w-150 tablet:max-w-320 tablet:text-base tablet:leading-5 desktop:px-2 desktop:text-lg desktop:leading-22">
              {description}
            </p>
          </div>
        </div>

        <div className="ml-auto h-230 min-w-150 flex-shrink-0 overflow-hidden tablet:ml-0 tablet:h-220 desktop:ml-0 desktop:h-416">
          <AdaptiveImage
            fallbackSrc={mobilePhotoURL}
            sources={sources}
            alt="Photo"
            className="h-full w-auto object-contain"
          />
        </div>
      </SimpleCard>
    </ExternalLink>
  );
};

export default MainSocialMediaCard;
