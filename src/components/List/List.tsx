import Image from 'next/image';

import { LIST_ITEM_TEST_ID, LIST_TEST_ID } from '@/lib/testIDs';

import {
  getCheckIconWrapperClass,
  getListItemClass,
  getListWrapperClass,
} from './helpers/getListClasses';
import type { ListProps } from './types';

const List = ({ list }: ListProps) => {
  return (
    <ul className={getListWrapperClass()} data-testid={LIST_TEST_ID}>
      {list.map(item => (
        <li
          key={item}
          className={getListItemClass()}
          data-testid={LIST_ITEM_TEST_ID}
        >
          <div className={getCheckIconWrapperClass()}>
            <Image
              src="/icons/cards/check.svg"
              fill
              alt="Checkmark icon"
              aria-hidden="true"
            />
          </div>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
