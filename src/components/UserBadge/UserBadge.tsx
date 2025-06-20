import Image from 'next/image';

import {
  USER_BADGE_IMAGE_TEST_ID,
  USER_BADGE_NAME_TEST_ID,
  USER_BADGE_TEST_ID,
} from '@/lib/testIDs';

import { ExternalLink } from '../Links';
import type { UserBadgeProps } from './types';

const UserBadge = ({ userName, userPhotoUrl, userLink }: UserBadgeProps) => {
  const content = (
    <div className="flex items-center gap-5">
      <span
        className="text-right text-lg font-medium leading-6 text-gray-dark hover:text-teal-dark desktop:text-xl"
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
          loading="lazy"
          data-testid={USER_BADGE_IMAGE_TEST_ID}
        />
      </div>
    </div>
  );

  const commonProps = {
    className: 'flex items-center justify-end gap-5 desktop:gap-6',
    'data-testid': USER_BADGE_TEST_ID,
  };

  if (userLink?.trim()) {
    return (
      <ExternalLink
        aria-label={`Профіль користувача ${userName}`}
        href={userLink}
        {...commonProps}
      >
        {content}
      </ExternalLink>
    );
  }

  return <div {...commonProps}>{content}</div>;
};

export default UserBadge;
