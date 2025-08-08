import clsx from 'clsx';

import { SimpleCard } from '@/components/Cards/SimpleCard';
import { UserBadge } from '@/components/UserBadge';
import { TESTIMONIAL_TEXT_TEST_ID } from '@/lib/testIDs';

import type { TestimonialCardProps } from './types';

const TestimonialCard = ({
  text,
  clientName,
  clientPhotoUrl,
  clientLink,
  className,
  onReadMore,
}: TestimonialCardProps) => {
  const shouldRenderUserBadge = clientName && clientPhotoUrl && clientLink;

  return (
    <SimpleCard
      borderColor="border-teal-dark"
      className={clsx(
        'flex flex-col justify-between p-28 desktop:p-8',
        className,
      )}
    >
      <div className="flex flex-col gap-3">
        <div
          className="max-h-70 overflow-hidden text-xl font-normal leading-6 text-black desktop:max-h-80 desktop:text-22 desktop:leading-26"
          data-testid={TESTIMONIAL_TEXT_TEST_ID}
        >
          {text}
        </div>

        <button
          role="button"
          onClick={onReadMore}
          className="transition-color-fast text-right text-lg leading-18 text-gray-dark hover:text-teal-dark"
        >
          Читати більше
        </button>
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
