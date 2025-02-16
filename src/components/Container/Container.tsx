import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  FULL_WIDTH_CONTAINER_TEST_ID,
  LIMITED_WIDTH_CONTAINER_TEST_ID,
} from '@/lib/testIDs';

import { ContainerProps } from './types';

const Container = ({
  fullWidth,
  children,
}: PropsWithChildren<ContainerProps>) => {
  return (
    <div
      className={twMerge(
        clsx(
          'mx-auto',
          !fullWidth && 'max-w-container px-4 tablet:px-12 desktop:px-12',
        ),
      )}
      data-testid={
        fullWidth
          ? FULL_WIDTH_CONTAINER_TEST_ID
          : LIMITED_WIDTH_CONTAINER_TEST_ID
      }
    >
      {children}
    </div>
  );
};

export default Container;
