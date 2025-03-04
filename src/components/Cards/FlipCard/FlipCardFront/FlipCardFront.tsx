import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Icon } from '@/components/Icon';
import { Label } from '@/components/Label';
import { UnderlinedText } from '@/components/UnderlinedText';
import {
  FLIP_CARD_FRONT_DESCRIPTION_TEST_ID,
  FLIP_CARD_FRONT_HEADER_TEST_ID,
} from '@/lib/testIDs';

import { SimpleCard } from '../../SimpleCard';
import { FlipCardFrontProps } from './types';

const FlipCardFront = ({
  iconURL,
  header,
  label,
  description,
  callToAction,
}: FlipCardFrontProps) => {
  return (
    <SimpleCard
      borderColor="border-teal-dark"
      className="flex h-full flex-col gap-6 p-8"
    >
      <div className="flex items-center justify-end">
        <Icon iconURL={iconURL} />
      </div>
      <p
        className={twMerge(
          clsx(
            'text-26 font-bold leading-26 text-black',
            'tablet:text-28 tablet:leading-7',
            'desktop:text-32 desktop:leading-8',
          ),
        )}
        data-testid={FLIP_CARD_FRONT_HEADER_TEST_ID}
      >
        {header}
      </p>
      <Label
        className={twMerge(
          clsx('text-14 text-blue-dark', 'tablet:text-base', 'desktop:text-lg'),
        )}
      >
        {label}
      </Label>
      <p
        className={twMerge(
          clsx(
            'text-base font-normal leading-22 text-black',
            'desktop:text-lg',
          ),
        )}
        data-testid={FLIP_CARD_FRONT_DESCRIPTION_TEST_ID}
      >
        {description}
      </p>
      <UnderlinedText>{callToAction}</UnderlinedText>
    </SimpleCard>
  );
};

export default FlipCardFront;
