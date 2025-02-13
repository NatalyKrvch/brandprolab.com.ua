import { UserBadge, SimpleCard } from '@/components';
import { TestimonialCardProps } from './types';
import { getReadMoreText } from '@/utils';
import { TESTIMONIAL_TEXT_TEST_ID } from '@/lib/testIDs';

const TestimonialCard = ({
  text,
  clientName,
  clientPhotoUrl,
  clientLink,
}: TestimonialCardProps) => {
  return (
    <SimpleCard className="flex flex-col gap-6 border border-teal-dark p-6 tablet:p-8">
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
