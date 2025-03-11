import Image from 'next/image';

import {
  USER_BADGE_IMAGE_TEST_ID,
  USER_BADGE_NAME_TEST_ID,
  USER_BADGE_TEST_ID,
} from '@/lib/testIDs';

import { ExternalLink } from '../ExternalLink';
import {
  getUserBadgeImageClass,
  getUserBadgeImageWrapperClass,
  getUserBadgeNameClass,
  getUserBadgeWrapperClass,
} from './helpers/getUserBadgeClasses';
import type { UserBadgeProps } from './types';

const UserBadge = ({ userName, userPhotoUrl, userLink }: UserBadgeProps) => {
  const content = (
    <>
      <span
        className={getUserBadgeNameClass()}
        data-testid={USER_BADGE_NAME_TEST_ID}
      >
        {userName}
      </span>
      <div className={getUserBadgeImageWrapperClass()}>
        <Image
          className={getUserBadgeImageClass()}
          src={userPhotoUrl}
          alt={userName}
          fill
          data-testid={USER_BADGE_IMAGE_TEST_ID}
        />
      </div>
    </>
  );

  const commonProps = {
    className: getUserBadgeWrapperClass(),
    'data-testid': USER_BADGE_TEST_ID,
  };

  if (userLink?.trim()) {
    return (
      <ExternalLink href={userLink} {...commonProps}>
        {content}
      </ExternalLink>
    );
  }

  return <div {...commonProps}>{content}</div>;
};

export default UserBadge;
