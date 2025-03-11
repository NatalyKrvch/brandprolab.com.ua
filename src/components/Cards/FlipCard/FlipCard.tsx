import {
  FLIP_CARD_BACK_TEST_ID,
  FLIP_CARD_FRONT_TEST_ID,
  FLIP_CARD_TEST_ID,
} from '@/lib/testIDs';

import {
  getBackSideTransformClass,
  getFlipCardInnerClass,
  getFlipCardSideClass,
  getFlipCardWrapperClass,
} from './helpers/getFlipCardClasses';
import { useFlipCard } from './hooks/useFlipCard';
import { FlipCardProps } from './types';

const FlipCard = ({ front, back }: FlipCardProps) => {
  const { flipped, handleFlip } = useFlipCard();

  return (
    <div
      className={getFlipCardWrapperClass()}
      onClick={handleFlip}
      data-testid={FLIP_CARD_TEST_ID}
    >
      <div className={getFlipCardInnerClass(flipped)}>
        <div
          className={getFlipCardSideClass()}
          data-testid={FLIP_CARD_FRONT_TEST_ID}
        >
          {front}
        </div>
        <div
          className={`${getFlipCardSideClass()} ${getBackSideTransformClass()}`}
          data-testid={FLIP_CARD_BACK_TEST_ID}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
