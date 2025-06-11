import clsx from 'clsx';

import { Icon } from '@/components/Icon';
import { ExternalLink } from '@/components/Links';
import { IconClassType } from '@/lib/constants';
import {
  SOCIAL_MEDIA_DESCRIPTION_TEST_ID,
  SOCIAL_MEDIA_LABEL_TEST_ID,
} from '@/lib/testIDs';
import { MainSocialCardColor } from '@/styles/constants';

import { SimpleCard } from '../SimpleCard';
import type { SocialMediaCardProps } from './types';

const SocialMediaCard = ({
  iconURL,
  socialMediaURL,
  label,
  description,
  mainColor,
}: SocialMediaCardProps) => {
  const bgColorClass =
    mainColor === MainSocialCardColor.RED
      ? 'bg-red-default'
      : mainColor === MainSocialCardColor.BLUE
        ? 'bg-blue-default'
        : '';

  const textColorClass =
    mainColor === MainSocialCardColor.RED
      ? 'text-red-default'
      : mainColor === MainSocialCardColor.BLUE
        ? 'text-blue-default'
        : '';

  return (
    <ExternalLink href={socialMediaURL}>
      <SimpleCard
        backgroundColor="bg-gray-light"
        className="flex h-full flex-row items-center gap-5 px-4 pb-6 pt-4 tablet:flex-col tablet:items-start desktop:flex-col desktop:items-start"
      >
        <Icon
          iconURL={iconURL}
          circleColor={bgColorClass}
          type={IconClassType.SOCIAL_MEDIA}
        />

        <div>
          <h3
            className={clsx(
              'mb-1 text-base font-medium leading-5 tracking-wide tablet:text-base desktop:text-lg desktop:leading-22',
              textColorClass,
            )}
            data-testid={SOCIAL_MEDIA_LABEL_TEST_ID}
          >
            {label}
          </h3>

          <p
            className="text-sm font-normal leading-4 tracking-wide text-gray-dark desktop:text-base desktop:leading-18"
            data-testid={SOCIAL_MEDIA_DESCRIPTION_TEST_ID}
          >
            {description}
          </p>
        </div>
      </SimpleCard>
    </ExternalLink>
  );
};

export default SocialMediaCard;
