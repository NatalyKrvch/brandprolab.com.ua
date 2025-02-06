import { UserBadge } from '@/components';
import { TestimonialCardProps } from './types';
import { getReadMoreText } from '@/utils';
import {
  TESTIMONIAL_CARD_TEST_ID,
  TESTIMONIAL_TEXT_TEST_ID,
} from '@/lib/constants';

const TestimonialCard = ({
  text,
  clientName,
  clientPhotoUrl,
  clientLink,
}: TestimonialCardProps) => {
  return (
    <div
      className="flex flex-col gap-6 rounded-24 border border-teal-dark p-6 tablet:rounded-32 desktop:rounded-40 desktop:p-8"
      data-testid={TESTIMONIAL_CARD_TEST_ID}
    >
      <div
        className="text-20 font-normal leading-6 text-black desktop:text-22"
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
    </div>
  );
};

export default TestimonialCard;
