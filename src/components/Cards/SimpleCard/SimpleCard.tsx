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
  backgroundImageOpacity = 1,
  backgroundColor = 'bg-white',
}: PropsWithChildren<SimpleCardProps>) => {
  const containerClasses = twMerge(
    clsx(
      'relative w-full bg-cover bg-center',
      backgroundColor,
      borderColor && `border ${borderColor}`,
      ROUNDED_CLASSES,
      className,
    ),
  );

  return (
    <div
      className={containerClasses}
      style={style}
      data-testid={SIMPLE_CARD_TEST_ID}
    >
      {backgroundImageUrl && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute hidden bg-contain bg-no-repeat mid_tablet:bottom-neg-170 mid_tablet:right-neg-50 mid_tablet:block mid_tablet:h-400 mid_tablet:w-532 desktop:bottom-neg-60 desktop:right-neg-50 desktop:block desktop:h-350 desktop:w-690"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            opacity: backgroundImageOpacity,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default SimpleCard;
