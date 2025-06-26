'use client';

import clsx from 'clsx';

import {
  FLIP_CARD_BACK_TEST_ID,
  FLIP_CARD_FRONT_TEST_ID,
  FLIP_CARD_TEST_ID,
} from '@/lib/testIDs';

import { useFlipCard } from './hooks/useFlipCard';
import type { FlipCardProps } from './types';

const FlipCard = ({ front, back, className }: FlipCardProps) => {
  const { flipped, handleFlip, handleKeyDown } = useFlipCard();

  return (
    <div
      className={clsx(
        'group relative cursor-pointer overflow-hidden [perspective:10000px]',
        className,
      )}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label="Показати деталі"
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      data-testid={FLIP_CARD_TEST_ID}
    >
      <div
        className={clsx(
          'relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]',
          flipped && '[transform:rotateX(-180deg)]',
        )}
      >
        <div
          className="absolute inset-0 flex h-full w-full [backface-visibility:hidden]"
          data-testid={FLIP_CARD_FRONT_TEST_ID}
        >
          {front}
        </div>

        <div
          className="absolute inset-0 flex h-full w-full [backface-visibility:hidden] [transform:rotateX(180deg)]"
          data-testid={FLIP_CARD_BACK_TEST_ID}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
