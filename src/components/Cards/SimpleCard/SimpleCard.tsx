import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { SIMPLE_CARD_TEST_ID } from '@/lib/testIDs';

import type { SimpleCardProps } from './types';

const SimpleCard = ({
  children,
  borderColor,
  className,
  backgroundColor = 'bg-white',
}: PropsWithChildren<SimpleCardProps>) => {
  return (
    <div
      className={twMerge(
        clsx(
          className,
          backgroundColor,
          borderColor && `border ${borderColor}`,
          'w-full rounded-24 tablet:rounded-32 desktop:rounded-40',
        ),
      )}
      data-testid={SIMPLE_CARD_TEST_ID}
    >
      {children}
    </div>
  );
};

export default SimpleCard;
