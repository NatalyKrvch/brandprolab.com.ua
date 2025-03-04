import clsx from 'clsx';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  FLIP_CARD_BACK_TEST_ID,
  FLIP_CARD_FRONT_TEST_ID,
  FLIP_CARD_TEST_ID,
} from '@/lib/testIDs';

import { FlipCardProps } from './types';

const FlipCard = ({ front, back }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group h-full w-full cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped(!flipped)}
      data-testid={FLIP_CARD_TEST_ID}
    >
      <div
        className={twMerge(
          clsx(
            'relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]',
            flipped && '[transform:rotateY(180deg)]',
          ),
        )}
      >
        <div
          className="absolute flex h-full w-full [backface-visibility:hidden]"
          data-testid={FLIP_CARD_FRONT_TEST_ID}
        >
          {front}
        </div>
        <div
          className="absolute flex h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
          data-testid={FLIP_CARD_BACK_TEST_ID}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
