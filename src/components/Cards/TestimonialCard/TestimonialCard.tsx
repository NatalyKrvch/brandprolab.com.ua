import { SimpleCard } from '@/components/Cards/SimpleCard';
import { UserBadge } from '@/components/UserBadge';
import { TESTIMONIAL_TEXT_TEST_ID } from '@/lib/testIDs';
import { getReadMoreText } from '@/utils';

import type { TestimonialCardProps } from './types';

const TestimonialCard = ({
  text,
  clientName,
  clientPhotoUrl,
  clientLink,
  className,
}: TestimonialCardProps) => {
  const shouldRenderUserBadge = clientName && clientPhotoUrl && clientLink;

  return (
    <SimpleCard
      borderColor="border-teal-dark"
      className={`flex flex-col justify-between p-6 tablet:p-8 ${className}`}
    >
      <div
        className="text-xl font-normal leading-6 text-black desktop:text-22 desktop:leading-26"
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
