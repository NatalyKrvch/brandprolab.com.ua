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
  return (
    <SimpleCard
      borderColor="border-teal-dark"
      className="flex flex-col gap-6 p-6 tablet:p-8"
    >
      <div
        className="text-xl font-normal leading-6 text-black desktop:text-22 desktop:leading-26"
        data-testid={TESTIMONIAL_TEXT_TEST_ID}
      >
        {getReadMoreText(text)}
      </div>
      {clientName && clientPhotoUrl && (
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
