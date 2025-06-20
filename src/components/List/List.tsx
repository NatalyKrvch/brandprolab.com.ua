import Image from 'next/image';

import { LIST_ITEM_TEST_ID, LIST_TEST_ID } from '@/lib/testIDs';

import type { ListProps } from './types';

const List = ({ list }: ListProps) => {
  return (
    <ul
      className="flex flex-col gap-3 tablet:gap-4 desktop:gap-4"
      data-testid={LIST_TEST_ID}
    >
      {list.map(item => (
        <li
          key={item}
          className="flex items-center gap-2 text-base text-gray-dark tablet:gap-3 tablet:text-lg desktop:gap-4 desktop:text-lg"
          data-testid={LIST_ITEM_TEST_ID}
        >
          <div className="relative h-4 w-4 shrink-0 tablet:h-5 tablet:w-5 desktop:h-6 desktop:w-6">
            <Image
              src="/icons/cards/check.svg"
              aria-hidden="true"
              fill
              alt=""
            />
          </div>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
