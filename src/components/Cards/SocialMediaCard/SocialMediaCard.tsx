import { ExternalLink } from '@/components/ExternalLink';
import { Icon } from '@/components/Icon';
import { IconClassType } from '@/lib/constants';
import {
  SOCIAL_MEDIA_DESCRIPTION_TEST_ID,
  SOCIAL_MEDIA_LABEL_TEST_ID,
} from '@/lib/testIDs';

import { SimpleCard } from '../SimpleCard';
import { getSocialMediaCardColorClass } from './helpers/getSocialMediaCardColorClass';
import { SocialMediaCardProps } from './types';

const SocialMediaCard = ({
  iconURL,
  socialMediaURL,
  label,
  description,
  mainColor,
}: SocialMediaCardProps) => {
  return (
    <ExternalLink href={socialMediaURL}>
      <SimpleCard
        backgroundColor="bg-gray-light"
        className="flex flex-row items-center gap-5 px-4 pb-6 pt-4 tablet:flex-col tablet:items-start desktop:flex-col desktop:items-start"
      >
        <Icon
          iconURL={iconURL}
          circleColor={getSocialMediaCardColorClass(mainColor, 'bg')}
          type={IconClassType.SOCIAL_MEDIA}
        />
        <div>
          <h3
            className={`mb-1 text-base font-medium leading-5 tracking-wide tablet:text-base desktop:text-lg desktop:leading-22 ${getSocialMediaCardColorClass(
              mainColor,
              'text',
            )}`}
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
