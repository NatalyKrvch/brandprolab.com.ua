import clsx from 'clsx';

import { Icon, IconClassType } from '@/components/Icon';
import { ExternalLink } from '@/components/Links';
import {
  SOCIAL_MEDIA_DESCRIPTION_TEST_ID,
  SOCIAL_MEDIA_LABEL_TEST_ID,
} from '@/lib/testIDs';

import { SimpleCard } from '../SimpleCard';
import { socialMediaColorClassMap } from './styleMaps';
import type { SocialMediaCardProps } from './types';

const SocialMediaCard = ({
  iconURL,
  socialMediaURL,
  label,
  description,
  mainColor,
}: SocialMediaCardProps) => {
  const bgColorClasses = socialMediaColorClassMap[mainColor]?.bg ?? '';
  const textColorClasses = socialMediaColorClassMap[mainColor]?.text ?? '';

  return (
    <ExternalLink href={socialMediaURL}>
      <SimpleCard
        backgroundColor="bg-gray-light"
        className="flex h-full flex-row items-center gap-5 px-4 pb-6 pt-4 transition-colors duration-200 hover:bg-teal-lightOpacity tablet:flex-col tablet:items-start desktop:flex-col desktop:items-start"
      >
        <Icon
          aria-hidden="true"
          iconURL={iconURL}
          circleColor={bgColorClasses}
          type={IconClassType.SOCIAL_MEDIA}
        />

        <div>
          <h3
            className={clsx(
              'mb-1 text-base font-medium leading-5 tracking-wide tablet:text-base desktop:text-lg desktop:leading-22',
              textColorClasses,
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
