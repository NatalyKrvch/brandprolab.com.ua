import {
  FLIP_CARD_BACK_HEADER_TEST_ID,
  FLIP_CARD_BACK_LIST_ITEM_TEST_ID,
  FLIP_CARD_BACK_LIST_TEST_ID,
} from '@/lib/testIDs';

import { SimpleCard } from '../../SimpleCard';
import {
  getCardWrapperClass,
  getHeaderClass,
  getListClass,
  getListItemClass,
} from './helpers/getFlipCardBackClasses';
import type { FlipCardBackProps } from './types';

const FlipCardBack = ({ header, list }: FlipCardBackProps) => {
  return (
    <SimpleCard className={getCardWrapperClass()}>
      <p
        className={getHeaderClass()}
        data-testid={FLIP_CARD_BACK_HEADER_TEST_ID}
      >
        {header}
      </p>
      <ul className={getListClass()} data-testid={FLIP_CARD_BACK_LIST_TEST_ID}>
        {list.map(item => (
          <li
            className={getListItemClass()}
            key={item}
            data-testid={FLIP_CARD_BACK_LIST_ITEM_TEST_ID}
          >
            {item}
          </li>
        ))}
      </ul>
    </SimpleCard>
  );
};

export default FlipCardBack;
