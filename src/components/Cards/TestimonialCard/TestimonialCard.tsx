import { SimpleCard } from '@/components/Cards/SimpleCard';
import { UserBadge } from '@/components/UserBadge';
import { TESTIMONIAL_TEXT_TEST_ID } from '@/lib/testIDs';
import { getReadMoreText } from '@/utils';

import {
  getTestimonialCardClasses,
  getTestimonialTextClasses,
} from './helpers/getTestimonialCardClasses';
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
      className={`${getTestimonialCardClasses()} ${className}`}
    >
      <div
        className={getTestimonialTextClasses()}
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
