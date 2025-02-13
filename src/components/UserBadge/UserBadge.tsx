import Image from 'next/image';

import {
  USER_BADGE_IMAGE_TEST_ID,
  USER_BADGE_NAME_TEST_ID,
  USER_BADGE_TEST_ID,
} from '@/lib/testIDs';

import { ExternalLink } from '../ExternalLink';
import { UserBadgeProps } from './types';

const UserBadge = ({
  userName,
  userPhotoUrl,
  userLink = '',
}: UserBadgeProps) => {
  const Wrapper = userLink ? ExternalLink : 'div';

  return (
    <Wrapper
      className="flex items-center justify-end gap-5 desktop:gap-6"
      {...(userLink ? { href: userLink } : { href: '#' })}
      data-testid={USER_BADGE_TEST_ID}
    >
      <span
        className="text-lg font-medium leading-6 text-gray-dark desktop:text-xl"
        data-testid={USER_BADGE_NAME_TEST_ID}
      >
        {userName}
      </span>
      <div className="relative aspect-square w-14 desktop:w-16">
        <Image
          className="rounded-full object-cover"
          src={userPhotoUrl}
          alt={userName}
          fill
          priority
          data-testid={USER_BADGE_IMAGE_TEST_ID}
        />
      </div>
    </Wrapper>
  );
};

export default UserBadge;
