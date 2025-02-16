import clsx from 'clsx';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import { LIST_ITEM_TEST_ID, LIST_TEST_ID } from '@/lib/testIDs';

import { ListProps } from './types';

const List = ({ list }: ListProps) => {
  return (
    <ul
      className={twMerge(
        clsx('flex flex-col gap-3 tablet:gap-4 desktop:gap-4'),
      )}
      data-testid={LIST_TEST_ID}
    >
      {list.map(item => (
        <li
          key={item}
          data-testid={LIST_ITEM_TEST_ID}
          className={twMerge(
            clsx(
              'flex items-center gap-2 text-base',
              'tablet:gap-3 tablet:text-lg',
              'desktop:gap-4 desktop:text-lg',
            ),
          )}
        >
          <div className="relative h-4 w-4 tablet:h-5 tablet:w-5 desktop:h-6 desktop:w-6">
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
