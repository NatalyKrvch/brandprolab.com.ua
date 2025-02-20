import clsx from 'clsx';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import {
  USER_BADGE_IMAGE_TEST_ID,
  USER_BADGE_NAME_TEST_ID,
  USER_BADGE_TEST_ID,
} from '@/lib/testIDs';

import { ExternalLink } from '../ExternalLink';
import type { UserBadgeProps } from './types';

const UserBadge = ({ userName, userPhotoUrl, userLink }: UserBadgeProps) => {
  const commonProps = {
    className: twMerge(
      clsx('flex items-center justify-end', 'gap-5 desktop:gap-6'),
    ),
    'data-testid': USER_BADGE_TEST_ID,
  };

  const content = (
    <>
      <span
        className={twMerge(
          clsx(
            'text-lg font-medium leading-6 text-gray-dark',
            'desktop:text-xl',
          ),
        )}
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
          data-testid={USER_BADGE_IMAGE_TEST_ID}
        />
      </div>
    </>
  );

  if (userLink && userLink.trim() !== '') {
    return (
      <ExternalLink href={userLink} {...commonProps}>
        {content}
      </ExternalLink>
    );
  }

  return <div {...commonProps}>{content}</div>;
};

export default UserBadge;
