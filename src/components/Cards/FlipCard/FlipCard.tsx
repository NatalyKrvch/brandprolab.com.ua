import {
  FLIP_CARD_BACK_TEST_ID,
  FLIP_CARD_FRONT_TEST_ID,
  FLIP_CARD_TEST_ID,
} from '@/lib/testIDs';

import { FlipCardProps } from './types';

export default function FlipCard({ front, back }: FlipCardProps) {
  return (
    <div className="group relative h-40 w-40" data-testid={FLIP_CARD_TEST_ID}>
      <div className="relative p-20 text-center font-bold transition-transform duration-[1000ms] group-hover:[transform:rotateY(180deg)]">
        <div
          className="absolute inset-0 flex items-center justify-center p-8"
          data-testid={FLIP_CARD_FRONT_TEST_ID}
        >
          {front}
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]"
          data-testid={FLIP_CARD_BACK_TEST_ID}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
