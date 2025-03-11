import type { PropsWithChildren } from 'react';

import { SIMPLE_CARD_TEST_ID } from '@/lib/testIDs';

import { getSimpleCardClasses } from './helpers/getSimpleCardClasses';
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
      className={getSimpleCardClasses({
        backgroundColor,
        borderColor,
        className,
      })}
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
