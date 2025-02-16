import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { SimpleCard, UserBadge } from '@/components';
import { TESTIMONIAL_TEXT_TEST_ID } from '@/lib/testIDs';
import { getReadMoreText } from '@/utils';

import { TestimonialCardProps } from './types';

const TestimonialCard = ({
  text,
  clientName,
  clientPhotoUrl,
  clientLink,
}: TestimonialCardProps) => {
  const shouldRenderUserBadge = clientName && clientPhotoUrl;

  return (
    <SimpleCard
      borderColor="border-teal-dark"
      className={twMerge(clsx('flex flex-col gap-6', 'p-6 tablet:p-8'))}
    >
      <div
        className={twMerge(
          clsx(
            'text-xl font-normal leading-6 text-black',
            'desktop:text-22 desktop:leading-26',
          ),
        )}
        data-testid={TESTIMONIAL_TEXT_TEST_ID}
      >
        {getReadMoreText(text)}
      </div>
      {shouldRenderUserBadge && (
        <UserBadge
          userName={clientName}
          userPhotoUrl={clientPhotoUrl}
          userLink={clientLink}
        />
      )}
    </SimpleCard>
  );
};

export default TestimonialCard;
