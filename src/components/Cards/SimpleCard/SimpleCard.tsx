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
  style,
  backgroundImageUrl,
  backgroundColor = 'bg-white',
}: PropsWithChildren<SimpleCardProps>) => {
  return (
    <div
      className={twMerge(
        clsx(
          backgroundColor,
          className,
          borderColor && `border ${borderColor}`,
          ROUNDED_CLASSES,
          'w-full',
          'bg-cover bg-center',
        ),
      )}
      style={{
        ...(backgroundImageUrl
          ? { backgroundImage: `url(${backgroundImageUrl})` }
          : {}),
        ...style,
      }}
      data-testid={SIMPLE_CARD_TEST_ID}
    >
      {children}
    </div>
  );
};

export default SimpleCard;
