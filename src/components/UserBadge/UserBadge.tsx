import Image from 'next/image';
import { UserBadgeProps } from './types';
import {
  USER_BADGE_TEST_ID,
  USER_BADGE_IMAGE_TEST_ID,
  USER_BADGE_NAME_TEST_ID,
} from '@/lib/constants';

const UserBadge = ({ userName, userPhotoUrl }: UserBadgeProps) => {
  return (
    <div
      className="flex items-center justify-end gap-5 desktop:gap-6"
      data-testid={USER_BADGE_TEST_ID}
    >
      <span
        className="text-18 font-medium leading-24 text-gray-dark desktop:text-20"
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
    </div>
  );
};

export default UserBadge;
