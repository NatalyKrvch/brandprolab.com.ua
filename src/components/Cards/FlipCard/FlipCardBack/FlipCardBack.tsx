import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import {
  FLIP_CARD_BACK_HEADER_TEST_ID,
  FLIP_CARD_BACK_LIST_ITEM_TEST_ID,
  FLIP_CARD_BACK_LIST_TEST_ID,
} from '@/lib/testIDs';

import { SimpleCard } from '../../SimpleCard';
import { FlipCardBackProps } from './types';

const FlipCardBack = ({ header, list }: FlipCardBackProps) => {
  return (
    <SimpleCard
      className={twMerge(
        clsx('flex h-full flex-col gap-6 p-10', 'bg-blue-dark'),
      )}
    >
      <p
        className={twMerge(
          clsx(
            'text-lg font-bold leading-5 text-teal-medium',
            'tablet:text-2xl tablet:leading-6',
            'desktop:text-28 desktop:leading-7',
          ),
        )}
        data-testid={FLIP_CARD_BACK_HEADER_TEST_ID}
      >
        {header}
      </p>
      <ul
        className={twMerge(
          clsx(
            'list-disc pl-5',
            'text-sm font-normal leading-18 text-white',
            'tablet:text-base tablet:leading-6',
            'desktop:text-lg desktop:leading-5',
          ),
        )}
        data-testid={FLIP_CARD_BACK_LIST_TEST_ID}
      >
        {list.map(item => (
          <li
            className="my-2"
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
