import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import { SIMPLE_CARD_TEST_ID } from '@/lib/testIDs';
import { ROUNDED_CLASSES } from '@/styles/constants';

import type { SimpleCardProps } from './types';

const SimpleCard = ({
  children,
  borderColor,
  className,
  backgroundImageUrl,
  backgroundColor = 'bg-white',
}: PropsWithChildren<SimpleCardProps>) => {
  return (
    <div
      className={twMerge(
        clsx(
          className,
          backgroundColor,
          borderColor && `border ${borderColor}`,
          'w-full',
          ROUNDED_CLASSES,
          'bg-cover bg-center',
        ),
      )}
      style={
        backgroundImageUrl
          ? { backgroundImage: `url(${backgroundImageUrl})` }
          : {}
      }
      data-testid={SIMPLE_CARD_TEST_ID}
    >
      {children}
    </div>
  );
};

export default SimpleCard;
