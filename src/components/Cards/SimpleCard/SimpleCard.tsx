import clsx from 'clsx';
import type { CSSProperties, PropsWithChildren } from 'react';
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
  const mergedClasses = twMerge(
    clsx(
      backgroundColor,
      borderColor && `border ${borderColor}`,
      ROUNDED_CLASSES,
      'w-full',
      'bg-cover',
      'bg-center',
      className,
    ),
  );

  const mergedStyle: CSSProperties = {
    ...(backgroundImageUrl
      ? { backgroundImage: `url(${backgroundImageUrl})` }
      : {}),
    ...style,
  };

  return (
    <div
      className={mergedClasses}
      style={mergedStyle}
      data-testid={SIMPLE_CARD_TEST_ID}
    >
      {children}
    </div>
  );
};

export default SimpleCard;
